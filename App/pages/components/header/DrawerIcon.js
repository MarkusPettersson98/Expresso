import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Drawer = props => {
    //Structure for the navigatin Drawer
    const toggleDrawer = navigationProps => {
        //Props to open/close the drawer
        navigationProps.toggleDrawer();
    };
    return (
        <View style={{ flexDirection: 'row', margin: 5 }}>
            <TouchableOpacity
                onPress={() => toggleDrawer(props.navigationProps)}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
                {/*Donute Button Image */}
                <Ionicons
                    name="ios-menu"
                    size={props.styling.size}
                    color={props.styling.color}
                />
            </TouchableOpacity>
        </View>
    );
};

export default Drawer;
