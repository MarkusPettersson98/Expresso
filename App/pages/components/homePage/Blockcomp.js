import React from 'react';
import { AppRegistry, ScrollView, StyleSheet } from 'react-native';

import { default as ShopView } from './BlockShopView.js';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#F0F7F4',
        alignItems: 'flex-start',
    },
});

export default (Blockcomp = ({shops}) => {
    // Create a view for every available shop
    const ShopViews = shops.map((shop, index) => {
        return <ShopView key={index} name={shop.name} picture={shop.picture} />;
    });

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {ShopViews}
        </ScrollView>
    );
});

AppRegistry.registerComponent('Blockcomp', Blockcomp);
