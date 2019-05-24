import React, { Component } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { sendOrder as sendOrderAPI } from '../API/expressoAPI';
import EmptycheckoutPage from './components/checkout/emptyCheckout';
import CheckoutItem from './components/checkout/CheckoutItem';
import OrderButton from './components/checkout/OrderButton';
import PaymentMethod from './components/payment/paymentMethod';
import LoadingOverlay from './components/loading/loadingOverlay';
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import { clearCart } from './components/redux/actions';
import Modal from 'react-native-modal';
import ModalComp from './components/checkout/OrderPlacedModal';
import * as firebase from 'firebase/app';
import 'firebase/auth';

class Checkout extends Component {
  state = {
    paymentCard: '',
    paymentCardTemp: '',
    showPaymentCardModal: false,
    cardErrorText: '',
    shop: {
      name: '',
    },
    user: null,
    loading: false,
    receiptId: '',
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user: user });
    });
    this.setState({
      shop: this.props.cart.shop.name,
      loadingShop: false,
    });
  }

  //Changes modalVisible-state to true, making ModalComp visible
  showModal = () => {
      this.setState({ modalVisible: true });
  };

  //Changes state to false, hiding ModalComp
  hideModal = () => {
      this.setState({ modalVisible: false });
  };

  sendTheOrder = () => {
    this.setState({ loading: true });
    const uid = this.state.user ? this.state.user.uid : 0;

    sendOrderAPI(this.props.cart, uid)
      .then(res => {
        /*this.props.navigation.navigate('Order', {
          orderID: res,
        });
        // clear the cart
        this.props.onClearCart();*/
        this.setState({ loading: false,});

        // This is to allow the modal to slide up, do not touch!!!
        setTimeout(()=>{
          this.setState({ loading: false, modalVisible: true, receiptId: res, });
        }
        ,1000)

        return res;
      })
      .catch(() => {
        console.log("error!!");
        this.setState({ loading: false });
        return null;
      })
  };

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

  setPaymentCard = paymentCard => {
    this.setState({ paymentCard });
  };

  render() {
    const { price: total, orderItems, shop } = this.props.cart;

    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        {this.state.loading && <LoadingOverlay />}

        {!this.props.cart.amount ? (
          <EmptycheckoutPage />
        ) : (
          <View style={{ flex: 1 }}>
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
                  <CheckoutItem key={i} orderItem={orderItem} />
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
                  <View
                    style={{
                      marginRight: 20,
                      marginTop: 5,
                    }}
                  >
                    <SimpleLineIcons
                      name="location-pin"
                      size={20}
                      color="#5AA3B7"
                    />
                  </View>

                  <View>
                    <Text
                      style={{
                        color: '#57454B',
                        fontSize: 16,
                      }}
                    >
                      {shop.name}
                    </Text>
                    <Text
                      style={{
                        color: '#57454B',
                        fontSize: 14,
                        marginTop: 3,
                      }}
                    >
                      {shop.street}
                    </Text>
                  </View>
                </View>
              </View>

              {/* Betalningsmetod */}
              {/* Borde bara visas om användaren är inloggad */}
              {this.state.user ? (
              <View style={{ ...styles.viewBlock, paddingHorizontal: 24 }}>
                <Text style={{ ...styles.viewBlockTitle, marginHorizontal: 0 }}>
                  Betalningsmetod
                </Text>
                <PaymentMethod setPaymentCard={this.setPaymentCard} />
              </View>
              ) 
              : 
              // Annars, visa ingenting
              <View />}

            </ScrollView>

            {/* Nedre betalningsruta */}
            <View style={styles.bottomPayBlock}>
              <View style={styles.totalAmountContainer}>
                <Text style={styles.totalText}>Totalt</Text>
                <Text style={styles.totalText}>{total} kr</Text>
              </View>

            {/* Visa olika knappar beroende på om användaren är inloggad eller ej */}
            {this.state.user ? <OrderButton
                onPress={async () => {
                  await this.sendTheOrder();
                }}
                buttonText="BETALA"
                disabled={this.state.paymentCard ? false : true}
              /> : <OrderButton
              onPress={() => this.props.navigation.navigate('Login', { fromPayment: true })}
              buttonText="LOGGA IN FÖR ATT BETALA"
              disabled={false}
            />}   



            </View>

            <ModalComp
                isVisible={this.state.modalVisible}
                hideModal={() => this.hideModal()}
                navFunc={() =>
                    this.props.navigation.navigate(
                        'Order',
                        this.state.receiptId,
                    )
                }
                clearCart={() => this.props.onClearCart()}
            />

            <Modal
              isVisible={this.state.showPaymentCardModal}
              onBackdropPress={() =>
                this.setState({ showPaymentCardModal: false })
              }
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
                    hitSlop={{
                      top: 10,
                      bottom: 10,
                      left: 10,
                      right: 10,
                    }}
                    onPress={this.onAddCard}
                  >
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 12,
                      }}
                    >
                      Lägg till
                    </Text>
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
        )}
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
    fontSize: 16,
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
  )(Checkout),
);
