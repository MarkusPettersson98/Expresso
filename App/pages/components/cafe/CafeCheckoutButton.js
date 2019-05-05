import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import { sendOrder } from '../../../API/expressoAPI';
import { calculateCartPrice } from '../redux/cartFunctions';

/* id: Current tracker for #of orders 
Todo: make this a global variable that is connected to the actual number of orders done overall */
var id = 1;
/**
 * @file This is the order button inside of the order footer. This button is supposed to re-
 * direct the user to the checkout.
 *
 * @todo This button currently does nothing else than logging. It should be passed down a
 * navigation prop with a function that is able to redirect the user to the checkout. This
 * function should be bound to the onPress event of the <TouchableOpacity>.
 *
 */

const CafeCheckoutButton = ({ cart, selectedShop }) => {
    clickedPayButton = () => {
        sendOrder(id, cart, selectedShop);
        id++;
    };

    return (
        <View style={styles.CafeButton}>
            <TouchableOpacity
                onPress={clickedPayButton}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
                <Text style={styles.CafeButtonText}>BETALA ></Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    CafeButton: {
        marginRight: 25,
        marginTop: 25,
        color: 'white',
    },
    CafeButtonText: {
        fontWeight: '500',
        letterSpacing: 2,
        fontSize: 20,
        color: 'white',
    },
});

const mapStateToProps = state => {
    return { cart: state.cart };
};

export default connect(mapStateToProps)(CafeCheckoutButton);
