import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StyleguideSection from '../../components/styleguide/Styleguide-Section';

export default {
  title: 'Components/styleguide/Styleguide-Section',
  component: StyleguideSection,
} as ComponentMeta<typeof StyleguideSection>;

const Template: ComponentStory<typeof StyleguideSection> = (args) => <StyleguideSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'Styleguide-Section',
  },
};
