import { FC, Fragment, useEffect, useState } from 'react';
import { Button, Divider, Form, FormInstance, FormListFieldData, Row, Select } from 'antd';
import clsx from 'clsx';
import { DeleteOutlined } from '@ant-design/icons';

import { CustomPopconfirm } from '@/components/custom-popconfirm';
import { CustomRow } from '@/components/custom-row';
import { fieldRules } from '@/shared/constants';
import { Language as LanguageType } from '@/shared/types';

import { ExpertFormFields } from '../../types';
import { Title } from '../title';

import styles from './languages.module.css';

const { Option } = Select;
const FormItem = Form.Item;

interface LanguageProps {
  languages: LanguageType[];
  add: () => void;
  remove: () => void;
  field: FormListFieldData;
  form: FormInstance;
  isLastItem: boolean;
  isFirstItem: boolean;
}

export const Language: FC<LanguageProps> = ({
  add,
  remove,
  isFirstItem,
  isLastItem,
  field,
  form,
  languages,
}) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    setIsButtonDisabled(!checkFieldsFullness());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.getFieldValue(['languages', field.name, 'languageId'])]);

  const handleFormItemChange = () => {
    setIsButtonDisabled(!checkFieldsFullness());
  };

  const getFormFieldValue = (fieldName: string) => {
    const fieldValue = form.getFieldValue(['languages', field.name, fieldName]);

    return fieldValue;
  };

  const checkFieldsFullness = () => {
    const isFormFieldsFilled = ['languageId', 'proficiency_level']
      .map(getFormFieldValue)
      .every(Boolean);

    return isFormFieldsFilled;
  };

  return (
    <Fragment>
      {isFirstItem ? (
        <Title title="Languages" />
      ) : (
        <Divider className={styles.additionalItemsDivider} />
      )}

      <div className={styles.additionalSectionWrapper}>
        <div className={clsx(styles.section, styles.additionalSection)}>
          <CustomRow>
            <FormItem<ExpertFormFields['languages']>
              className={styles.formItem}
              name={[field.name, 'languageId']}
              label="Language"
              rules={fieldRules}
            >
              <Select
                size="large"
                placeholder="Select Language here"
                onChange={handleFormItemChange}
                showSearch
              >
                {languages.map(({ id, name }) => (
                  <Option key={id} value={name}>
                    {name}
                  </Option>
                ))}
              </Select>
            </FormItem>
            {/* <FormItem
              className={styles.formItem}
              name={[field.name, 'proficiency_level']}
              label="Proficiency level"
              rules={fieldRules}
            >
              <Select
                size="large"
                placeholder="Select Proficiency level here"
                onChange={handleFormItemChange}
              >
                {proficiencyLevels.map(({ key, value }) => (
                  <Option key={key} value={value}>
                    {value}
                  </Option>
                ))}
              </Select>
            </FormItem> */}
            <FormItem label className={styles.languagesDeleteIconWrapper}>
              <Divider
                style={{
                  height: 42,
                }}
                className={clsx(isFirstItem && styles.visibilityHidden, styles.deleteIconDivider)}
                type="vertical"
              />

              <CustomPopconfirm onConfirm={remove}>
                <DeleteOutlined
                  className={clsx(isFirstItem && styles.visibilityHidden, styles.deleteIcon)}
                />
              </CustomPopconfirm>
            </FormItem>
          </CustomRow>
        </div>

        <div className={styles.visibilityHidden}>hidden</div>
      </div>

      <Row className={styles.addAnotherButton} justify="end">
        {isLastItem && (
          <Button type="dashed" onClick={() => add()} disabled={isButtonDisabled}>
            + Add language
          </Button>
        )}
      </Row>
    </Fragment>
  );
};
