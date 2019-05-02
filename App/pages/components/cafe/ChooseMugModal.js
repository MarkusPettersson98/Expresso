import React, { Component } from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal'

import RadioGroup from 'react-native-radio-buttons-group';

export default class App extends Component {
//Visar rutan: Ändrar state till true
  showModal = () => this.setState({ isModalVisible: true })
//Gömmer rutan: Ändrar state till false
  hideModal = () => this.setState({ isModalVisible: false })

//Valen egen eller lånad mugg är states
    state = {
        data: [
            {
                label: 'Egen',
            },
            {
                label: 'Låna',
                value: "Låna_value",
            },
        ],
    };

    //När man klickar på ett av valen (egen, låna) uppdateras state
    onPress = data => this.setState({ data });

    render() {
      //Raderna innan return säger bara till vilket val som är iklickat i början, alltså när rutan kommer upp
        let selectedButton = this.state.data.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value :   this.state.data[0].label;
        return (
          //Viktigt: När det som står inom TouchableOpacity klickas så ändras rutans state till true och rutan ploppar upp
          <View style={styles.container}>
          <TouchableOpacity onPress={this.showModal}>
          <Text>Mörkrost</Text>
          </TouchableOpacity>
          <Modal  isVisible={this.state.isModalVisible}>
            <View style={styles.modalContainer}>
                <Text style={styles.valueText}>
                    Välj mugg
                </Text>
                <RadioGroup radioButtons={this.state.data}
                onPress={this.onPress} />
                <Text onPress={this.hideModal}
              style={styles.add_mug_container}>LÄGG TILL</Text>
            </View>
            </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

    modalContainer: {
    alignSelf: "center",
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: 200,
    backgroundColor: '#F5FCFF',
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
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
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    overflow: 'hidden',
  },
});
