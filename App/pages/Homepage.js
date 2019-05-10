import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Maincomp from './components/homePage/Maincomp';
import Mapcomp from './components/homePage/Mapcomp';

export default class Homepage extends Component {
    state = {
        toggle: this.props.presentationMode,
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.comps}>
                    {this.state.toggle == 'List' && <Maincomp />}
                    {this.state.toggle == 'Map' && <Mapcomp />}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F7F4',
    },
    comps: {
        flex: 1,
    },
    butcontainer: {
        height: '10%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#F0F7F4',
        borderBottomWidth: 5,
        bottom: 0,
    },
    contentContainer: {
      flex: 20,
    },
    item: {
        width: '33%',
        justifyContent: 'center',
        backgroundColor: '#F0F7F4',
        textDecorationLine: 'none',
    },
});
