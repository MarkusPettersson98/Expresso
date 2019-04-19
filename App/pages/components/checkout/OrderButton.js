import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({onPress}) => {
    return (
        <TouchableOpacity style={container} onPress={onPress}>
            <Text style={text}> Betala </Text>
        </TouchableOpacity>
    );
};

const container = {
    alignItems: 'center',
    backgroundColor: '#5AA3B7',
    paddingHorizontal: 100,
    paddingBottom: 5,
    paddingTop: 5,
    borderRadius: 20,
};

const text = {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
};

export default Button;
