import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StyleguideFieldUsageCustom from '../../components/fields/Styleguide-FieldUsage-Custom';

export default {
  title: 'Components/fields/Styleguide-FieldUsage-Custom',
  component: StyleguideFieldUsageCustom,
} as ComponentMeta<typeof StyleguideFieldUsageCustom>;

const Template: ComponentStory<typeof StyleguideFieldUsageCustom> = (args) => <StyleguideFieldUsageCustom {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'Styleguide-FieldUsage-Custom',
  },
};
