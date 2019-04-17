import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CheckoutItem = (props) => {
    return (
      <Text>{`${props.name}: ${props.price}kr`}</Text>
    );
};

export default CheckoutItem;
