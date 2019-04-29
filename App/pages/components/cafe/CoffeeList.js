import React from 'react';
import { AppRegistry, ScrollView, StyleSheet } from 'react-native';

import { default as CoffeeItem } from './CoffeeItem';
import { coffee } from '../dummy-data';

/**
 * @file This is the list responsible for rendering all different coffees from a shop.
 *
 * @param selectedShop Name of the selected shop. Used to fetch coffee assortment
 *
 * @todo CoffeeList should be passed down all the necessary information from Order. It's
 * only job should be to render the objects it gets passed down and nothing more. This means
 * that rather than receiving @param selectedShop it should be passed a list of coffeeobjects.
 *
 */

export default (CoffeeList = ({ selectedShop }) => {

    // TODO: Remove this function call, render passed down objects instead
    const shop = coffee.find(allShops => {
        return allShops.shop == selectedShop;
    });

    // Create a view for every available coffee
    const CoffeeItems = shop.coffees.map((coffee, index) => {
        return <CoffeeItem key={index} coffee={coffee} />;
    });

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {CoffeeItems}
        </ScrollView>
    );
});


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 20,
        alignItems: 'center',
    },
});

AppRegistry.registerComponent('CoffeeList', CoffeeList);
