import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

class LoginView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Handle login/register user</Text>

        <TouchableOpacity
          style={styles.logIn}
          onPress={() => this.props.navigation.navigate('Login')}
        >
          <Text style={styles.logInText}>LOGGA IN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logIn}
          onPress={() => this.props.navigation.navigate('Register')}
        >
          <Text style={styles.logInText}>REGISTRERA</Text>
        </TouchableOpacity>
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
  text: {
    fontSize: 14,
    color: 'black',
  },
  logIn: {
    backgroundColor: '#5AA3B7',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  logInText: {
    color: 'white',
    fontWeight: '700',
    letterSpacing: 2,
  },
});

export default withNavigation(LoginView);
