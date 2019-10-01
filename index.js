/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Immersive } from 'react-native-immersive'

// methods (Android only, will throw Error on iOS in __DEV__ mode)
Immersive.on()
Immersive.setImmersive(true)

AppRegistry.registerComponent(appName, () => App);
