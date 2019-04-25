import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import CoffeeList from './CoffeeList';
import OrderFooter from './OrderFooter';
import OrderHeader from './OrderHeader';

import { shops } from '../dummy-data';

const Order = props => {
    const selectedShop = props.navigation.state.params.selectedShop;
    const foundShop = shops.find(shop => shop.name === selectedShop);

    const cart = props.cart;
    return (
        <View style={{ flex: 1 }}>
            <OrderHeader picture={foundShop.picture} />
            <CoffeeList selectedShop={foundShop.name} />
            <OrderFooter cart={cart} />
        </View>
    );
};

const mapStateToProps = state => {
    return { cart: state.cart };
};

export default connect(mapStateToProps)(Order);
