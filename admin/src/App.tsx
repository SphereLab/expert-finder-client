import { App as AntdApp, ConfigProvider, Layout } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { Routes } from '@/components/routes';

import { AuthProvider } from './components/auth-context/auth-provider';

import './index.css';

dayjs.extend(customParseFormat);

const App = () => (
  <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            borderRadius: 4,
            borderRadiusLG: 4,
          },
          Layout: {
            triggerBg: '#fff',
            triggerColor: 'black',
            triggerHeight: 56,
          },
          Form: {
            verticalLabelPadding: '5.5px 0 5.5px 0',
            itemMarginBottom: 12,
          },
          Typography: {
            fontFamily: 'Averta-Semibold',
          },
          Tooltip: {
            colorBgSpotlight: 'rgba(48, 58, 93, 0.88)',
          },
          Notification: {
            boxShadow:
              '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.55)',
          },
          Tag: {
            // Averta-Regular breaks the tag component's alignment
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
          },
        },

        token: {
          colorPrimary: 'rgb(72, 164, 236)',
          colorError: 'rgb(250, 173, 20)',
          fontFamily: 'Averta-Regular',
          colorText: 'rgba(48, 58, 93, 0.88)',
          colorTextHeading: 'rgba(48, 58, 93, 0.88)',
          colorTextDescription: 'rgba(48, 58, 93, 0.88)',
        },
      }}
    >
      <AntdApp>
        <AuthProvider>
          <Layout>
            <Routes />
          </Layout>
        </AuthProvider>
      </AntdApp>
    </ConfigProvider>
  </GoogleOAuthProvider>
);

export default App;
