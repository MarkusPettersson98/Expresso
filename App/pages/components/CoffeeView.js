import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    item: {
        height: 200,
        width: '50%',
        borderWidth: 10,
        justifyContent: 'center',
        borderColor: '#F0F7F4',
        backgroundColor: 'black'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
    }
});


const CoffeeView = ({ name, price }) => {
    return (
        <View style = {styles.item}>
            <TouchableOpacity>
                <Text style={styles.text}>{price}</Text>
                <Text style={styles.text}>{name}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CoffeeView;
