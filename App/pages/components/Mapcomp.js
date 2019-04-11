import React, {Component} from 'react';
import {AppRegistry, Text, StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';

export default class Mapcomp extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <MapView style={styles.map}
                    region={{
                        latitude: 57.689388,
                        longitude: 11.977315,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1
                    }}
            >
                <MapView.Marker
                    coordinate = {{
                        latitude: 57.689008,
                        longitude: 11.978538,
                    }}
                    title = {'Bulten'}
                ></MapView.Marker>
                <MapView.Marker
                    coordinate = {{
                        latitude: 57.687962,
                        longitude: 11.978813,
                    }}
                    title = {'Linsen'}
                ></MapView.Marker>
                <MapView.Marker
                    coordinate = {{
                        latitude: 57.690382,
                        longitude: 11.978556,
                    }}
                    title = {'Biblioteket'}
                ></MapView.Marker>
                <MapView.Marker
                    coordinate = {{
                        latitude: 57.693158,
                        longitude: 11.975036,
                    }}
                    title = {'Café Vera'}
                ></MapView.Marker>
                <MapView.Marker
                    coordinate = {{
                        latitude: 57.692538,
                        longitude: 11.975390,
                    }}
                    title = {'Wijkanders'}
                ></MapView.Marker>  

            </MapView>
            </View>
        );
    }
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
        position:'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },

})

AppRegistry.registerComponent('Mapcomp', () => Mapcomp);