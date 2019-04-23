import React from 'react';
import { AppRegistry, ScrollView, StyleSheet, ImageBackground, Text, View } from 'react-native';

import { default as CoffeeItem } from "./CoffeeItem";
import { coffee } from "../dummy-data";


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 20,
        flexWrap: "wrap",
        alignItems: 'center',
    },
});


export default CoffeeList = ({ selectedShop }) => {

    const shop = coffee.find((allShops) => {
        return allShops.shop == selectedShop;
    });
    // Create a view for every available coffee
    const CoffeeItems = shop.coffees.map((coffee, index) => {
        return (<CoffeeItem key={index} name={coffee.name} price={coffee.price} description={coffee.description} />);
    });


    return (
        <ScrollView contentContainerStyle={styles.container}>
            {CoffeeItems}
        </ScrollView>
    );

}

AppRegistry.registerComponent('CoffeeList', CoffeeList);