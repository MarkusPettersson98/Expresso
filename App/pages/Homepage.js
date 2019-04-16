import React, {Component} from 'react';
import {AppRegistry, StyleSheet, State, Button, View, TouchableOpacity} from 'react-native';
import Topcomp from './components/Topcomp';
import Maincomp from './components/Maincomp';
import Blockcomp from './components/Blockcomp';
import Mapcomp from './components/Mapcomp';
import Drawer from './components/headerComponents/Drawer';
import Checkout from './components/headerComponents/Checkout';


export default class Homepage extends Component{

    state = {
        toggle: 'LV'
    }
    _pressLV = () => this.setState({ toggle: 'LV' })
    _pressBV = () => this.setState({ toggle: 'BV' })
    _pressMV = () => this.setState({ toggle: 'MV' })

    render(){
        return(
            <View style = {styles.container}>
                <Topcomp />
                <View style = {styles.butcontainer}>
                    <Button title = 'List' style = {styles.item} onPress = {this._pressLV} color = 'black'/>
                    <Button title = 'Block' style = {styles.item} onPress = {this._pressBV} color = 'black'/>
                    <Button title = 'Map' style = {styles.item} onPress = {this._pressMV} color = 'black'/>
                </View>

                {this.state.toggle == 'LV' && <Maincomp />}
                {this.state.toggle == 'BV' && <Blockcomp />}
                {this.state.toggle == 'MV' && <Mapcomp />}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    butcontainer: {
        height: '5%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#F0F7F4',
        borderBottomWidth: 5,
    },
    item: {
        width: '33%',
        justifyContent: 'center',
        backgroundColor: '#F0F7F4',
        textDecorationLine: 'none',

    }
})

AppRegistry.registerComponent('Homepage', () => Homepage);
