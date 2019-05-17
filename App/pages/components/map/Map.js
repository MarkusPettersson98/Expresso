import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { withNavigation } from 'react-navigation';

/**
 *
 * @param  region from Mapcomp, determines where to focus
 * @param  shops from Mapcomp, an array with shops (names) and their coordinates
 * @param  navigation from withNavigation
 */

const Map = ({ region, shops, navigation }) => {
    const renderMarkers = () => {
        return shops.map(({ shop, coordinates }, index) => {
            return (
                <View key={index}>
                    <MapView.Marker
                        key={index}
                        title={shop}
                        coordinate={{
                            latitude: coordinates.latitude,
                            longitude: coordinates.longitude,
                        }}
                        onCalloutPress={() =>
                            navigation.navigate('Cafe', {
                                selectedShop: shop,
                            })
                        }
                    />
                </View>
            );
        });
    };

    return (
        <MapView
            style={styles.map}
            region={region}
            showsUserLocation
            showsMyLocationButton
        >
            {renderMarkers()}
        </MapView>
    );
};
const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
});

export default withNavigation(Map);
