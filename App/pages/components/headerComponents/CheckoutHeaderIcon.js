import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Checkout = props => {
    return (
        <View style={{ flexDirection: "row", margin: 5 }}>
            <TouchableOpacity
                onPress={() => props.navigationProps.navigate("Checkout")}
            >
                <Ionicons name="ios-cart" size={32} />
            </TouchableOpacity>
        </View>
    );
};

export default Checkout;