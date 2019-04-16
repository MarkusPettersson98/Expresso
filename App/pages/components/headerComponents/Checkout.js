import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";


export default class Checkout extends React.Component {
    constructor(props) {
    super(props)
    }
    render() {
        return (
            <View style={{ flexDirection: "row", margin: 5 }}>
                <TouchableOpacity onPress={() => {console.log('hej'); this.props.navigationProps.navigate('Checkout')}}>
                    {/*Donute Button Image */}
                    <Ionicons name="ios-cart" size={32} />
                </TouchableOpacity>
            </View>
        );
    }
}