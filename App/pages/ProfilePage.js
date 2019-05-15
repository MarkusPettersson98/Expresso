import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Login from './components/profilePage/Login'
import Profile from './components/profilePage/Profile'

 
function HandleLoggedIn(props){
    const loggedIn = props.loggedIn;
    if(loggedIn == true){
       return(<Profile firstname = {'Emil'} lastname = {'Svensson'} dateOfBirth = {'1997-01-14'} city={'Göteborg'} paymentInformation = {'**** **** **** 1234'} />);
    }
    if(loggedIn == false){
       return(<Login />);
    }
}

export default class ProfilePage extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <HandleLoggedIn loggedIn = {true} />
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
});