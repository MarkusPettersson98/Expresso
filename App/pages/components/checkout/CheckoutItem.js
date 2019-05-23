import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { incrementCoffee, decrementCoffee } from '../redux/actions';

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
  const checkDecrementCoffee = orderItem => {
    if (props.orderItem.amount == 1) {
      return Alert.alert(
        'Varning',
        'Är du säker på att du vill ta bort varan?',
        [
          {
            text: 'Avbryt',
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => props.onDecrementCoffee(orderItem.coffee),
          },
        ],
      );
    }
    return props.onDecrementCoffee(orderItem.coffee);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
        }}
      >
        <SimpleLineIcons name="cup" size={20} color="#5AA3B7" />
      </View>
      <View
        style={{
          flex: 6,
        }}
      >
        <Text style={styles.titleText}>{orderItem.coffee.name}</Text>
        <Text style={styles.descText}>
          {orderItem.coffee.ownMug ? 'Egen mugg' : 'Låna'}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 15,
          }}
        >
          <TouchableOpacity
            onPress={() => checkDecrementCoffee(orderItem)}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <AntDesign name="minuscircleo" size={20} color="#5AA3B7" />
          </TouchableOpacity>

          <Text style={styles.numberText}>{orderItem.amount}</Text>

          <TouchableOpacity
            onPress={() => props.onIncrementCoffee(orderItem.coffee)}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <AntDesign name="pluscircleo" size={20} color="#5AA3B7" />
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
    fontSize: 16,
    fontWeight: '400',
    color: '#57454B',
  },
  titleTextAmount: {
    fontSize: 16,
    fontWeight: '400',
    color: '#9C9497',
    letterSpacing: 2,
  },
  priceText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#57454B',
  },
  descText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#7C6A70',
    marginTop: 3,
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
    onIncrementCoffee: coffee => {
      dispatch(incrementCoffee(coffee));
    },
    onDecrementCoffee: coffee => {
      dispatch(decrementCoffee(coffee));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CheckoutItem);
