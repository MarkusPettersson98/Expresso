import React from 'react';
import {AppRegistry, ScrollView, StyleSheet, ImageBackground, Text, View} from 'react-native';

import {default as CoffeView} from "./CoffeeView.js";
import {coffee} from "./dummy-data";


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap",
        backgroundColor: '#F0F7F4',
        alignItems: 'flex-start',
    },
});


export default Coffeecomp = ({selectedShop}) => {

    const shop = coffee.find((allShops) => {
        return allShops.shop == selectedShop;
    });
    // Create a view for every available coffee
    const CoffeeViews = shop.coffees.map((coffee, index) => {
        return (<CoffeView  key={index} name={coffee.name} price={coffee.price} />);
    });


    return (
        <ScrollView contentContainerStyle = {styles.container}>
            {CoffeeViews}
        </ScrollView>
    );

}

AppRegistry.registerComponent('Coffeecomp', Coffeecomp);
