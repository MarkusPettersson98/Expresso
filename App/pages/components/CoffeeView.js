import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    item: {
        flex: 1,
        height: 200,
        width: '50%',
        borderWidth: 10,
        justifyContent: 'center',
        borderColor: '#F0F7F4',
        backgroundColor: 'brown',
        alignItems: 'center',
        borderRadius: 40,
    },
    nameText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
    },
    priceText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
    },
});

const CoffeeView = ({ name, price }) => {

    const getCoffeeButtonHandler = () => {

        console.log('Kaffesort: ' + name, 'Pris: ' + price);
    }
    return (
        <TouchableOpacity onPress={getCoffeeButtonHandler}
            style = {styles.item}
            activeOpacity = {0.8}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.priceText}>{price}</Text>
        </TouchableOpacity>
    );
};

export default CoffeeView;
