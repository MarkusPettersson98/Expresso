import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import CoffeeList from './CoffeeList';
import CafeFooter from './CafeFooter';
import CafeHeader from './CafeHeader';

import { shops } from '../dummy-data';
/**
 * @file This is the order page entry point. When a user selects a shop they are sent here.
 *
 * Order.js is broken down into three main components. A header, the coffee assortment and a footer
 * with information about the current order, such as number of coffees currently in cart and total price.
 *
 * Order.js is responsible for passing down information about the selected shop aswell as the cart
 * to it's child component.
 *
 */

const Cafe = props => {
    /* Debugging variables TODO: replace with API calls */
    const shop = shops.find(
        shop => shop.name === props.navigation.state.params.selectedShop,
    );

    const cart = props.cart;

    const orderInfo = {
        shop: shop.name,
        cart: cart,
    };

    return (
        <View style={{ flex: 1 }}>
            <CafeHeader picture={shop.picture} />
            <CoffeeList selectedShop={shop.name} />
            <CafeFooter orderInfo={orderInfo} />
        </View>
    );
};

const mapStateToProps = state => {
    return { cart: state.cart };
};

export default connect(mapStateToProps)(Cafe);
