import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { incrementCoffee, decrementCoffee } from '../redux/actions';

const CheckoutItem = props => {
    const orderItem = props.orderItem;
    const checkDecrementCoffee = (orderItem) => {
      if (props.orderItem.amount == 1) {
        return Alert.alert(
          'Varning',
          'Är du säker på att du vill ta bort varan?',
          [
            {
              text: 'Avbryt',
              //onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => props.onDecrementCoffee(orderItem)},
          ]
        );
      }
      return props.onDecrementCoffee(orderItem)
    }

    return (
        <View
            style={{
                flexDirection: 'row',
                marginHorizontal: 24,
                marginTop: 16,
                marginBottom: 10,
                borderBottomColor: '#D7D7D7',
                borderBottomWidth: 1,
                paddingBottom: 20,
            }}
        >
            <View
                style={{
                    flex: 1,
                }}
            >
                <SimpleLineIcons name="cup" size={20} color="#57454B" />
            </View>
            <View
                style={{
                    flex: 4,
                }}
            >
                <Text style={styles.titleText}>{orderItem.coffee.name}</Text>
                <Text style={styles.descText}>Egen mugg</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 15,
                    }}
                >
                    <TouchableOpacity
                        onPress={() => checkDecrementCoffee(orderItem)}
                        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                    >
                        <AntDesign
                            name="minuscircleo"
                            size={20}
                            color="#5AA3B7"
                        />
                    </TouchableOpacity>

                    <Text style={styles.numberText}>{orderItem.amount}</Text>

                    <TouchableOpacity
                        onPress={() => props.onIncrementCoffee(orderItem)}
                        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                    >
                        <AntDesign
                            name="pluscircleo"
                            size={20}
                            color="#5AA3B7"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View
                style={{
                    flex: 1,
                    alignItems: 'flex-end',
                }}
            >
                <Text style={styles.priceText}>{`${
                    orderItem.amount < 0
                        ? 0
                        : orderItem.amount * orderItem.coffee.price
                } kr`}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    titleText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#57454B',
    },
    priceText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#57454B',
    },
    descText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#7C6A70',
        marginTop: 6,
    },
    numberText: {
        fontSize: 16,
        marginHorizontal: 15,
    },
});

const mapStateToProps = state => {
    return { cart: state.cart };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCoffee: orderItem => {
            dispatch(incrementCoffee(orderItem));
        },
        onDecrementCoffee: orderItem => {
            dispatch(decrementCoffee(orderItem));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CheckoutItem);
