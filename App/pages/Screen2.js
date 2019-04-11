import React, {Component} from 'react';
import {AppRegistry, StyleSheet, State, Button, View, Text} from 'react-native';


export default class Screen2 extends Component{

    render(){
        return(
            <View>
                <Text>Screen2</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('Screen2', () => Screen2);