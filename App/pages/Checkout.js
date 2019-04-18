import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { brygg_kaffe, cappuccino } from './components/dummy-data';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { addCoffee } from './components/redux/actions';
import CheckoutItem from './components/checkout/CheckoutItem';
import EmptycheckoutPage from './components/checkout/emptyCheckout';

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
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <TouchableOpacity onPress={() => props.onAddItem(brygg_kaffe)}>
                    <AntDesign name="pluscircle" size={32} color="#57454B" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.onAddItem(cappuccino)}>
                    <AntDesign name="pluscircle" size={32} color="#57454B" />
                </TouchableOpacity>
            </View>

            <View
                style={{
                    flex: 6,
                    alignItems: 'center',
                }}
            >
                {!Object.keys(props.cart).length && <EmptycheckoutPage />}
                {Object.values(props.cart).map((orderItem, i) => (
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
        onAddItem: (coffee) => {
            dispatch(addCoffee(coffee));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CheckoutPage);
