import React from 'react';
import { View } from 'react-native';

import CoffeeList from './CoffeeList';
import OrderFooter from './OrderFooter';
import OrderHeader from './OrderHeader';

const Order = () => {
    return (
        <View style = {{flex: 1,}}>
            <OrderHeader />
            <CoffeeList selectedShop={"Biblioteket"} />
            <OrderFooter />
        </View>
    );

}

export default Order;