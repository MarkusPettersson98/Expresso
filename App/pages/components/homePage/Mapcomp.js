import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Location, Permissions } from 'expo';
import { getAllShopsCoords } from '../../../API/expressoAPI';
import Map from '../map/Map';

const defaultDeltas = {
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
};

const defaultRegion = {
    latitude: 57.689388,
    longitude: 11.977315,
    ...defaultDeltas,
};

class Mapcomp extends Component {
    constructor() {
        super();
        this.state = {
            region: defaultRegion,
            pins: [],
        };
    }
    // when mounted first time
    async componentDidMount() {
        const fetchedPins = await getAllShopsCoords();
        Promise.all(fetchedPins).then(pins => {
            this.setState({ ...this.state, pins: pins });
        });
    }
    // continiously updating location.
    async ComponentWillMount() {
        this.getLocationAsync();
    }

    /*
    Example from https://blog.expo.io/building-a-coffee-map-with-react-native-and-expo-a00b8f60a4c6
    Gets the user location async if allowed by user, otherwise default region is set.
  */
    getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            // set region to chalmers if denied permission
            this.setState({
                ...this.state,
                region: defaultRegion,
            });
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        const region = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            ...defaultDeltas,
        };
        await this.setState({ ...this.state, region: region });
    };

    render() {
        return (
            <View style={styles.container}>
                <Map region={this.state.region} shops={this.state.pins} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});

export default Mapcomp;
