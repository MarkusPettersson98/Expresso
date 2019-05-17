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

function HandleLoggedIn(props){
    const loggedIn = props.loggedIn;
    if(loggedIn == true){
       return(<Profile firstname = {'Emil'} lastname = {'Svensson'} dateOfBirth = {'1997-01-14'} city={'Göteborg'} country={'Sweden'} paymentMethod = {'Visa'} paymentInformation = {'**** **** **** 1234'} />);
    }
    if(loggedIn == false){
       return(<Login />);
    }
}

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
              {user ? <Profile /> : <Login />}
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
