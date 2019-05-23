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
import { AntDesign } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

class PaymentMethod extends React.Component {
  state = {
    paymentCard: '',
    paymentCardTemp: '',
    showPaymentCardModal: false,
    cardErrorText: '',
    firebaseLoading: true,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        var userDataRef = firebase.database().ref('users/' + user.uid);
        userDataRef.on('value', snapshot => {
          const paymentCard =
            (snapshot.val() && snapshot.val().paymentCard) || '';
          this.setState({
            paymentCard,
            firebaseLoading: false,
          });
          if (this.props.setPaymentCard) {
            this.props.setPaymentCard(paymentCard);
          }
        });
      } else {
        this.setState({ firebaseLoading: false });
      }
    });
  }

  onAddCard = () => {
    const regExp = /^[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4}$/; // "XXXX XXXX XXXX XXXX" or "XXXXXXXXXXXXXXXX"
    const paymentCardTemp = this.state.paymentCardTemp;
    if (regExp.test(paymentCardTemp)) {
      // "Valid" card
      this.setState({
        paymentCard: paymentCardTemp,
        paymentCardTemp: '',
        showPaymentCardModal: false,
        cardErrorText: '',
      });
      if (this.props.setPaymentCard) {
        this.props.setPaymentCard(paymentCardTemp);
      }

      const user = firebase.auth().currentUser;
      if (user) {
        firebase
          .database()
          .ref('users/' + user.uid)
          .set({
            paymentCard: paymentCardTemp,
          });
      }
    } else {
      this.setState({ cardErrorText: 'Not a valid card number!' });
    }
  };

  onCardTextChange = text => {
    this.setState({ paymentCardTemp: text, cardErrorText: '' });
  };

  render() {
    return (
      <View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            marginTop: 10,
          }}
        >
          <View style={{ marginRight: 20 }}>
            <AntDesign name="creditcard" size={16} color="#5AA3B7" />
          </View>

          {this.state.firebaseLoading ? (
            <ActivityIndicator color="#5AA3B7" />
          ) : (
            <Text style={{ color: '#57454B', fontSize: 14 }}>
              {this.state.paymentCard
                ? `**** **** **** ${this.state.paymentCard.substring(12, 16)}`
                : 'Inget kort tillagt!'}
            </Text>
          )}

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
  viewBlockTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
    color: '#57454B',
    marginHorizontal: 24,
    marginTop: 20,
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

export default PaymentMethod;
