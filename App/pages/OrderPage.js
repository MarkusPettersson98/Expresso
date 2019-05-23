import React, { Component } from 'react';
import { Text } from 'react-native';
import Purchases from './components/purchases/Purchases';

export default class orderpage extends Component {
  render() {
    if (this.props.navigation.state.params) {
      return <Purchases QR={this.props.navigation.state.params.orderID} />;
    } else {
      return <Text> Make a purchase </Text>;
    }
  }
}
