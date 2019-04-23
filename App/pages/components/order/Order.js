import React from 'react';
import { View } from 'react-native';

import CoffeeList from './CoffeeList';
import OrderFooter from './OrderFooter';
import OrderHeader from './OrderHeader';

import { shops, coffees } from '../dummy-data';

const Order = () => {

    /* Debugging variables TODO: replace with API calls */
    const Biblioteket = shops.find((shop) => shop.name === 'Biblioteket');
    // const coffeeAssortment = coffees.find(assortment => assortment.shop === Biblioteket.name);

    return (
        <View style={{ flex: 1, }}>
            <OrderHeader
                picture={Biblioteket.picture} />
            <CoffeeList
                selectedShop={Biblioteket.name} />
            <OrderFooter />
        </View>
    );

}

export default Order;