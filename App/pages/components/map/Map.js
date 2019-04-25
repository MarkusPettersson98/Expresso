import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import MapView from 'react-native-maps';
import shops from '../dummy-data';
import Order from '../order/Order';
import { withNavigation } from 'react-navigation';

const Map = props => {
    const renderMarkers = () => {
      return props.shops.map((shop, index) => (
        <View key={index}>
            <MapView.Marker
                key={index}
                title={shop.name}
                coordinate={{
                    latitude: shop.coordinates.latitude,
                    longitude: shop.coordinates.longitude,
                }}
                onCalloutPress={() => props.navigation.navigate('Order', { selectedShop: shop.name })}
            />
        </View>
      ))
    }

    return (
        <MapView
            style={styles.map}
            region={props.region}
            showsUserLocation
            showsMyLocationButton
        >
            {renderMarkers()}
        </MapView>
    );
}
const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
});

export default withNavigation(Map);
