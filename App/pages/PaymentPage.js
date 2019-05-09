import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

const PaymentPage = props => {
  return (
    <View>

    </View>
  );
}

const mapStateToProps = state => {
  return { cart: state.cart };
};

export default connect(
  mapStateToProps,
)(PaymentPage);
