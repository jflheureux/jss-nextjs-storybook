import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps } from 'lib/component-props';

const GraphQLLayout = ({ rendering }: StyleguideComponentProps): JSX.Element => {
  return (
    <div data-e2e-id="graphql-layout">
      <Placeholder name="jss-graphql-layout" rendering={rendering} />
    </div>
  );
};

export default GraphQLLayout;
