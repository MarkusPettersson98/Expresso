import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default class ProfilePage extends Component {
  handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch(error => {
        // An error happened.
      });
  };

  render() {
    const user = firebase.auth().currentUser;
    return (
      <View>
        <Text>Profile</Text>
        <Text>Display name: {user.displayName}</Text>
        <Text>Email: {user.email}</Text>
        <TouchableOpacity style={styles.logOut} onPress={this.handleLogout}>
          <Text style={styles.logOutText}>LOGGA UT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logOut: {
    backgroundColor: '#5AA3B7',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  logOutText: {
    color: 'white',
    fontWeight: '700',
    letterSpacing: 2,
  },
});
