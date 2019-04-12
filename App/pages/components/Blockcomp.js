import React from 'react';
import {AppRegistry, ScrollView, StyleSheet, ImageBackground, Text, View} from 'react-native';

import {default as ShopView} from "./BlockShopView.js";
import shops from "./dummy-data";


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        backgroundColor: '#F0F7F4',
        alignItems: 'center',
    },
});


export default Blockcomp = () => {

    // Create a view for every available shop
    const ShopViews = shops.map((shop, index) => {
        return (<ShopView key={index} name={shop.name} picture={shop.picture} />);
    });


    return (
        <ScrollView contentContainerStyle = {styles.container}>
            {ShopViews}
        </ScrollView>
    );

}

AppRegistry.registerComponent('Blockcomp', Blockcomp);
