import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
} from 'react-native';
import * as firebase from 'firebase/app';
import 'firebase/auth';

class signUpPage extends React.Component {
  state = { name: '', email: '', password: '', errorMessage: null };

  handleRegister = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(authObject => {
        const user = authObject.user;
        user
          .updateProfile({ displayName: this.state.name })
          .then(() => {
            // Update successful.
            console.log(`display name set to ${this.state.name}`);
          })
          .catch(error => {
            // An error happened.
            console.log(error.message);
          });
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
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
          textContentType="username"
          placeholder="Namn"
          onChangeText={name => this.setState({ name })}
        />

        <TextInput
          style={styles.input}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
        />

        <TextInput
          style={styles.input}
          textContentType="password"
          secureTextEntry
          placeholder="Lösenord"
          onChangeText={password => this.setState({ password })}
        />

        <TouchableOpacity style={styles.button} onPress={this.handleRegister}>
          <Text style={styles.buttonText}>REGISTRERA</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}
        >
          <Text style={{ color: '#5AA3B7', marginTop: 10 }}>Logga in</Text>
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
  button: {
    backgroundColor: '#5AA3B7',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    letterSpacing: 2,
  },
});

export default signUpPage;
