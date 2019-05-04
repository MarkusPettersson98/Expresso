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
} from 'react-native';
import LoadingOverlay from './components/loading/loadingOverlay';
import * as firebase from 'firebase/app';
import 'firebase/auth';

class loginPage extends React.Component {
  state = { email: '', password: '', errorMessage: null, loading: false };

  handleLogin = () => {
    this.setState({ loading: true, errorMessage: null });
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
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
          <Text style={{color: 'white'}}>Har du inget konto? </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SignUp')}
          >
            <Text style={{ color: '#5AA3B7' }}>
              Registrera dig
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.textButtonView}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Forgot')}
          >
            <Text style={{ color: '#5AA3B7' }}>
              Glömt lösenordet?
            </Text>
          </TouchableOpacity>
        </View>
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
  textButtonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
});

export default loginPage;
