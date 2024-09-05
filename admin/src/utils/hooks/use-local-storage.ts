import { useCallback, useState } from 'react';

import { getItemFromLocalStorage } from '../get-item-from-local-storage';
import { setItemToLocalStorage } from '../set-item-to-local-storage';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = getItemFromLocalStorage(key);

      return item ? item : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        setItemToLocalStorage(key, valueToStore);
      }
    },
    [key, storedValue],
  );
  return [storedValue, setValue] as const;
}
