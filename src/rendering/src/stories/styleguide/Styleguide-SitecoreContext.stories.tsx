import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StyleguideSitecoreContext from '../../components/styleguide/Styleguide-SitecoreContext';

export default {
  title: 'Components/styleguide/Styleguide-SitecoreContext',
  component: StyleguideSitecoreContext,
} as ComponentMeta<typeof StyleguideSitecoreContext>;

const Template: ComponentStory<typeof StyleguideSitecoreContext> = (args) => <StyleguideSitecoreContext {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'Styleguide-SitecoreContext',
  },
};
