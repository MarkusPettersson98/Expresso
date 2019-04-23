import React from 'react';
import { AppRegistry, ScrollView, StyleSheet, ImageBackground, Text, View } from 'react-native';

import { default as CoffeeIcon } from "./CoffeeIcon";
import { coffee } from "../dummy-data";


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        flexWrap: "wrap",
        backgroundColor: '#F0F7F4',
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
            {CoffeeIcons}
        </ScrollView>
    );

}

AppRegistry.registerComponent('CoffeeList', CoffeeList);
