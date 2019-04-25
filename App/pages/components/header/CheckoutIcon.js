import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Checkout = props => {
    return (
        <View style={{ flexDirection: 'row', margin: 5 }}>
            <TouchableOpacity
                onPress={() => props.navigationProps.push('Checkout')}
                hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}

            >
                <Ionicons
                    name="ios-cart"
                    size={props.styling.size}
                    color={props.styling.color}
                />
            </TouchableOpacity>
        </View>
    );
};

export default Checkout;
