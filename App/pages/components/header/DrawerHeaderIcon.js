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
            >
                {/*Donute Button Image */}
                <Ionicons name="ios-menu" size={32} />
            </TouchableOpacity>
        </View>
    );
};

export default Drawer;
