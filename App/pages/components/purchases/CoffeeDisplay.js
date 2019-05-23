import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CoffeeDisplay = ({ coffees }) => {
    //Vill skriva ut: Antal : Kaffesort : pris : Typ av mugg
    const coffeeItems = coffees.map(({ amount, coffee }) => {
        let antal = amount;
        let namn = coffee.name;
        let pris = coffee.price;
        let mugg = coffee.ownMug ? 'Har egen mugg' : 'Lånar mugg';
        return (
            <View style={styles.spaceing} key={antal + namn + pris + mugg}>
                <Text
                    style={{
                        color: 'black',
                        fontWeight: 'bold',
                        width: 40,
                        marginLeft: 10,
                    }}
                >
                    {antal}
                </Text>
                <Text style={styles.text}>{namn}</Text>
                <Text style={styles.text}>{mugg}</Text>
                <Text
                    style={{
                        color: 'black',
                        fontWeight: 'bold',
                        width: 35,
                        marginRight: 10,
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
        alignSelf: 'stretch',
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    text: {
        alignSelf: 'stretch',
        color: 'black',
        width: 110,
        backgroundColor: 'white',
    },
});
