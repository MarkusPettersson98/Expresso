import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { brygg_kaffe } from './components/dummy-data';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { addCoffee } from './components/redux/actions';
import CheckoutItem from './components/checkout/CheckoutItem';

const CheckoutPage = props => {
    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <TouchableOpacity onPress={() => props.onAddItem()}>
                    <AntDesign name="pluscircle" size={32} color="#57454B" />
                </TouchableOpacity>
            </View>

            <View
                style={{
                    flex: 6,
                    alignItems: 'center',
                }}
            >
                {!props.cart.length && <EmptycheckoutPage />}
                {props.cart.map((orderItem, i) => (
                    <CheckoutItem key={i} orderItem={orderItem} />
                ))}
            </View>
        </View>
    );
};

const mapStateToProps = state => {
    return { cart: state.cart };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddItem: () => {
            dispatch(addCoffee(brygg_kaffe));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CheckoutPage);
