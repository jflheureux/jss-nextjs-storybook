import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StyleguideFieldUsageDate from '../../components/fields/Styleguide-FieldUsage-Date';

export default {
  title: 'Components/fields/Styleguide-FieldUsage-Date',
  component: StyleguideFieldUsageDate,
} as ComponentMeta<typeof StyleguideFieldUsageDate>;

const Template: ComponentStory<typeof StyleguideFieldUsageDate> = (args) => <StyleguideFieldUsageDate {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'Styleguide-FieldUsage-Date',
  },
};
