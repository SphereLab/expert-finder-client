import { Fragment } from 'react';

import { Banner } from '@/components/banner';
import { PATHS } from '@/components/routes/paths';

export const Experts = () => {
  return (
    <Fragment>
      <Banner link={PATHS.SPEAK_WITH_ADVISOR} />
    </Fragment>
  );
};
