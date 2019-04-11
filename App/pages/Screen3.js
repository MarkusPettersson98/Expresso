import React, {Component} from 'react';
import {AppRegistry, StyleSheet, State, Button, View, Text} from 'react-native';


export default class Screen3 extends Component{

    render(){
        return(
            <View>
                <Text>Screen3</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('Screen3', () => Screen2);