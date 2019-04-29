import React, { Component } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import Topcomp from './components/homePage/Topcomp';
import Maincomp from './components/homePage/Maincomp';
import Mapcomp from './components/homePage/Mapcomp';

export default class Homepage extends Component {
    state = {
        toggle: 'LV',
    };
    _pressLV = () => this.setState({ toggle: 'LV' });
    _pressMV = () => this.setState({ toggle: 'MV' });

    render() {
        return (
            <View style={styles.container}>
                <Topcomp />

                <View style={styles.comps}>
                    {this.state.toggle == 'LV' && <Maincomp />}
                    {this.state.toggle == 'MV' && <Mapcomp />}

                    <View style={styles.butcontainer}>
                        <Button
                            title="List"
                            style={styles.item}
                            onPress={this._pressLV}
                            color="black"
                        />
                        <Button
                            title="Map"
                            style={styles.item}
                            onPress={this._pressMV}
                            color="black"
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
