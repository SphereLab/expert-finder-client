import { compress, decompress } from 'lz-string';

import { logout } from './logout';

export const getItemFromLocalStorage = (key: string): any => {
  const compressedKey = compress(key);
  const compressedValue = localStorage.getItem(compressedKey) ?? '';

  try {
    return JSON.parse(decompress(compressedValue));
  } catch {
    logout();
  }
};
