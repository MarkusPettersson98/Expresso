import React, { Component } from 'react';
import {
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
  Alert,
  View,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import LoadingOverlay from './components/loading/loadingOverlay';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { SimpleLineIcons } from '@expo/vector-icons';

class ForgotPasswordPage extends React.Component {
  state = { email: '', errorMessage: null, loading: false };

  handleReset = () => {
    Keyboard.dismiss();
    this.setState({ loading: true, errorMessage: null });
    const { email } = this.state;
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        console.log('Reset email sent!');
        this.props.navigation.navigate('Login');
      })
      .catch(error => {
        // Handle Errors here.
        const errorMessage = error.message;
        return Alert.alert('Error', errorMessage, [
          {
            text: 'OK', onPress: () =>  this.setState({ errorMessage, loading: false })
          },
        ]);
      });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        {this.state.loading && <LoadingOverlay />}

        <View style={styles.iconView}>
          <SimpleLineIcons name="user" size={70} color="#57454B" />
        </View>

        <TextInput
          style={styles.input}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
        />

        <TouchableOpacity style={styles.button} onPress={this.handleReset}>
          <Text style={styles.buttonText}>ÅTERSTÄLL</Text>
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
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    paddingHorizontal: 26,
  },
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100
  },
  input: {
    height: 40,
    borderColor: '#101010',
    borderWidth: 0,
    borderBottomWidth: 2,
    marginBottom: 20,
    color: '#101010',
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

export default ForgotPasswordPage;
