/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Keyboard
} from 'react-native';
import {WebView} from 'react-native-webview'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Immersive } from 'react-native-immersive';
// methods (Android only, will throw Error on iOS in __DEV__ mode)
Immersive.on()
Immersive.setImmersive(true)

const App: () => React$Node = class Blink extends Component {
    static navigationOptions = {
        header: null
    }
  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow() {
    Immersive.on()
Immersive.setImmersive(true)
  }

  _keyboardDidHide() {
    Immersive.on()
  Immersive.setImmersive(true)
  }
  render() {
  return (
      <SafeAreaView style={{flex:1}}>
        <WebView source={{uri: 'https://lab.oiiku.com/app/pos/'}}  javaScriptEnabled={true}
   domStorageEnabled={true}
   scalesPageToFit={true}/>
      </SafeAreaView>
  );
  }
};

const styles = StyleSheet.create({
});

export default App;
