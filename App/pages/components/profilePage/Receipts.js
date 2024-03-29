import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ListReceipts from './ListReceipts';
import Loading from '../loading/loadingCoffee';
import { getReceiptsUser } from '../../../API/expressoAPI'
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default class Receipts extends Component {
  state = { userReceipts: [], loading: true, };

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
              loading: false,
          });
        });
      }
    });
  };

    render() {
        return (
            <View style = {styles.container}>
              {this.state.loading && <Loading />}

              <ListReceipts receiptList = {this.state.userReceipts} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 14,
        color: 'black',
    },
});
