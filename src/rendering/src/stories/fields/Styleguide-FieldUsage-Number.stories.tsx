import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StyleguideFieldUsageNumber from '../../components/fields/Styleguide-FieldUsage-Number';

export default {
  title: 'Components/fields/Styleguide-FieldUsage-Number',
  component: StyleguideFieldUsageNumber,
} as ComponentMeta<typeof StyleguideFieldUsageNumber>;

const Template: ComponentStory<typeof StyleguideFieldUsageNumber> = (args) => <StyleguideFieldUsageNumber {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'Styleguide-FieldUsage-Number',
  },
};
