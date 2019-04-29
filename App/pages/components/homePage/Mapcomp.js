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

export default class Mapcomp extends Component {
    constructor() {
        super();
        this.state = {
            markers: shops.map((shop, index) => {
                return (
                    <View key={index}>
                        <MapView.Marker
                            coordinate={{
                                latitude: shop.coordinates.latitude,
                                longitude: shop.coordinates.longitude,
                            }}
                        >
                            <MapView.Callout onPress={() => alert('coffee')}>
                                <TouchableOpacity
                                    onPress={() => onMarkerPress({ index })}
                                >
                                    <Text>{shop.name}</Text>
                                </TouchableOpacity>
                            </MapView.Callout>
                        </MapView.Marker>
                    </View>
                );
            }),
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: 57.689388,
                        longitude: 11.977315,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1,
                    }}
                >
                    {this.state.markers}
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '85%',
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
