import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({onPress}) => {
    return (
        <TouchableOpacity style={container} onPress={onPress}>
            <Text style={text}>BETALA</Text>
        </TouchableOpacity>
    );
};

const container = {
    alignItems: 'center',
    backgroundColor: '#5AA3B7',
    width: '90%',
    paddingVertical: 16,
    borderRadius: 20,
};

const text = {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 2,
};

export default Button;
