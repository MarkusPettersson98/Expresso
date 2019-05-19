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
import OrderButton from './components/checkout/OrderButton';
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import { clearCart } from './components/redux/actions';
import Modal from 'react-native-modal';

import { getShopById } from '../API/expressoAPI';

class PaymentPage extends Component {
  state = {
    paymentCard: '',
    paymentCardTemp: '',
    showPaymentCardModal: false,
    cardErrorText: '',
    shop: {
      name: '',
    },
  };

  // when mounted first time
  async componentDidMount() {
    // Fetch data about which shop we are purchasing coffee from
    const requestedShop = await getShopById(this.props.cart.shopId);
    // This is a whole shop object, which carries more data than just name, e.g. street, coordinates ..
    this.setState({
      shop: requestedShop,
    });
  }

  onAddCard = () => {
    const regExp = /^[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4}$/; // "XXXX XXXX XXXX XXXX" or "XXXXXXXXXXXXXXXX"
    const paymentCardTemp = this.state.paymentCardTemp;
    if (regExp.test(paymentCardTemp)) {
      // "Valid" card
      this.setState({
        paymentCard: this.state.paymentCardTemp,
        paymentCardTemp: '',
        showPaymentCardModal: false,
        cardErrorText: '',
      });
    } else {
      this.setState({ cardErrorText: 'Not a valid card number!' });
    }
  };

  onCardTextChange = text => {
    this.setState({ paymentCardTemp: text, cardErrorText: '' });
  };

  render() {
    const cart = this.props.cart;
    const total = cart.price;
    const orderItems = cart.orderItems;

    return (
      <View style={{ flex: 1, backgroundColor: '#FAFAFA' }}>
        <View
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
                <Text style={{ color: '#57454B', fontSize: 14 }}>
                  {this.state.shop.name}
                </Text>
                <Text style={{ color: '#57454B', fontSize: 12, marginTop: 3 }}>
                  {this.state.shop.street}
                </Text>
              </View>
            </View>
          </View>

          {/* Betalningsmetod */}
          <View style={styles.viewBlock}>
            <Text style={styles.viewBlockTitle}>Betalningsmetod</Text>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                paddingHorizontal: 24,
                marginTop: 10,
              }}
            >
              <View style={{ marginRight: 20 }}>
                <AntDesign name="creditcard" size={16} color="#5AA3B7" />
              </View>

              <Text style={{ color: '#57454B', fontSize: 14 }}>
                {this.state.paymentCard
                  ? `**** **** **** ${this.state.paymentCard.substring(12, 16)}`
                  : 'Inget kort tillagt!'}
              </Text>

              <TouchableOpacity
                style={{ marginLeft: 'auto' }}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                onPress={() => this.setState({ showPaymentCardModal: true })}
              >
                <Text style={{ color: '#5AA3B7', fontSize: 12 }}>
                  {this.state.paymentCard ? 'Ändra' : 'Lägg till'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

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

        <Modal
          isVisible={this.state.showPaymentCardModal}
          onBackdropPress={() => this.setState({ showPaymentCardModal: false })}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.viewBlockTitle}>Lägg till kort</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 24,
                marginVertical: 5,
              }}
            >
              <TextInput
                style={styles.cardInput}
                textContentType="creditCardNumber"
                keyboardType="numeric"
                placeholder="XXXX XXXX XXXX XXXX"
                onChangeText={text => this.onCardTextChange(text)}
                value={this.state.paymentCardTemp}
                maxLength={16}
              />
              <TouchableOpacity
                style={styles.addCardBtn}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                onPress={this.onAddCard}
              >
                <Text style={{ color: '#fff', fontSize: 12 }}>Lägg till</Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                color: 'red',
                fontSize: 12,
                marginHorizontal: 24,
                marginTop: 6,
              }}
            >
              {this.state.cardErrorText}
            </Text>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
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
  cardInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 0,
    borderBottomWidth: 2,
    color: '#57454B',
    marginRight: 24,
  },
  addCardBtn: {
    backgroundColor: '#5AA3B7',
    paddingHorizontal: 15,
    borderRadius: 5,
    justifyContent: 'center',
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
