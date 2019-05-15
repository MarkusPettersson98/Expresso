import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';



export default class ProfilePage extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style= {styles.text}>{this.props.firstname} {this.props.lastname}</Text>
                <Text style= {styles.text}>{this.props.dateOfBirth}</Text>
                <Text style= {styles.text}>{this.props.city}</Text>
                <Text style= {styles.text}>{this.props.paymentInformation}</Text>
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
}); 
