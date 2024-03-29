import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginView from './components/profilePage/LoginView';
import Profile from './components/profilePage/Profile';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { NavigationEvents } from 'react-navigation';

/*
Handles if the user is logged in or not and displays user information or login screen.

TODO:
- ersätta props gör loggedIn mot att läsa av ett state i Redux
- Ta in login/register page
*/

export default class ProfilePage extends Component {
  state = { user: null };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user: user });
    });
  }

  render() {
    const { user } = this.state;

    return (
      <View style={styles.container}>
        <NavigationEvents
          onDidFocus={payload =>
            this.setState({ user: firebase.auth().currentUser })
          }
        />

        {user ? (
          <Profile name={user.displayName} email={user.email} />
        ) : (
          <LoginView />
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
