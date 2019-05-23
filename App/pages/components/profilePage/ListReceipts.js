import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView  } from 'react-native';
import { withNavigation } from 'react-navigation';

/*
TODO: Hämta informationen på rätt sätt
*/

const listReceipts = ({receiptList}) => {
    return(
        <ScrollView contentContainerStyle = {styles.container}>
            {receiptList.map((item,i) => (
                <TouchableOpacity
                    key = {i} 
                    style = {styles.receiptItem}
                    onPress={() => console.log(item)}
                >
                    <Text style = {styles.text}>
                        {(new Date(item.date)).toDateString()}
                    </Text>
                    <Text style = {styles.text}>
                        'item.shop.name'
                    </Text> 
                    <Text style = {styles.text}>
                        Totalt: {item.totalPrice}kr
                    </Text>
                </TouchableOpacity> 

            ))}

            {console.log(receiptList)}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    receiptItem: {
        flexDirection: 'row',
        height: '10%',
        width: '95%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 3,
        borderRadius: 10,
        backgroundColor: '#d2d8d5',
        marginTop: 10,
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
        color: 'black',
    },
}); 

export default withNavigation(listReceipts);