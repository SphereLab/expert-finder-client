import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Divider, Form } from 'antd';

import { handleApiRequest } from '@/api/api-service';
import { REFS } from '@/api/refs';
import { Loader } from '@/components/loader';
import { PATHS } from '@/components/routes/paths';
import { ExpertType, Language, Location, Position, Skill } from '@/shared/types';

import { Editors } from './components/editors';
import { Footer } from './components/footer';
import { General } from './components/general';

import styles from './expert.module.css';

export const Expert = () => {
  const [form] = Form.useForm<ExpertType>();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [languages, setLanguages] = useState<Language[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [positions, setPositions] = useState<Position[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    Promise.all([
      handleApiRequest<Language[]>({
        url: REFS.LANGUAGES,
        method: 'GET',
      }).then(setLanguages),

      handleApiRequest<Location[]>({
        url: REFS.LOCATIONS,
        method: 'GET',
      }).then(setLocations),

      handleApiRequest<Position[]>({
        url: REFS.POSITIONS,
        method: 'GET',
      }).then(setPositions),

      handleApiRequest<Skill[]>({
        url: REFS.SKILLS,
        method: 'GET',
      }).then(setSkills),
    ]).then(() => {
      setIsLoading(false);
    });
  }, []);

  const navigateToExpertsPage = () => {
    navigate(PATHS.EXPERTS);
  };

  const handleSubmit = (qwe: ExpertType) => {
    console.log(qwe);
  };

  return (
    <div className={styles.root}>
      {isLoading && <Loader />}
      <Form
        form={form}
        layout="vertical"
        autoComplete="off"
        requiredMark={false}
        scrollToFirstError={{
          behavior: actions => {
            actions.forEach(({ el, top }) => {
              el.scrollTop = top < 1000 ? top - 100 : top + 100;
            });
          },
        }}
        onFinish={handleSubmit}
      >
        <General
          locations={locations}
          positions={positions}
          skills={skills}
          languages={languages}
        />

        <Divider />

        <Editors form={form} />

        <Footer onCancel={navigateToExpertsPage} isLoading={isLoading} />
      </Form>
    </div>
  );
};
