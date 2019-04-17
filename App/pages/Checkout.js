import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { brygg_kaffe } from './components/dummy-data';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { AntDesign } from '@expo/vector-icons';
import { addCoffee } from './components/redux/actions'

import EmptycheckoutPage from './components/checkout/emptyCheckout.js';
import CheckoutItem from './components/checkout/CheckoutItem'

const CheckoutPage = (props) => {
    // TODO: rewrite the rendering of items using amount, we should probably delete items with amount < 0, but allow items with 0 amount
    return (
        <View style={{
          flex: 1,
        }}>
          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <TouchableOpacity onPress={() => props.onAddItem()}>
                <AntDesign name="pluscircle" size={32} color='#57454B' />
            </TouchableOpacity>
          </View>

          <View style={{
            flex: 6,
            alignItems: 'center',
          }}>
            {!props.cart.length && (<EmptycheckoutPage/>)}
            {props.cart.map((orderItem, i) => (
                <CheckoutItem key={i} orderItem={orderItem} />
            ))}
          </View>
        </View>
    );
};

const mapStateToProps = state => {
  return { cart: state.cart }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddItem: () => {
      dispatch(addCoffee(brygg_kaffe))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
