import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
} from 'react-native';
import * as firebase from "firebase/app";
import "firebase/auth";

class loginPage extends React.Component {
  state = { email: '', password: '', errorMessage: null };

  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        this.setState({ errorMessage });
        // ...
      });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.errorMessage && (
          <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
        )}
        <TextInput
          style={styles.input}
          textContentType="emailAddress"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
        />

        <TextInput
          style={styles.input}
          textContentType="password"
          secureTextEntry
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
        />

        <TouchableOpacity style={styles.logIn} onPress={this.handleLogin}>
          <Text style={styles.logInText}>LOGGA IN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#57454B',
    justifyContent: 'center',
    paddingHorizontal: 26,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0,
    borderBottomWidth: 2,
    marginBottom: 20,
    color: 'white',
  },
  logIn: {
    backgroundColor: '#5AA3B7',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  logInText: {
    color: 'white',
    fontWeight: '700',
    letterSpacing: 2,
  },
});

export default loginPage;
