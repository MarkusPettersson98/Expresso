import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

const Purchases = props => {
    return(
        <View style = {styles.container}>
            <Text>This will contain the QR code and other fun stuff</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
});

export default (Purchases);
