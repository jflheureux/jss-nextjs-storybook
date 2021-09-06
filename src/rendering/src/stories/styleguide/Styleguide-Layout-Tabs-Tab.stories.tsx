import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StyleguideLayoutTabsTab from '../../components/styleguide/Styleguide-Layout-Tabs-Tab';

export default {
  title: 'Components/styleguide/Styleguide-Layout-Tabs-Tab',
  component: StyleguideLayoutTabsTab,
} as ComponentMeta<typeof StyleguideLayoutTabsTab>;

const Template: ComponentStory<typeof StyleguideLayoutTabsTab> = (args) => <StyleguideLayoutTabsTab {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'Styleguide-Layout-Tabs-Tab',
  },
};
