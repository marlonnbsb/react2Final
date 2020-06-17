/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import codePush from "react-native-code-push";

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };
MyApp = codePush(codePushOptions)(App);

AppRegistry.registerComponent(appName, () => MyApp);
