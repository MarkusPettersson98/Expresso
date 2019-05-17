import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Login from './components/profilePage/Login'
import Profile from './components/profilePage/Profile'
import * as firebase from 'firebase/app';
import 'firebase/auth';


/*
Handles if the user is logged in or not and displays user information or login screen.

TODO:
- ersätta props gör loggedIn mot att läsa av ett state i Redux
- Ta in login/register page
*/

export default class ProfilePage extends Component {
  state = { user: null }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user: user })
    });
  }

    render() {
      const user = this.state.user;

      return (
          <View style = {styles.container}>
              {user ? <Profile name = {user.displayName} email = {user.email}/> : <Login />}
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
});
