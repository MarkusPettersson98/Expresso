import React from 'react';
import { AppRegistry, ScrollView, StyleSheet } from 'react-native';

import { default as CoffeeItem } from './CoffeeItem';
/**
 * @file This is the list responsible for rendering all different coffees from a shop.
 *
 * @param coffeItems Name of the selected shops coffeeitems.
 *
 */

export default (CoffeeList = ({ coffeeItems }) => {
    // Create a view for every available coffee
    const CoffeeItems = coffeeItems.map((coffee, index) => {
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
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
    },
});

AppRegistry.registerComponent('CoffeeList', CoffeeList);
