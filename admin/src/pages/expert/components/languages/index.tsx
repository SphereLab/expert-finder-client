import { FC } from 'react';
import { Form, FormInstance } from 'antd';

import { ExpertType, Language as LanguageType } from '@/shared/types';

import { Section } from '../section';
import { Language } from './language';

export interface LanguagesProps {
  languages: LanguageType[];
  form: FormInstance<ExpertType>;
}

// TODO: probably delete the folder

export const Languages: FC<LanguagesProps> = ({ languages, form }) => (
  <Section>
    <Form.List name="languages">
      {(fields, { add, remove }) =>
        fields.map((field, index) => (
          <Language
            key={index}
            add={add}
            remove={() => remove(index)}
            field={field}
            form={form}
            languages={languages}
            isFirstItem={index === 0}
            isLastItem={index === fields.length - 1}
          />
        ))
      }
    </Form.List>
  </Section>
);
