import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView  } from 'react-native';
import { withNavigation } from 'react-navigation';

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
                        {item.date}
                    </Text>
                    <Text style = {styles.text}>
                        {item.shop}
                    </Text> 
                    <Text style = {styles.text}>
                        Totalt: {item.total}kr
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
        width: '90%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 5,
        borderRadius: 10,
        backgroundColor: 'brown',
        marginTop: 10,
        marginBottom: 10,
    },
    text: {
        fontSize: 14,
        color: 'white',
    },
}); 

export default withNavigation(listReceipts);