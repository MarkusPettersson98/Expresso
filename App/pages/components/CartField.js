import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import CafeCartIcon from './cafe/CafeCartIcon';

const CartField = props => {
    const totalPrice = props.cart.price;
    const totalAmount = props.cart.amount;
    if (totalAmount > 0) {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.to}
                    onPress={() => props.navigation.navigate('Checkout')}
                    hitSlop={{ top: 20, bottom: 20, left: 200, right: 200 }}
                    activeOpacity={0.5}
                >
                    <CafeCartIcon cart={props.cart} style={styles.cartIcon} />
                    <Text style={styles.cartText}>Till varukorgen</Text>
                    <Text style={styles.sumText}>{totalPrice} kr</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return null;
};

const mapStateToProps = state => {
    return { cart: state.cart };
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5AA3B7',
        height: 45,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 10,
    },
    to: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartText: {
        color: 'white',
        fontSize: 18,
        opacity: 1,
        textAlign: 'center',
        position: 'absolute',
        marginHorizontal: 'auto',
    },
    sumText: {
        color: 'white',
        fontSize: 17,
        opacity: 1,
        marginLeft: 'auto',
    },
    cartIcon: {
        marginRight: 'auto',
    },
});

export default withNavigation(connect(mapStateToProps)(CartField));
