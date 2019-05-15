import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';



export default class ProfilePage extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text>Handle login/register user</Text>
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