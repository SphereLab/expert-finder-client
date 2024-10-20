import { Outlet } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';

import { Banner } from '../banner';
import { Header } from '../header';

export const AppLayout = () => {
  return (
    <Fragment>
      <Header />
      <Banner />
      <Outlet />
    </Fragment>
  );
};
