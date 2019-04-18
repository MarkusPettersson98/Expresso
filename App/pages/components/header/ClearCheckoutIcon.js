import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { clearCart } from '../redux/actions';

const ClearCheckout = ( {cart, dispatch} ) => {
    // checks if the cart is using wacky logic, could/should be swapped with prettier solution
    // renders conditionally
    let emptyCart = !Object.keys(cart).length;
    return (
        <View style={{ flexDirection: 'row', margin: 5 }}>
            <TouchableOpacity
                onPress={() => dispatch(clearCart())}
                disabled={emptyCart}
            >
                <Feather
                    name="trash-2"
                    size={24}
                    color={emptyCart ? '#9A8F93' : '#fff'}
                />
            </TouchableOpacity>
        </View>
    );
};

const mapStatesToProps = state => {
    return { cart: state.cart };
};

export default connect(mapStatesToProps)(ClearCheckout);

