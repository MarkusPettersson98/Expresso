import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

class ProfilePage extends Component {
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

export default withNavigation(ProfilePage);
