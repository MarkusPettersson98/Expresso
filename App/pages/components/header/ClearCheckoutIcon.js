import React from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { clearCart } from '../redux/actions';

const ClearCheckout = ({ cart, dispatch }) => {
    // checks if the cart is emtpy using the length of keys, 0 being 'falsy'
    const emptyCart = !Object.keys(cart).length;
    const checkClearCart = () => {
        return Alert.alert(
            'Varning',
            'Är du säker på att du vill rensa varukorgen?',
            [
                {
                    text: 'Avbryt',
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => dispatch(clearCart()) },
            ],
        );
    };

    return (
        <View style={{ flexDirection: 'row', margin: 5 }}>
            <TouchableOpacity
                onPress={() => checkClearCart()}
                disabled={emptyCart}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
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
