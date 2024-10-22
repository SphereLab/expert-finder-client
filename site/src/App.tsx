import { Fragment } from 'react';

import { Routes } from '@/components/routes';
import { TailwindIndicator } from '@/components/tailwind-indicator';

function App() {
  return (
    <Fragment>
      <Routes />
      <TailwindIndicator />
    </Fragment>
  );
}

export default App;
