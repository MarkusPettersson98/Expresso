import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import shops from '../dummy-data';

export default Mapcomp = () => {
    const markers = shops.map((shop, index) => {
        return (
            <MapView.Marker
                key={index}
                title={shop.name}
                coordinate={{
                    latitude: shop.coordinates.latitude,
                    longitude: shop.coordinates.longitude,
                }}
            />
        );
    });

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={{
                    latitude: 57.689388,
                    longitude: 11.977315,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.015,
                }}
            >
                {markers}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '85%',
        //borderTopWidth: 5,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});

AppRegistry.registerComponent('Mapcomp', () => Mapcomp);
