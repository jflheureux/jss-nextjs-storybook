import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StyleguideFieldUsageItemLink from '../../components/fields/Styleguide-FieldUsage-ItemLink';

export default {
  title: 'Components/fields/Styleguide-FieldUsage-ItemLink',
  component: StyleguideFieldUsageItemLink,
} as ComponentMeta<typeof StyleguideFieldUsageItemLink>;

const Template: ComponentStory<typeof StyleguideFieldUsageItemLink> = (args) => <StyleguideFieldUsageItemLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'Styleguide-FieldUsage-ItemLink',
  },
};
