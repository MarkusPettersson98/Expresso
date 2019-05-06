import React from 'react';
import { AppRegistry, ScrollView, View } from 'react-native';
import { default as ShopView } from './ListShopView';
import shops from '../dummy-data';

export default (Maincomp = props => {
    const ShopViews = shops.map((shop, index) => {
        return <ShopView key={index} name={shop.name} picture={shop.picture} />;
    });

    return (
        <View style = {styles.tc}>
            <ScrollView contentContainerStyle={styles.container}>
                {ShopViews}
            </ScrollView>
        </View>
    );
});

const styles = {
    container: {
        width: '100%',
        flexDirection: 'column',
        backgroundColor: '#F0F7F4',
        justifyContent: 'center',
    },
    tc: {
        flex: 1
    }
};

AppRegistry.registerComponent('Maincomp', Maincomp);
