import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StyleguideFieldUsageContentList from '../../components/fields/Styleguide-FieldUsage-ContentList';

export default {
  title: 'Components/fields/Styleguide-FieldUsage-ContentList',
  component: StyleguideFieldUsageContentList,
} as ComponentMeta<typeof StyleguideFieldUsageContentList>;

const Template: ComponentStory<typeof StyleguideFieldUsageContentList> = (args) => <StyleguideFieldUsageContentList {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'Styleguide-FieldUsage-ContentList',
  },
};
