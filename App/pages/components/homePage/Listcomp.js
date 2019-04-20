import React from 'react';
import { AppRegistry, ScrollView } from 'react-native';

import { default as ShopView } from './ListShopView';

export default (Listcomp = ({ shops }) => {
    const ShopViews = shops.map((shop, index) => {
        return <ShopView key={index} name={shop.name} picture={shop.picture} />;
    });

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {ShopViews}
        </ScrollView>
    );
});

const styles = {
    container: {
        width: '100%',
        flexDirection: 'column',
        backgroundColor: '#F0F7F4',
        justifyContent: 'center',
    },
};

AppRegistry.registerComponent('Listcomp', Listcomp);
