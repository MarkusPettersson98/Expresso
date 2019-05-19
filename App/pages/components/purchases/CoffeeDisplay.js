import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CoffeeDisplay = ({ coffees }) => {
    //Vill skriva ut: Antal : Kaffesort : pris : Typ av mugg
    const coffeeItems = coffees.map(({ amount, coffee }) => {
        let antal = amount;
        let namn = coffee.name;
        let pris = coffee.price;
        let mugg = coffee.ownMug ? 'Har egen mugg ' : ' Dödar miljön ';
        return (
            <View style={styles.spaceing}>
                <Text
                    style={{
                        color: 'white',
                        fontWeight: 'bold',
                        width: 40,
                    }}
                >
                    {antal}
                </Text>
                <Text style={styles.text}>{namn}</Text>
                <Text style={styles.text}>{mugg}</Text>
                <Text
                    style={{
                        color: 'white',
                        fontWeight: 'bold',
                        width: 35,
                    }}
                >
                    {pris}
                </Text>
            </View>
        );
    });

    return coffeeItems;
};
export default CoffeeDisplay;

const styles = StyleSheet.create({
    spaceing: {
        alignself: 'stretch',
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    text: {
        alignself: 'stretch',
        color: 'white',
        width: 140,
    },
});
