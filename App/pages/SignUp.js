import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
  Alert,
  Image,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import LoadingOverlay from './components/loading/loadingOverlay';
import * as firebase from 'firebase/app';
import 'firebase/auth';

class signUpPage extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    errorMessage: null,
    loading: false,
  };

  handleRegister = () => {
    Keyboard.dismiss();
    this.setState({ loading: true, errorMessage: null });
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
        this.setState({ errorMessage, loading: false });
        return Alert.alert('Error', errorMessage, [
          {
            text: 'OK',
          },
        ]);
      });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        {this.state.loading && <LoadingOverlay />}

        <Image
          style={{ height: 30, width: '100%', marginVertical: 50 }}
          source={require('./components/resources/ExpressoLogoLight.png')}
          resizeMode="contain"
        />

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
      </KeyboardAvoidingView>
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
