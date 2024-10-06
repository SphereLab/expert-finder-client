import { FC } from 'react';
import { Form, FormInstance } from 'antd';

import { Language as LanguageType } from '@/shared/types';

import { ExpertFormFields } from '../../types';
import { Section } from '../section';
import { Language } from './language';

export interface LanguagesProps {
  languages: LanguageType[];
  form: FormInstance<ExpertFormFields>;
}

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
