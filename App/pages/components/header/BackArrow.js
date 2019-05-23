import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

const BackArrow = props => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.goBack();
                }}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
                {/*Donute Button Image */}
                <Ionicons
                    name="ios-arrow-back"
                    size={30}
                    color={'#FAFAFA'}
                />
            </TouchableOpacity>
        </View>
    );
};

export default withNavigation(BackArrow);
