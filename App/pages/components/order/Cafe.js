import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import CoffeeList from './CoffeeList';
import CafeFooter from './CafeFooter';
import CafeHeader from './CafeHeader';

import { shops } from '../dummy-data';

const Cafe = props => {
    const cart = props.cart;

    /* Debugging variables TODO: replace with API calls */
    const Biblioteket = shops.find(shop => shop.name === 'Biblioteket');

    return (
        <View style={{ flex: 1 }}>
            <CafeHeader picture={Biblioteket.picture} />
            <CoffeeList selectedShop={Biblioteket.name} />
            <CafeFooter cart={cart} />
        </View>
    );
};

const mapStateToProps = state => {
    return { cart: state.cart };
};

export default connect(mapStateToProps)(Cafe);
