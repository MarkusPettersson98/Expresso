import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';


/**
 * @param  region , determines where to focus
 * @param shop  , the shop to focus
 */

 MiniMap = ({ shop }) => {

    const defaultDeltas = {
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
    };

    const region = {
        latitude: shop.coordinates? shop.coordinates.latitude : 0,
        longitude: shop.coordinates? shop.coordinates.longitude : 0,
        ...defaultDeltas
    }

    const renderMarkers = () => {
        return (
            <View >
                <MapView.Marker
                    title={shop.street}
                    coordinate={{
                        latitude: region.latitude,
                        longitude: region.longitude,
                    }}
                />
            </View>
        );
    } ;

    return (
        <MapView
            style={styles.map}
            region={region}
        >
            {renderMarkers()}
        </MapView>
    );
};
const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '80%',
        borderRadius: 40,
        margin: 5,

    },
});

export default MiniMap;
