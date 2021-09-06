import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StyleguideMultilingual from '../../components/styleguide/Styleguide-Multilingual';

export default {
  title: 'Components/styleguide/Styleguide-Multilingual',
  component: StyleguideMultilingual,
} as ComponentMeta<typeof StyleguideMultilingual>;

const Template: ComponentStory<typeof StyleguideMultilingual> = (args) => (
  <StyleguideMultilingual {...args} />
);

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'Styleguide-Multilingual',
  },
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'Styleguide-Multilingual',
  },
};
