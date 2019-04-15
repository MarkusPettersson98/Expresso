import React from 'react';
import {AppRegistry, ScrollView, StyleSheet} from 'react-native';


export default Coffecomp = () => {

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

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F0F7F4',
        alignItems: 'flex-center',
    },
});


AppRegistry.registerComponent('Blockcomp', Blockcomp);
