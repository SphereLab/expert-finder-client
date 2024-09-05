import { compress } from 'lz-string';

export const setItemToLocalStorage = (key: string, value: any) => {
  const compressedKey = compress(key);
  const compressedValue = compress(JSON.stringify(value));

  localStorage.setItem(compressedKey, compressedValue);
};
