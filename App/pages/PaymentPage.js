import React, { Component } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { sendOrder as sendOrderAPI } from '../API/expressoAPI';
import PaymentItem from './components/checkout/PaymentItem';
import PaymentMethod from './components/payment/paymentMethod';
import OrderButton from './components/checkout/OrderButton';
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import { clearCart } from './components/redux/actions';

class PaymentPage extends Component {
  state = { paymentCard: null }

  setPaymentCard = paymentCard => {
    this.setState({ paymentCard });
  }

  render() {
    const cart = this.props.cart;
    const total = cart.price;
    const orderItems = cart.orderItems;

    return (
      <View style={{ flex: 1, backgroundColor: '#FAFAFA' }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 150,
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
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 24,
                marginTop: 10,
              }}
            >
              <View style={{ marginRight: 20, marginTop: 5 }}>
                <SimpleLineIcons
                  name="location-pin"
                  size={16}
                  color="#5AA3B7"
                />
              </View>

              <View>
                <Text style={{ color: '#57454B', fontSize: 14 }}>Bulten</Text>
                <Text style={{ color: '#57454B', fontSize: 12, marginTop: 3 }}>
                  Hörsalsvägen 7, Johanneberg
                </Text>
              </View>
            </View>
          </View>

          {/* Betalningsmetod */}
          <View style={{...styles.viewBlock, paddingHorizontal: 24}}>
            <Text style={{...styles.viewBlockTitle, marginHorizontal: 0}}>Betalningsmetod</Text>
            <PaymentMethod setPaymentCard={this.setPaymentCard} />
          </View>
        </ScrollView>

        {/* Nedre betalningsruta */}
        <View style={styles.bottomPayBlock}>
          <View style={styles.totalAmountContainer}>
            <Text style={styles.totalText}>Totalt</Text>
            <Text style={styles.totalText}>{total} kr</Text>
          </View>
          <OrderButton
            onPress={() => {
                console.log('BETALA');
                this.props.navigation.navigate('Order');
                // TODO: Use Emils and Lucas solution to generate QR code.

                // also perhaps check if the user has credits.
                sendOrderAPI(this.props.cart);
                // clear the cart
                this.props.onClearCart();
            }}
            buttonText="BETALA"
            disabled={this.state.paymentCard ? false : true}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBlock: {
    borderBottomColor: '#D7D7D7',
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  viewBlockTitle: {
    fontSize: 14,
    fontWeight: '600',
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
    fontWeight: '600',
  },
});

const mapDispatchToProps = dispatch => {
    return {
        onClearCart: () => {
            dispatch(clearCart());
        },
    };
};

const mapStateToProps = state => {
    return { cart: state.cart };
};

export default withNavigation(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(PaymentPage),
);
