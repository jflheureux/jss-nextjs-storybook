import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StyleguideCustomRouteType from '../../components/styleguide/Styleguide-CustomRouteType';

export default {
  title: 'Components/styleguide/Styleguide-CustomRouteType',
  component: StyleguideCustomRouteType,
} as ComponentMeta<typeof StyleguideCustomRouteType>;

const Template: ComponentStory<typeof StyleguideCustomRouteType> = (args) => <StyleguideCustomRouteType {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'Styleguide-CustomRouteType',
  },
};
