import { FC } from 'react';
import { Form, Input, InputNumber, Select } from 'antd';
import timezones from 'timezones-list';

import { CustomRow } from '@/components/custom-row';
import { fieldRules, statuses } from '@/shared/constants';
import { ExpertType, Language, Location, Position, Skill } from '@/shared/types';

import { Section } from '../section';
import { Title } from '../title';

import styles from './general.module.css';

const FormItem = Form.Item;
const { Option } = Select;

interface GeneralProps {
  languages: Language[];
  locations: Location[];
  positions: Position[];
  skills: Skill[];
}

export const General: FC<GeneralProps> = ({ locations, positions, skills, languages }) => (
  <Section>
    <Title title="General information" className={styles.title} />

    <CustomRow className={styles.row}>
      <FormItem<ExpertType> className={styles.formItem} name="name" label="Name" rules={fieldRules}>
        <Input size="large" placeholder="Enter name here" />
      </FormItem>

      <FormItem<ExpertType>
        className={styles.formItem}
        name="displayName"
        label="Display name"
        rules={fieldRules}
      >
        <Input size="large" placeholder="Enter display name here" />
      </FormItem>

      <FormItem<ExpertType>
        className={styles.formItem}
        // name="displayName"
        label="Avatar"
        // rules={fieldRules}
      >
        Upload
      </FormItem>

      <FormItem<ExpertType> className={styles.formItem} name="slug" label="Slug" rules={fieldRules}>
        <Input size="large" placeholder="Enter slug here" />
      </FormItem>

      <FormItem<ExpertType>
        className={styles.formItem}
        name="totalYears"
        label="Total years"
        rules={fieldRules}
      >
        <InputNumber className="fullWidth" size="large" placeholder="Enter total years here" />
      </FormItem>

      <FormItem<ExpertType>
        className={styles.formItem}
        name="yearsOfExpertise"
        label="Years of expertise"
        rules={fieldRules}
      >
        <Input size="large" placeholder="Enter years of expertise here" />
      </FormItem>

      <FormItem<ExpertType>
        className={styles.formItem}
        name="timezone"
        label="Timezone"
        rules={fieldRules}
      >
        <Select size="large" placeholder="Select timezone here" showSearch optionFilterProp="label">
          {timezones.map(timezone => (
            <Option key={timezone.tzCode} value={timezone.tzCode} label={timezone.label}>
              {timezone.label}
            </Option>
          ))}
        </Select>
      </FormItem>

      <FormItem<ExpertType>
        className={styles.formItem}
        name="locationId"
        label="Location"
        rules={fieldRules}
      >
        <Select size="large" placeholder="Select location here" showSearch optionFilterProp="label">
          {locations.map(location => (
            <Option key={location.id} value={location.id} label={location.name}>
              {location.name}
            </Option>
          ))}
        </Select>
      </FormItem>

      <FormItem<ExpertType>
        className={styles.formItem}
        name="expertStatus"
        label="Status"
        rules={fieldRules}
      >
        <Select size="large" placeholder="Select status here">
          {statuses.map(status => (
            <Option key={status.value} value={status.value}>
              {status.label}
            </Option>
          ))}
        </Select>
      </FormItem>

      <FormItem<ExpertType>
        className={styles.formItem}
        name="languagesIds"
        label="Languages"
        rules={fieldRules}
      >
        <Select
          size="large"
          placeholder="Select language(s) here"
          mode="multiple"
          allowClear
          showSearch
          optionFilterProp="label"
        >
          {languages.map(language => (
            <Option key={language.id} value={language.id} label={language.name}>
              {language.name}
            </Option>
          ))}
        </Select>
      </FormItem>

      <FormItem<ExpertType>
        className={styles.formItem}
        name="positionId"
        label="Position"
        rules={fieldRules}
      >
        <Select size="large" placeholder="Select position here" showSearch optionFilterProp="label">
          {positions.map(position => (
            <Option key={position.id} value={position.id} label={position.name}>
              {position.name}
            </Option>
          ))}
        </Select>
      </FormItem>

      <FormItem<ExpertType>
        className={styles.formItem}
        name="expertiseIds"
        label="Expertise"
        rules={fieldRules}
      >
        <Select
          size="large"
          placeholder="Select expertise(s) here"
          mode="multiple"
          allowClear
          showSearch
          optionFilterProp="label"
        >
          {skills.map(skill => (
            <Option key={skill.id} value={skill.id} label={skill.name}>
              {skill.name}
            </Option>
          ))}
        </Select>
      </FormItem>

      <FormItem<ExpertType>
        className={styles.formItem}
        name="skillIds"
        label="Skills"
        rules={fieldRules}
      >
        <Select
          size="large"
          placeholder="Select skill(s) here"
          mode="multiple"
          allowClear
          showSearch
          optionFilterProp="label"
        >
          {skills.map(skill => (
            <Option key={skill.id} value={skill.id} label={skill.name}>
              {skill.name}
            </Option>
          ))}
        </Select>
      </FormItem>
    </CustomRow>
  </Section>
);
