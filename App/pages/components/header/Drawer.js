import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Drawer extends React.Component {
    constructor(props) {
        super(props);
    }

    //Structure for the navigatin Drawer
    toggleDrawer = navigationProps => {
        //Props to open/close the drawer
        navigationProps.toggleDrawer();
    };

    render() {
        return (
            <View style={{ flexDirection: 'row', margin: 5 }}>
                <TouchableOpacity
                    onPress={() =>
                        this.toggleDrawer(this.props.navigationProps)
                    }
                >
                    {/*Donute Button Image */}
                    <Ionicons name="ios-menu" size={32} />
                </TouchableOpacity>
            </View>
        );
    }
}
