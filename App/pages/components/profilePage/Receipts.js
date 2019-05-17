import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ListReceipts from './ListReceipts';


const list = [
    {
      date: '2019-01-01',
      shop: 'Bulten',
      total: '40'
    },
    {
        date: '2019-01-02',
        shop: 'Bibblan',
        total: '100'
    },
    {
        date: '2019-01-03',
        shop: 'Linsen',
        total: '50'
    },
]



export default class ProfilePage extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <ListReceipts receiptList = {list} />
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