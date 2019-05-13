import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { brygg_kaffe, cappuccino, latte } from './components/dummy-data';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { addCoffee } from './components/redux/actions';
import EmptycheckoutPage from './components/checkout/emptyCheckout';
import NonEmptyCheckoutPage from './components/checkout/NonEmptyCheckout';

/**
 * This is the view that is being shown when navigating to checkout.
 * This view has the ability to show
 * NonEmptyCheckoutPage
 * or
 * EmptyCheckoutPage
 * and does so depending on the boolean isCartPopulated.
 *
 * The TouchableOpacities are remnants of when we wanted to have the ability to add items directly from the checkout-view
 * and will be removed in stable versions.
 */

const CheckoutPage = props => {
  /** checks if the cart is populated, 0 is 'falsy' and will be false when we decide to
   * conditionally render emptycheckout or nonemptycheckout. */
  let isCartPopulated = props.cart.amount;

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* BUTTONS FOR DEBUGGING PURPOSES
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
        <TouchableOpacity onPress={() => props.onAddItem(latte)}>
          <AntDesign name="pluscircle" size={32} color="#57454B" />
        </TouchableOpacity>
      </View>
    */}

      <View
        style={{
          flex: 5,
          alignItems: 'center',
          width: '100%',
        }}
      >
        {!isCartPopulated ? <EmptycheckoutPage /> : <NonEmptyCheckoutPage />}
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
