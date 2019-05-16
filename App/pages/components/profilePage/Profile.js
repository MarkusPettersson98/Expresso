import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
/*
Page to show the userinformation.

Gets called by ProfilePage.js

TODO: 
- ersätta props mot data från firebase om användaren
- utseende
- Ska man kunna ändra sina uppgifter. Isf lägga till knapp som tar en till en sida där uppgifter kan ändras.
Har lagt till navigering till en kvittosida för att visa alla tidigare köp men den kan lika väl användas för att navigera till att ändra
uppgifter.
*/

const Profile = props => {
    return (
        <View style = {styles.container}>
            <View style = {styles.personView}>
                <Text style = {styles.personHeader}>User Profile</Text>
                <Text style= {styles.text}>{props.firstname} {props.lastname}</Text>
                <Text style= {styles.text}>{props.dateOfBirth}</Text>
                <Text style= {styles.text}>{props.city}, {props.country}</Text>
                <TouchableOpacity
                    style = {styles.to}
                    onPress={() => props.navigation.navigate('Receipts')}
                >
                    <Text style= {styles.reText}>Receipts ></Text>
                </TouchableOpacity>
            </View> 

            <View style = {styles.paymentInfoView}>
                <Text style = {styles.paymentHeader}>Payment Method</Text>
                <Text style= {styles.text}>{props.paymentMethod}</Text>
                <Text style= {styles.text}>{props.paymentInformation}</Text>
            </View>
        </View>
    ); 
}; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F7F4',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    personView: {
        height: '66%',
        width: '100%',
        padding: 20
    },
    paymentInfoView: {
        height: '37%',
        /*backgroundColor: '#5AA3B7',*/
        width: '100%',
        borderRadius: 20,
        padding: 20,
        borderColor: 'white',
        borderWidth: 5
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
        left: 20
    },
    reText:{
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
        alignItems: 'center'
    }
}); 

export default withNavigation(Profile);
