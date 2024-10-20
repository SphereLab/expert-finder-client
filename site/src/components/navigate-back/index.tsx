import { FC } from 'react';
import { To, useNavigate } from 'react-router-dom';

import arrowIcon from '@/assets/images/arrow-icon-lg.svg';

interface NavigateBackProps {
  to?: To;
}

export const NavigateBack: FC<NavigateBackProps> = ({ to }) => {
  const navigate = useNavigate();

  const handleNavigateClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return <img src={arrowIcon} onClick={handleNavigateClick} />;
};
