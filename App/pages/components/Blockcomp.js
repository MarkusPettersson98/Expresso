import React, {Component} from 'react';
import {AppRegistry, ScrollView, StyleSheet, ImageBackground, Text, View} from 'react-native';

import shops from "./dummy-data";


export default class Blockcomp extends Component{
    render(){
        return(
            <ScrollView contentContainerStyle = {styles.container}>
                <ShopViews />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        backgroundColor: '#F0F7F4',
        alignItems: 'center',
    },
    innerC: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#F0F7F4',
        alignItems: 'flex-start',
    },
    item: {
        height: 200,
        width: '50%',
        borderWidth: 10,
        justifyContent: 'center',
        borderColor: '#F0F7F4',
        backgroundColor: 'black'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
    }
})


const ShopViews = shops.map((shop) => {
    return (
        <View style = {styles.innerC}>
            <View style = {styles.item}>
                <ImageBackground source = {shop.picture} resizeMode = 'cover' style={{width: '100%', height: '100%', borderRadius: 20}}>
                    <Text style={styles.text}>{shop.name}</Text>
                </ImageBackground>
            </View>
        </View>
    );
});


AppRegistry.registerComponent('Blockcomp', () => Blockcomp);
