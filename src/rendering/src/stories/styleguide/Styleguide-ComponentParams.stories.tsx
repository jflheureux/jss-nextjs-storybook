import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StyleguideComponentParams from '../../components/styleguide/Styleguide-ComponentParams';

export default {
  title: 'Components/styleguide/Styleguide-ComponentParams',
  component: StyleguideComponentParams,
} as ComponentMeta<typeof StyleguideComponentParams>;

const Template: ComponentStory<typeof StyleguideComponentParams> = (args) => <StyleguideComponentParams {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'Styleguide-ComponentParams',
  },
};
