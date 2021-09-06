import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import GraphQLIntegratedDemo from '../../components/graphql/GraphQL-IntegratedDemo';

export default {
  title: 'Components/graphql/GraphQL-IntegratedDemo',
  component: GraphQLIntegratedDemo,
} as ComponentMeta<typeof GraphQLIntegratedDemo>;

const Template: ComponentStory<typeof GraphQLIntegratedDemo> = (args) => (
  <GraphQLIntegratedDemo {...args} />
);

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'GraphQL-IntegratedDemo',
  },
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'GraphQL-IntegratedDemo',
  },
};
