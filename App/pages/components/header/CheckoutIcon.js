import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/**
 * This is the icon in the header of every page which shows a shopping cart
 * 
 * @param {navigationProps, styling} props 
 *      navigationProps is used to navigate to the checkoutView, 
 *      the navigate('Checkout') uses the key of the objects in MainComp to determine where to navigate to.
 * 
 *      styling is determined in menuComp as headerIconStyling and is used so that icons have consistent sizes and colors.
 */

const CheckoutIconHeader = props => {
    return (
        <View style={{ flexDirection: 'row', margin: 5 }}>

        </View>
    );
};

export default CheckoutIconHeader;
