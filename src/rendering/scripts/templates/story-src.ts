/**
 * Generates Storybook story boilerplate for a component under `src/stories`
 * @param componentFileName - the component name
 * @returns component story boilerplate as a string
 */
function generateStorySrc(
  componentFileName: string,
  componentName: string,
  componentPath: string
): string {
  const parentFolders = componentPath.replace(/\w+/g, '..');

  return `import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ${componentName} from '../${parentFolders}components/${componentPath}${componentFileName}';

export default {
  title: 'Components/${componentPath}${componentFileName}',
  component: ${componentName},
} as ComponentMeta<typeof ${componentName}>;

const Template: ComponentStory<typeof ${componentName}> = (args) => <${componentName} {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: '${componentFileName}',
  },
};
`;
}

export default generateStorySrc;
