import { useState } from 'react';

import { getItemFromLocalStorage } from '../get-item-from-local-storage';

export const useSelectedColumns = (name: string, defaultColumnsKeys: string[]) => {
  const [selectedColumns, setSelectedColumns] = useState(() => {
    const savedColumns = getItemFromLocalStorage(name);

    if (savedColumns) {
      return savedColumns;
    }

    return defaultColumnsKeys;
  });

  return [selectedColumns, setSelectedColumns];
};
