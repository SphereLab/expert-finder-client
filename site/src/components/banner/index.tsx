import { Button } from '../button';

import styles from './banner.module.css';

export const Banner = () => {
  return (
    <div className={styles.root}>
      <div className={styles.banner}>
        <div className={styles.firstColumn}>
          <h1 className={styles.title}>Find an Expert</h1>
          <h2 className={styles.subtitle}>
            Sphere Software has over 15 years of experience providing the right expert talent and
            collaborating with partners to meet their needs.
          </h2>
        </div>
        <div className={styles.secondColumnWrapper}>
          <div className={styles.secondColumn}>
            <span className={styles.description}>Did not find the desired profile?</span>
            <span className={styles.description}>More experts are available.</span>
            <Button className={styles.button} primary>
              Talk to our team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
