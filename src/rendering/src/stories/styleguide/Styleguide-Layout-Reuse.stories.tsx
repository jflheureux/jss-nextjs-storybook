import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StyleguideLayoutReuse from '../../components/styleguide/Styleguide-Layout-Reuse';

export default {
  title: 'Components/styleguide/Styleguide-Layout-Reuse',
  component: StyleguideLayoutReuse,
} as ComponentMeta<typeof StyleguideLayoutReuse>;

const Template: ComponentStory<typeof StyleguideLayoutReuse> = (args) => <StyleguideLayoutReuse {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'Styleguide-Layout-Reuse',
  },
};