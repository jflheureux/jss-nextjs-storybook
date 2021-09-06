import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StyleguideFieldUsageText from '../../components/fields/Styleguide-FieldUsage-Text';

export default {
  title: 'Components/fields/Styleguide-FieldUsage-Text',
  component: StyleguideFieldUsageText,
} as ComponentMeta<typeof StyleguideFieldUsageText>;

const Template: ComponentStory<typeof StyleguideFieldUsageText> = (args) => <StyleguideFieldUsageText {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'Styleguide-FieldUsage-Text',
  },
};
