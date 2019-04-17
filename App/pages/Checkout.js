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
    // TODO: Change myCart to be dependent on a global state instead of dummy-data
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
                <AntDesign name="pluscircle" size={32} />
            </TouchableOpacity>
          </View>

          <View style={{
            flex: 3,
            alignItems: 'center',
          }}>
            {!props.cart.length && (<Text>Empty cart</Text>)}
            {props.cart.map((coffee, i) => (
                <CheckoutItem key={i} name={coffee.name} price={coffee.price} />
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
