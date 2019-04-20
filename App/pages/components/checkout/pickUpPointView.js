import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { incrementCoffee, decrementCoffee } from '../redux/actions';

export default (pickUpPoint = () => {
    return (
        <View
            style={{
                flexDirection: 'row',
                marginHorizontal: 24,
                marginTop: 16,
                marginBottom: 10,
                borderBottomColor: '#D7D7D7',
                borderBottomWidth: 1,
                paddingBottom: 20,
                backgroundColor: 'black',
            }}
        />
    );
});
