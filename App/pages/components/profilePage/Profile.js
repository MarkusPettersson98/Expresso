import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LoadingOverlay from '../loading/loadingOverlay';
import PaymentMethod from '../payment/paymentMethod';
import { SimpleLineIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import * as firebase from 'firebase/app';
import 'firebase/auth';
/*
Page to show the userinformation.

Gets called by ProfilePage.js

*/
class Profile extends Component {
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
          <View style={styles.topContainer}>
            <View style={styles.profileImage}>
              <SimpleLineIcons name="user" size={50} color="white" />
            </View>

            <TouchableOpacity style={styles.logOut} onPress={this.handleLogout}>
              <Text style={styles.logOutText}>LOGGA UT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.botContainer}>
            <Text style={styles.nameText}>{this.props.name}</Text>

            <Text style={styles.emailText}>{this.props.email}</Text>

            <TouchableOpacity
              style={styles.kvitto}
              onPress={() => this.props.navigation.navigate('Receipts')}
            >
              <Text style={styles.reText}>Kvittohistorik ></Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.paymentInfoView}>
          <Text style={styles.paymentHeader}>Kårkort</Text>
          <PaymentMethod />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  personView: {
    width: '100%',
    padding: 24,
  },
  paymentInfoView: {
    width: '100%',
    padding: 24,
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
    fontSize: 18,
    fontWeight: '600',
    color: '#57454B',
    marginTop: 20,
  },
  emailText: {
    fontSize: 14,
    color: '#7C6A70',
    marginTop: 5,
    marginBottom: 10,
  },
  reText: {
    fontSize: 14,
    color: '#5AA3B7',
  },
  kvitto: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  logOut: {
    backgroundColor: '#DADADA',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  logOutText: {
    color: '#57454B',
    fontWeight: '700',
    letterSpacing: 1,
  },
  profileImage: {
    backgroundColor: '#C4DEE5',
    borderRadius: 1000,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  botContainer: {},
});

export default withNavigation(Profile);
