import React from "react";
import { View } from "react-native";
import Menucomp from "./pages/Menucomp";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import expressoApp from './pages/components/redux/reducers'

const store = createStore(expressoApp);

export default class App extends React.Component {
  render() {
        return (
          <Provider store={store}>
            <View style={{ flex: 1 }}>
                <Menucomp />
            </View>
          </Provider>
        );
    }
}
