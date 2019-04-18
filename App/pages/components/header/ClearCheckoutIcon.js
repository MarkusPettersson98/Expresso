import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { clearCart } from '../redux/actions';

const ClearCheckout = ({ dispatch }) => {
    return (
        <View style={{ flexDirection: 'row', margin: 5 }}>
            <TouchableOpacity
                onPress={() => dispatch(clearCart())}
            >
                <Feather
                    name="trash-2"
                    size={24}
                    color="#fff"
                />
            </TouchableOpacity>
        </View>
    );
};

export default connect()(ClearCheckout);
