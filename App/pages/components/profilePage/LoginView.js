import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

class LoginView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <SimpleLineIcons name="cup" size={64} color="#57454B" />
          <Text style={styles.textTitle}>Kaffet är nära.</Text>
          <Text style={styles.textDesc}>Logga in för att spara dina uppgifter.</Text>
        </View>

        <View style={styles.botContainer}>
          <TouchableOpacity
            style={styles.logIn}
            onPress={() => this.props.navigation.navigate('Login')}
          >
            <Text style={styles.logInText}>LOGGA IN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.register}
            onPress={() => this.props.navigation.navigate('SignUp')}
          >
            <Text style={styles.registerText}>REGISTRERA</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    flexGrow: 1,
    width: '100%',
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 60,
  },
  textTitle: {
      fontSize: 26,
      fontWeight: '600',
      color: '#57454B',
      marginTop: 30,
      marginBottom: 10,
  },
  textDesc: {
      fontSize: 16,
      fontWeight: '400',
      color: '#7C6A70',
  },
  botContainer: {
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 36,
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
    marginBottom: 15,
  },
  logInText: {
    color: 'white',
    fontWeight: '700',
    letterSpacing: 2,
  },
  register: {
    paddingVertical: 16,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#7C6A70',
    alignItems: 'center',
  },
  registerText: {
    color: '#7C6A70',
    fontWeight: '700',
    letterSpacing: 2,
  },
});

export default withNavigation(LoginView);
