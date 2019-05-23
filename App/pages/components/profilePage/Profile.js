import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LoadingOverlay from '../loading/loadingOverlay';
import PaymentMethod from '../payment/paymentMethod';
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
          <View style = {styles.topContainer}> 
            
            <View style = {styles.profileImage}></View>

            <TouchableOpacity style={styles.logOut} onPress={this.handleLogout}>
              <Text style={styles.logOutText}>LOGGA UT</Text>
            </TouchableOpacity>

          </View>

          <View style = {styles.botContainer}> 

            <Text style={styles.nameText}>{this.props.name}</Text>

            <Text style={styles.emailText}>{this.props.email}</Text>

            <TouchableOpacity
              style={styles.to}
              onPress={() => this.props.navigation.navigate('Receipts')}
            >
              <Text style={styles.reText}>Kvittohistorik ></Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.paymentInfoView}>
          <Text style={styles.paymentHeader}>Betalningsmetod</Text>
          <PaymentMethod />
        </View>
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
    width: '100%',
  },
  personView: {
    height: '66%',
    width: '100%',
    padding: 20,
  },
  paymentInfoView: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#D7D7D7',
  },
  paymentHeader: {
    fontSize: 14,
    fontWeight: '600',
    color: '#57454B',
  },
  personHeader: {
    fontSize: 20,
    color: 'grey',
    marginTop: 40,
  },
  nameText: {
    fontSize: 24,
    color: 'black',
    marginTop: 10,
    marginBottom: 10,
    left: 20,
  },
  emailText: {
    fontSize: 18,
    color: 'black',
    marginTop: 10,
    marginBottom: 10,
    left: 20,
  },
  reText: {
    fontSize: 14,
    color: '#5AA3B7',
  },
  to: {
    width: '35%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    left: 20,
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
  profileImage: {
    backgroundColor: 'blue',
    borderRadius: 1000,
    borderWidth: 5,
    borderColor: 'black',
    width: 150,
    height: 150,
    marginTop: 5,
    marginLeft: 5,
    marginBottom: 20
  },
  topContainer:{
    height: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  botContainer: {
    height: '60%',
  },
});

export default withNavigation(Profile);
