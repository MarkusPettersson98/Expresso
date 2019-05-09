import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

/**
 * The blue button which says betala in NonEmptyCheckout.js
 *
 * @param {onPress} onPress is described in NonEmptyCheckout.js, currently being a console.log of the order.
 * It is viewable at the bottom of NonEmptyCheckout, I believe that this can be bad practice and we should look into
 * adding some logic to this component.
 */

const Button = ({ onPress }) => {
    return (
        <TouchableOpacity style={container} onPress={onPress}>
            <Text style={text}>GÅ VIDARE</Text>
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
