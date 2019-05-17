import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LoadingOverlay from '../loading/loadingOverlay';
import { withNavigation } from 'react-navigation';
import * as firebase from 'firebase/app';
import 'firebase/auth';
/*
Page to show the userinformation.

Gets called by ProfilePage.js

TODO:
- ersätta this.props mot data från firebase om användaren
- utseende
- Ska man kunna ändra sina uppgifter. Isf lägga till knapp som tar en till en sida där uppgifter kan ändras.
Har lagt till navigering till en kvittosida för att visa alla tidigare köp men den kan lika väl användas för att navigera till att ändra
uppgifter.
*/

class Profile extends React.Component {
  state = { loading: false };

  handleLogout = () => {
    this.setState({ loading: true });
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        this.props.navigation.navigate('Main');
      })
      .catch(error => {
        // An error happened.
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading && <LoadingOverlay />}

        <View style={styles.personView}>
          <Text style={styles.personHeader}>
            User Profile
          </Text>
          
          <Text style={styles.text}>
            {this.props.name} 
          </Text>

          <Text style={styles.text}> 
            {this.props.email} 
          </Text>
 
          <TouchableOpacity
            style={styles.to}
            onPress={() => this.props.navigation.navigate('Receipts')}
          >
            <Text style={styles.reText}>
              Receipts >
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logOut} onPress={this.handleLogout}>
            <Text style={styles.logOutText}>LOGGA UT</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.paymentInfoView}>
          <Text style={styles.paymentHeader}>
            Payment Method
          </Text>
          {/*
            Add component to add or view payment method
          */}
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F7F4',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  personView: {
    height: '66%',
    width: '100%',
    padding: 20,
  },
  paymentInfoView: {
    height: '37%',
    /*backgroundColor: '#5AA3B7',*/
    width: '100%',
    borderRadius: 20,
    padding: 20,
    borderColor: 'white',
    borderWidth: 5,
  },
  paymentHeader: {
    fontSize: 20,
    color: 'grey',
  },
  personHeader: {
    fontSize: 20,
    color: 'grey',
    marginTop: 40,
  },
  text: {
    fontSize: 24,
    color: 'black',
    marginTop: 10,
    marginBottom: 10,
    left: 20,
  },
  reText: {
    fontSize: 24,
    color: 'black',
  },
  to: {
    left: 20,
    marginTop: 20,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 5,
    padding: 5,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logOut: {
    backgroundColor: '#5AA3B7',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  logOutText: {
    color: 'white',
    fontWeight: '700',
    letterSpacing: 2,
  },
});

export default withNavigation(Profile);
