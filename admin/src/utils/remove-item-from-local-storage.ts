import { compress } from 'lz-string';

export const removeItemFromLocalStorage = (key: string) => {
  const compressedKey = compress(key);
  localStorage.removeItem(compressedKey);
};
