import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ContentBlock from '../components/ContentBlock';

export default {
  title: 'Components/ContentBlock',
  component: ContentBlock,
} as ComponentMeta<typeof ContentBlock>;

const Template: ComponentStory<typeof ContentBlock> = (args) => <ContentBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'ContentBlock',
  },
};
