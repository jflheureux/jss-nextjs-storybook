import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StyleguideSpecimen from '../../components/styleguide/Styleguide-Specimen';

export default {
  title: 'Components/styleguide/Styleguide-Specimen',
  component: StyleguideSpecimen,
} as ComponentMeta<typeof StyleguideSpecimen>;

const Template: ComponentStory<typeof StyleguideSpecimen> = (args) => <StyleguideSpecimen {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'Styleguide-Specimen',
  },
};