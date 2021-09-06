/**
 * Generates React boilerplate for a component under `src/components`
 * @param componentName - the component name
 * @returns component src boilerplate as a string
 */
function generateComponentSrc(componentName: string): string {
  return `import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps } from 'lib/component-props';

type ${componentName}Props = StyleguideComponentProps & {
  fields: {
    exampleToRemove: Field<string>;
  };
};

const ${componentName} = (props: ${componentName}Props): JSX.Element => (
  <div>
    <p>{props.params.name} Component</p>
  </div>
);

export default ${componentName};
`;
}

export default generateComponentSrc;
