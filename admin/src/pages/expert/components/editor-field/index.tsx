import { FC } from 'react';
import { Form, FormInstance, Input } from 'antd';

import { MDEditor } from '@/components/md-editor';
import { fieldRules } from '@/shared/constants';
import { ExpertType } from '@/shared/types';

import { Section } from '../section';
import { Title } from '../title';

import styles from './editor-field.module.css';

const FormItem = Form.Item;

interface EditorFieldProps {
  title: string;
  form: FormInstance;
  name: keyof ExpertType;
  handleEditorChange: (content: string, fieldName: string) => void;
  required?: boolean;
}

export const EditorField: FC<EditorFieldProps> = ({
  form,
  name,
  handleEditorChange,
  title,
  required = true,
}) => (
  <Section>
    <Title title={title} className="marginTop24" />
    <div>
      <MDEditor
        value={form.getFieldValue(name)}
        required
        needToShowMessage={false}
        onChange={content => {
          handleEditorChange(content, name);
          form.validateFields([name]);
        }}
      />
      <FormItem<ExpertType>
        name={name}
        className={styles.editorInput}
        {...(required && {
          rules: fieldRules,
        })}
      >
        <Input />
      </FormItem>
    </div>
  </Section>
);
