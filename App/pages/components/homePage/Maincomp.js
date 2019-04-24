import React from 'react';
import { AppRegistry, ScrollView } from 'react-native';

import { default as ShopView } from './ListShopView';
import shops from '../dummy-data';

import {getAllShopNames, getAllShopInfo, getCoffeeInfo, getAllCoffeeFromAShop} from '../../../API/expressoAPI';
import { brewed_coffee, cappuccino } from '../../../API/dummy-data';

export default (Maincomp = props => {
    const ShopViews = shops.map((shop, index) => {
        return <ShopView key={index} name={shop.name} picture={shop.picture} />;
    });

    console.log( getAllCoffeeFromAShop('Bulten')); 


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

AppRegistry.registerComponent('Maincomp', Maincomp);
