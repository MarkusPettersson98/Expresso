import React, { Component } from 'react';
import Purchases from './components/purchases/Purchases';

export default class orderpage extends Component {
    render() {
        return <Purchases QR={this.props.navigation.state.params.orderID} />;
    }
}
