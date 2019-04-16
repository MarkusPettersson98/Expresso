import React from 'react';
import { View, Text } from 'react-native';
import { myCart } from './components/dummy-data';

import EmptycheckoutPage from './components/checkout/emptyCheckout.js';

const CheckoutPage = () => {
    // TODO: Change myCart to be dependent on a global state instead of dummy-data
    return myCart ? (
        <EmptycheckoutPage />
    ) : (
        <View>
            <Text> The actual CheckoutPage </Text>
        </View>
    );
};

export default CheckoutPage;
