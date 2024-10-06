import { FC } from 'react';
import { Fragment } from 'react/jsx-runtime';
import { FormInstance } from 'antd';

import { ExpertFormFields } from '../../types';
import { EditorField } from '../editor-field';

interface EditorsProps {
  form: FormInstance<ExpertFormFields>;
}

export const Editors: FC<EditorsProps> = ({ form }) => {
  const handleEditorChange = (content: string, fieldName: string) => {
    form.setFieldValue(fieldName as keyof ExpertFormFields, content);
  };

  return (
    <Fragment>
      <EditorField
        form={form}
        handleEditorChange={handleEditorChange}
        name="aboutMe"
        title="About me"
      />

      <EditorField
        form={form}
        handleEditorChange={handleEditorChange}
        name="technologiesAndSkills"
        title="Technologies and Skills"
      />

      <EditorField
        form={form}
        handleEditorChange={handleEditorChange}
        name="educationAndCertification"
        title="Education and Certification"
        required={false}
      />

      <EditorField
        form={form}
        handleEditorChange={handleEditorChange}
        name="experienceHighlights"
        title="Experience Highlights"
        required={false}
      />

      <EditorField
        form={form}
        handleEditorChange={handleEditorChange}
        name="projectIndustriesHistory"
        title="Project Industries History"
        required={false}
      />
    </Fragment>
  );
};
