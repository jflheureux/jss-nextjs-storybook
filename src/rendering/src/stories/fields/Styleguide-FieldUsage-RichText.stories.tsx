import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StyleguideFieldUsageRichText from '../../components/fields/Styleguide-FieldUsage-RichText';

export default {
  title: 'Components/fields/Styleguide-FieldUsage-RichText',
  component: StyleguideFieldUsageRichText,
} as ComponentMeta<typeof StyleguideFieldUsageRichText>;

const Template: ComponentStory<typeof StyleguideFieldUsageRichText> = (args) => <StyleguideFieldUsageRichText {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'Styleguide-FieldUsage-RichText',
  },
};
