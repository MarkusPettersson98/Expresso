import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PaymentItem from './components/checkout/PaymentItem'
import OrderButton from './components/checkout/OrderButton';

const PaymentPage = props => {
  const cart = props.cart;
  const total = cart.price;
  const orderItems = cart.orderItems;

  return (
    <View style={{flex: 1, backgroundColor: '#FAFAFA'}}>
      <ScrollView
          contentContainerStyle={{
              flex: 1,
          }}
      >
        {/* Varor */}
        <View style={styles.viewBlock}>
          <Text style={styles.viewBlockTitle}>Varor</Text>
          {orderItems.map((orderItem, i) => (
              <PaymentItem key={i} orderItem={orderItem} />
          ))}
        </View>

        {/* Uthämtning */}
        <View style={styles.viewBlock}>
          <Text style={styles.viewBlockTitle}>Uthämtning</Text>
        </View>

        {/* Betalningsmetod */}
        <View style={styles.viewBlock}>
          <Text style={styles.viewBlockTitle}>Betalningsmetod</Text>
        </View>
      </ScrollView>

      <View style={styles.bottomPayBlock}>
        <View style={styles.totalAmountContainer}>
          <Text style={styles.totalText}>Totalt</Text>
          <Text style={styles.totalText}>{total} kr</Text>
        </View>
        <OrderButton
            onPress={() => console.log("BETALA")}
            buttonText="BETALA"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewBlock: {
    borderBottomColor: '#D7D7D7',
    borderBottomWidth: 1,
    paddingBottom: 20
  },
  viewBlockTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
    color: '#57454B',
    marginHorizontal: 24,
    marginTop: 20,
  },
  bottomPayBlock: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 140,
    backgroundColor: '#57454B',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalAmountContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  totalText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: "600",
  },
});

const mapStateToProps = state => {
  return { cart: state.cart };
};

export default connect(
  mapStateToProps,
)(PaymentPage);
