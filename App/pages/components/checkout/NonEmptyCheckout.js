import React from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import CheckoutItem from './CheckoutItem';
import OrderButton from './OrderButton';
import TotalAmount from './TotalAmount';
import PickUpLocation from './pickUpPointView';
import { calculateCartPrice } from '../redux/cartFunctions';

const NonEmptyCheckoutPage = props => {
    let orderItems = Object.values(props.cart);
    let total = calculateCartPrice(orderItems);

    return (
        <View
            style={{
                flex: 1,
                width: '100%',
            }}
        >
            <View
                style={{
                    flex: 5,
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 7,
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    {orderItems.map((orderItem, i) => (
                        <CheckoutItem key={i} orderItem={orderItem} />
                    ))}
                </ScrollView>
            </View>

            <View
                style={{
                    flex: 2,
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <PickUpLocation />
            </View>

            <TotalAmount total={total} />

            <View
                style={{
                    flex: 1.5,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <OrderButton
                    onPress={() => {
                        console.log('Du beställde:');
                        orderItems.forEach(orderItem => {
                            console.log(
                                orderItem.amount,
                                ':',
                                orderItem.coffee.name,
                            );
                        });
                        console.log('Kostnad:', total);
                    }}
                />
            </View>
        </View>
    );
};

const mapStateToProps = state => {
    return { cart: state.cart };
};

export default connect(mapStateToProps)(NonEmptyCheckoutPage);
