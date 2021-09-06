import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StyleguideRouteFields from '../../components/styleguide/Styleguide-RouteFields';

export default {
  title: 'Components/styleguide/Styleguide-RouteFields',
  component: StyleguideRouteFields,
} as ComponentMeta<typeof StyleguideRouteFields>;

const Template: ComponentStory<typeof StyleguideRouteFields> = (args) => <StyleguideRouteFields {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'Styleguide-RouteFields',
  },
};
