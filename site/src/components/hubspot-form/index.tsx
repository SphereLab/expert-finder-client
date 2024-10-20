import { FC, useEffect, useState } from 'react';

import { Spinner } from '../spinner';

import styles from './hubspot-form.module.css';

interface HubspotFormProps {
  className?: string;
  portalId: string;
  formId: string;
}

export const HubspotForm: FC<HubspotFormProps> = ({ formId, portalId }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/shell.js';
    script.async = true; // Ensures non-blocking behavior
    document.body.appendChild(script);

    setIsLoading(true);

    script.addEventListener('load', () => {
      // @ts-expect-error
      if (window.hbspt) {
        // @ts-expect-error
        window.hbspt.forms.create({
          portalId: portalId,
          formId: formId,
          target: '#hubspotForm',
          onFormReady: () => {
            setIsLoading(false);
          },
        });
      }
    });

    return () => {
      document.body.removeChild(script);
      setIsLoading(false);
    };
  }, [formId, portalId]);

  return (
    <div className={styles.root}>
      {isLoading && <Spinner />}
      <div id="hubspotForm" className={styles.form} />
    </div>
  );
};
