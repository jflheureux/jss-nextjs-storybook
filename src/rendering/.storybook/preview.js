import { addDecorator } from '@storybook/react';
import { withSitecoreProps } from '@degjs/storybook-decorator-sitecoreprops';

addDecorator(withSitecoreProps);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}