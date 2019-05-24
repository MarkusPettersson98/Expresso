import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import LoadingOverlay from './components/loading/loadingOverlay';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { withNavigation } from 'react-navigation';
import { SimpleLineIcons } from '@expo/vector-icons';

class loginPage extends React.Component {
  state = { email: '', password: '', errorMessage: null, loading: false };

  handleLogin = () => {
    Keyboard.dismiss();
    this.setState({ loading: true, errorMessage: null });
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // Logged in
        this.props.navigation.navigate('Main');
      })
      .catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert('Error', errorMessage, [
          {
            text: 'OK', onPress: () => this.setState({ errorMessage, loading: false })

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

        <TextInput
          style={styles.input}
          textContentType="password"
          secureTextEntry
          placeholder="Lösenord"
          onChangeText={password => this.setState({ password })}
        />

        <TouchableOpacity style={styles.logIn} onPress={this.handleLogin}>
          <Text style={styles.logInText}>LOGGA IN</Text>
        </TouchableOpacity>

        <View style={styles.textButtonView}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SignUp')}
          >
            <View style = {styles.toView}>
              <Text style={{ color: '#101010' }}>Har du inget konto? </Text>
              <Text style={{ color: '#5AA3B7' }}>Registrera dig</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.textButtonView}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Forgot')}
          >
            <Text style={{ color: '#5AA3B7' }}>Glömt lösenordet?</Text>
          </TouchableOpacity>
        </View>
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
    paddingBottom: 50
  },
  input: {
    height: 40,
    borderColor: '#101010',
    borderWidth: 0,
    borderBottomWidth: 2,
    marginBottom: 20,
    color: '#101010',
  },
  logIn: {
    backgroundColor: '#FAFAFA',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  logInText: {
    color: '#101010',
    fontWeight: '700',
    letterSpacing: 2,
  },
  textButtonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  toView: {
    flexDirection: 'row',

  }
});

export default withNavigation(loginPage);
