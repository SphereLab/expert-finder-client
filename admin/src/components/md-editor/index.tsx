import { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import rehypeSanitize from 'rehype-sanitize';
import MDEditor, { MDEditorProps } from '@uiw/react-md-editor';

import styles from './md-editor.module.css';

interface EditorProps extends Omit<MDEditorProps, 'onChange'> {
  required?: boolean;
  requiredMessage?: string;
  needToShowMessage?: boolean;
  onChange: (content: string) => void;
}

const Editor: FC<EditorProps> = ({
  required,
  requiredMessage,
  needToShowMessage,
  onChange,
  value: propsValue,
  ...props
}) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(propsValue ?? '');
  }, [propsValue]);

  const handleContentChange = (content?: string) => {
    setValue(content ?? '');

    onChange(content ?? '');
  };

  return (
    <div data-color-mode="light">
      <MDEditor
        {...props}
        value={value}
        onChange={handleContentChange}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
        height={400}
        textareaProps={{
          placeholder: 'Please enter Markdown text',
        }}
      />
      {needToShowMessage && (
        <div
          className={clsx(styles.requiredMessage, {
            [styles.showMessage]: required,
          })}
        >
          {requiredMessage}
        </div>
      )}
    </div>
  );
};

export { Editor as MDEditor };
