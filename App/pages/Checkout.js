import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { brygg_kaffe, cappuccino } from './components/dummy-data';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { addCoffee } from './components/redux/actions';
import CheckoutItem from './components/checkout/CheckoutItem';
import EmptycheckoutPage from './components/checkout/emptyCheckout';
import OrderButton from './components/checkout/OrderButton';
import TotalAmount from './components/checkout/TotalAmount';

const CheckoutPage = props => {
    let isCartPopulated = Object.keys(props.cart).length;
    let total = 0;
    Object.values(props.cart).forEach(orderItem => {
        total = total + orderItem.coffee.price * orderItem.amount;
    });

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
                    flex: 7,
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                {!isCartPopulated ? (
                    <EmptycheckoutPage />
                ) : (
                    <ScrollView
                        contentContainerStyle={{
                            flex: 7,
                            alignItems: 'center',
                            width: '100%',
                        }}
                    >
                        {Object.values(props.cart).map((orderItem, i) => (
                            <CheckoutItem key={i} orderItem={orderItem} />
                        ))}
                    </ScrollView>
                )}
            </View>
            
            {!isCartPopulated || <TotalAmount total={total} />}
            <View
                style={{
                    flex: 1.5,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {!isCartPopulated || (
                    <OrderButton
                        onPress={() => {
                            console.log('Du beställde:');
                            Object.values(props.cart).forEach(orderItem => {
                                console.log(
                                    orderItem.amount,
                                    ':',
                                    orderItem.coffee.name,
                                );
                            });
                            console.log('Kostnad:', total);
                        }}
                    />
                )}
            </View>
        </View>
    );
};

const mapStateToProps = state => {
    return { cart: state.cart };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddItem: coffee => {
            dispatch(addCoffee(coffee));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CheckoutPage);
