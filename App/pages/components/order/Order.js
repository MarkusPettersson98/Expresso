import React from 'react';
import { View } from 'react-native';

import CoffeeList from './CoffeeList';
import OrderFooter from './OrderFooter';
import OrderHeader from './OrderHeader';

import { shops, coffees } from '../dummy-data';

const Order = () => {

    const cart = {
        amount: 1,
        total: 120,
    }

    /* Debugging variables TODO: replace with API calls */
    const Biblioteket = shops.find((shop) => shop.name === 'Biblioteket');

    return (
        <View style={{ flex: 1 }}>
            <OrderHeader picture={Biblioteket.picture} />
            <CoffeeList selectedShop={Biblioteket.name} />
            <OrderFooter cart={cart} />
        </View>
    );

}

export default Order;