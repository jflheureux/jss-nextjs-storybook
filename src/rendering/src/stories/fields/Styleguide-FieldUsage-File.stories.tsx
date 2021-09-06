import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StyleguideFieldUsageFile from '../../components/fields/Styleguide-FieldUsage-File';

export default {
  title: 'Components/fields/Styleguide-FieldUsage-File',
  component: StyleguideFieldUsageFile,
} as ComponentMeta<typeof StyleguideFieldUsageFile>;

const Template: ComponentStory<typeof StyleguideFieldUsageFile> = (args) => <StyleguideFieldUsageFile {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'Styleguide-FieldUsage-File',
  },
};
