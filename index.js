/**
 * @format
 */
import {getStorybookUI, configure} from '@storybook/react-native';
import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';

configure(() => {
  require('./src/stories.js'); // we will create this file in the next steps
}, module);

const StorybookUIRoot = getStorybookUI({});

AppRegistry.registerComponent(appName, () => StorybookUIRoot);
