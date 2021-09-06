import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StyleguideFieldUsageImage from '../../components/fields/Styleguide-FieldUsage-Image';

export default {
  title: 'Components/fields/Styleguide-FieldUsage-Image',
  component: StyleguideFieldUsageImage,
} as ComponentMeta<typeof StyleguideFieldUsageImage>;

const Template: ComponentStory<typeof StyleguideFieldUsageImage> = (args) => <StyleguideFieldUsageImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'Styleguide-FieldUsage-Image',
  },
};
