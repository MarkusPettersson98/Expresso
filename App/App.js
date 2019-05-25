import React from 'react';
import { View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Navigation from './pages/Navigation';
import Loading from './pages/Loading';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import expressoApp from './pages/components/redux/reducers';
import * as firebase from 'firebase/app';
import firebaseConfig from './firebaseConfig';

import { AppLoading, Asset, Font } from 'expo';
import {
  SimpleLineIcons,
  AntDesign,
  Ionicons,
  Feather,
  MaterialIcons,
} from '@expo/vector-icons';

firebase.initializeApp(firebaseConfig);

const store = createStore(expressoApp);

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  async _loadAssetsAsync() {
    const fontAssets = cacheFonts([
      SimpleLineIcons.font,
      AntDesign.font,
      Ionicons.font,
      Feather.font,
      MaterialIcons.font,
    ]);

    await Promise.all([...fontAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Navigation />
        </View>
      </Provider>
    );
  }
}
