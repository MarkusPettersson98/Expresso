import React from "react";
import { View, Text } from "react-native";
import { myCart } from './components/dummy-data';

import EmptycheckoutPage from "./components/checkoutComponents/emptyCheckout.js";

const CheckoutPage = () => {
    return !myCart ? (
        <EmptycheckoutPage />
    ) : (
        <View>
            <Text> The actual CheckoutPage </Text>
        </View>
    );
};

export default CheckoutPage;
