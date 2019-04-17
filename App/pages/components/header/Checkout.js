import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Checkout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{ flexDirection: 'row', margin: 5 }}>
                <TouchableOpacity
                    onPress={() =>
                        this.props.navigationProps.navigate('Checkout')
                    }
                >
                    <Ionicons name="ios-cart" size={32} />
                </TouchableOpacity>
            </View>
        );
    }
}