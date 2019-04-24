import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import CoffeeList from './CoffeeList';
import OrderFooter from './OrderFooter';
import OrderHeader from './OrderHeader';

import { shops } from '../dummy-data';

const Order = props => {

    const cart = props.cart;
    
    /* Debugging variables TODO: replace with API calls */
    const Biblioteket = shops.find((shop) => shop.name === 'Biblioteket');

    return (
        <View style={{ flex: 1 }}>
            <OrderHeader picture={Biblioteket.picture} />
            <CoffeeList selectedShop={Biblioteket.name} />
            <OrderFooter cart={cart} />
        </View>
    );

};

const mapStateToProps = state => {
    return { cart: state.cart };
};

export default connect(
    mapStateToProps,
)(Order);