import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import shops from '../dummy-data';
import { Location, Permissions } from 'expo'
import Map from '../map/Map'

const defaultDeltas = {
  latitudeDelta: 0.1,
  longitudeDelta: 0.1,
}

const defaultRegion = {
    latitude: 57.689388,
    longitude: 11.977315,
    ...defaultDeltas,
}

class Mapcomp extends Component {
  constructor() {
    super();
    this.state = {
      region: defaultRegion,
    }
  }

  componentWillMount() {
    this.getLocationAsync();
  }

  /*
    Example from https://blog.expo.io/building-a-coffee-map-with-react-native-and-expo-a00b8f60a4c6
    Gets the user location async if allowed by user, otherwise default region is set.
  */
  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied'
      });
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    const region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      ...defaultDeltas,
    };
    await this.setState({ region });
  }

  render() {
    return (
        <View style={styles.container}>
            <Map region={this.state.region} shops={shops} />
        </View>
    );
  };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
});

export default Mapcomp;
