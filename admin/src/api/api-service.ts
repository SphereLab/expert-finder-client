import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

import { getToken } from '@/utils/get-token';
import { logout } from '@/utils/logout';
import { setAccessToken } from '@/utils/set-access-token';

import { BASE_URL, REFS } from './refs';

const axiosParams = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const baseAxiosInstance = axios.create(axiosParams);
const refreshApi = axios.create(axiosParams);

baseAxiosInstance.interceptors.request.use(request => {
  if (request.url !== REFS.AUTH) {
    request.headers['Authorization'] = `Bearer ${getToken('access')}`;
  }

  return request;
});

interface IApiRequest {
  url: string;
  method?: string;
  body?: any;
  isBlob?: boolean;
  signal?: AbortSignal;
  isFormData?: boolean;
}

const handleAuthError = (failedRequest: any) => {
  return refreshApi(REFS.REFRESH_TOKEN, {
    method: 'POST',
    data: {
      refresh_token: getToken('refresh'),
    },
  }).then(({ data }) => {
    setAccessToken(data.access_token);

    failedRequest.response.config.headers['Authorization'] = 'Bearer ' + data.access_token;
    return Promise.resolve();
  });
};

const handleRefreshFailed = async () => {
  try {
    logout({
      forceLogout: true,
      redirect: true,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

createAuthRefreshInterceptor(baseAxiosInstance, handleAuthError);
createAuthRefreshInterceptor(refreshApi, handleRefreshFailed);

export const handleApiRequest = async <T>({
  url,
  method = 'GET',
  body = '',
  isBlob = false,
  isFormData = false,
  signal,
}: IApiRequest) => {
  try {
    const response = await baseAxiosInstance(url, {
      method,
      signal,
      headers: {
        'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
      },
      responseType: isBlob ? 'blob' : 'json',
      ...(body ? { data: body } : {}),
    });

    return response.data as Promise<T>;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data;
    } else {
      throw new Error('different error than axios');
    }
  }
};
