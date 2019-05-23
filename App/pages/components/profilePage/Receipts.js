import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ListReceipts from './ListReceipts';
import { getReceiptsUser } from '../../../API/expressoAPI'
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default class ProfilePage extends Component {
  state = { userReceipts: [] };

  componentDidMount() {
    // load current user
    firebase.auth().onAuthStateChanged(async user => {
      this.setState({ user: user });
      if (user) {
        // Request all recipts with userID that will be loaded from redux
        const receipts = await getReceiptsUser(user.uid);
        Promise.all(receipts).then(() => {

          // Update state
          this.setState({
              userReceipts: receipts,
          });
        });
      }
    });
    
      //console.log({receipts})
  };

    render() {
        return (
            <View style = {styles.container}>
                <ListReceipts receiptList = {this.state.userReceipts} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F7F4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 14,
        color: 'black',
    },
});
