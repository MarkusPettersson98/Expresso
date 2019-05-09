import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';

/**
 * This class represents an item in the checkout, it has the ability to increment and decrement the it's amount and will remove
 * itself if it reaches below 0 in amount.
 *
 * @param {orderItem} props is what is being sent from NonEmptyCheckout.js,
 *
 *      currently looks like this (26/04/19):
 *                  {orderItems.map((orderItem, i) => (
                                <CheckoutItem key={i} orderItem={orderItem} />
                     ))}

 *  an orderItem is an object with amount and coffee. look in reducer.js for a more detailed example.
 *
 */

const CheckoutItem = props => {
  const orderItem = props.orderItem;

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
        }}
      >
        <SimpleLineIcons name="cup" size={16} color="#5AA3B7" />
      </View>
      <View
        style={{
          flex: 6,
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.titleTextAmount}>{orderItem.amount}x</Text>
          <Text style={styles.titleText}> {orderItem.coffee.name}</Text>
        </View>
        <Text style={styles.descText}>
          {orderItem.coffee.ownMug ? 'Egen mugg' : 'Låna'}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-end',
        }}
      >
        <Text style={styles.priceText}>{`${
          orderItem.amount < 0 ? 0 : orderItem.amount * orderItem.coffee.price
        } kr`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginTop: 16,
    marginBottom: 4,
  },
  titleText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#57454B',
  },
  titleTextAmount: {
    fontSize: 14,
    fontWeight: '400',
    color: '#9C9497',
    letterSpacing: 2,
  },
  priceText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#57454B',
  },
  descText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#7C6A70',
    marginTop: 3,
  },
});

const mapStateToProps = state => {
  return { cart: state.cart };
};

export default connect(mapStateToProps)(CheckoutItem);
