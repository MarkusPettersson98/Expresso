import React from 'react';
import { View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Navigation from './pages/Navigation';
import Login from './pages/Login'
import Loading from './pages/Loading'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import expressoApp from './pages/components/redux/reducers';
import * as firebase from "firebase/app";
import firebaseConfig from './firebaseConfig'

firebase.initializeApp(firebaseConfig);

const store = createStore(expressoApp);

const SwitchRouteConfig = {
  Loading: Loading,
  Homepage: Navigation,
  Login: Login,
}

const SwitchConfig = {
  initialRouteName: 'Loading',
}

const Navigator = createSwitchNavigator(SwitchRouteConfig, SwitchConfig);
const AuthNavigator = createAppContainer(Navigator);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <AuthNavigator />
                </View>
            </Provider>
        );
    }
}
