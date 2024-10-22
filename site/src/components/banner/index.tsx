import { FC } from 'react';
import { Link, To } from 'react-router-dom';

import styles from './banner.module.css';

interface BannerProps {
  id?: string;
  subtitle?: string;
  buttonText?: string;
  link: To;
}

export const Banner: FC<BannerProps> = ({
  id,
  subtitle = 'Did not find the desired profile? More experts are available.',
  buttonText = 'Talk to our team',
  link,
}) => (
  <div id={id} className={styles.root}>
    <div className={styles.banner}>
      <h1 className={styles.title}>
        With 19 years of experience, Sphere knows how to find the right talent and work closely with
        clients to get the job done.
      </h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <Link to={link} className={styles.button}>
        {buttonText}
      </Link>
    </div>
  </div>
);
