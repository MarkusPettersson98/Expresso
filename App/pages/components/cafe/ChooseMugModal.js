import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { AntDesign } from '@expo/vector-icons';

import RadioGroup from 'react-native-radio-buttons-group';

export default class ModalComp extends Component {
  constructor(props) {
    super(props);
  }

  //States own or borrowed mug used for Modal
  state = {
    amount: 1,
  };

  //On closing modal, sends order to parent component with value t/f of ownMug
  onClose = (ownMug, amount) => {
    this.props.orderCoffee(ownMug, amount);
    this.props.hideModal();
  };

  decrementCoffee = () => {
    if (this.state.amount == 1) {
      return;
    } else {
      this.setState({ amount: this.state.amount-1 });
    }
  }

  incrementCoffee = () => {
    this.setState({ amount: this.state.amount+1 });
  }

  render() {
    return (
      //State of modal comes as props from parent component
      <Modal
        isVisible={this.props.isVisible}
        onBackdropPress={() => this.props.hideModal()}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.textTitle}>Lägg till vara</Text>
          <Text style={styles.textDesc}>Välj antal och sedan muggtyp.</Text>

          <View style={{ flexDirection: 'row', marginVertical: 40, }}>
            <Text style={styles.antalText}>Antal:</Text>

            <TouchableOpacity
                onPress={() => this.decrementCoffee()}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
                <View style={{ width: 24, height: 24 }}>
                    <AntDesign
                        name="minuscircleo"
                        size={24}
                        color="#5AA3B7"
                    />
                </View>
            </TouchableOpacity>

            <Text style={styles.numberText}>{this.state.amount}</Text>

            <TouchableOpacity
                onPress={() => this.incrementCoffee()}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                style={{ height: 24, width: 24 }}
            >
                <AntDesign
                    name="pluscircleo"
                    size={24}
                    color="#5AA3B7"
                />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={styles.lana}
              onPress={() => this.onClose(false, this.state.amount)}
            >
              <Text style={styles.lanaText}>LÅNA</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.egen}
              onPress={() => this.onClose(true, this.state.amount)}
            >
              <Text style={styles.egenText}>EGEN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#F5FCFF',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  textTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: '#57454B',
      marginBottom: 10,
  },
  textDesc: {
      fontSize: 14,
      fontWeight: '400',
      color: '#7C6A70',
  },
  valueText: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#7C6A70',
    marginBottom: 20,
  },
  add_mug_container: {
    backgroundColor: '#5AA3B7',
    color: '#FFFFFF',
    width: 140,
    height: 40,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 10,
    paddingTop: 7,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    overflow: 'hidden',
  },
  egen: {
    flex: 1,
    backgroundColor: '#5AA3B7',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  egenText: {
    color: 'white',
    fontWeight: '700',
    letterSpacing: 2,
    marginTop: 2,
  },
  lana: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#7C6A70',
    alignItems: 'center',
    marginRight: 20,
  },
  lanaText: {
    color: '#7C6A70',
    fontWeight: '700',
    letterSpacing: 2,
  },
  numberText: {
      fontSize: 16,
      marginHorizontal: 13,
      color: '#57454B',
  },
  antalText: {
    fontSize: 16,
    fontWeight: '700',
    marginRight: 30,
    color: '#57454B',
  },
});
