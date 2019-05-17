import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const listReceipts = ({receiptList}) => {
    return(
        <View style = {styles.container}>
            {receiptList.map((item,i) => (
                <Text key = {i} style = {styles.text}>
                    {item.total}
                </Text> 
            ))}

            {console.log(receiptList)}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 14,
        color: 'black',
    },
}); 

export default listReceipts