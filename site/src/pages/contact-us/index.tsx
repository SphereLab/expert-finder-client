import { HubspotForm } from '@/components/hubspot-form';
import { NavigateBack } from '@/components/navigate-back';

import styles from './contact-us.module.css';

export const ContactUs = () => (
  <div className={styles.root}>
    <NavigateBack />
    <div className={styles.form}>
      <HubspotForm portalId="5257433" formId="63c24b26-5a80-4455-b703-17d743db69e9" />
    </div>
  </div>
);
