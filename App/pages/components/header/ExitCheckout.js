import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ExitCheckout = props => {
    return (
        <View style={{ flexDirection: 'row', margin: 5 }}>
            <TouchableOpacity
                onPress={() => props.navigationProps.goBack()}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
				style={{flexDirection: 'row'}}
            >
				<Ionicons name='ios-arrow-down' size={16} color={'white'} />
                <Text style={{ fontSize: 12, color: 'white', marginLeft: 5 }}>{'Tillbaka'}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ExitCheckout;
