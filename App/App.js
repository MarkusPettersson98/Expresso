import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Topcomp from './pages/components/Topcomp';
import Blockcomp from './pages/components/Blockcomp';
import Maincomp from './pages/components/Maincomp';
import Mapcomp from './pages/components/Mapcomp';
import Screen2 from './pages/Screen2';
import Homepage from './pages/Homepage';
import Menucomp from './pages/Menucomp';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Menucomp />
      </View>
    );
  }
}

