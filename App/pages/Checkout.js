import React, { Component } from "react";
import { AppRegistry, View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class CheckoutPage extends Component {
    render() {
        return (
            <View style={styles.app}>
                <View style={styles.content}>
                    <Ionicons
                        name="ios-cafe"
                        size={256}
                        color="#005073"
                        ios="ios-cafe"
                    />
                    <Text style={styles.text}>Du har inte beställt kaffe</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    app: {
        flex: 1,
        alignItems: "stretch"
    },
    content: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#004068"
    }
});
