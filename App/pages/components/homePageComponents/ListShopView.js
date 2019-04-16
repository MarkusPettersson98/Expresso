import React from "react";
import { ImageBackground, Text, View } from "react-native";

const ShopView = ({ name, picture }) => {
    return (
        <View style={styles.item}>
            <ImageBackground
                source={picture}
                resizeMode="cover"
                style={styles.image}
            >
                <Text style={styles.text}>{name}</Text>
            </ImageBackground>
        </View>
    );
};

const styles = {
    item: {
        height: 200,
        borderTopWidth: 7,
        borderLeftWidth: 14,
        borderBottomWidth: 7,
        borderRightWidth: 14,
        justifyContent: "center",
        borderColor: "#F0F7F4",
        backgroundColor: "black"
    },
    text: {
        fontWeight: "bold",
        fontSize: 25,
        color: "white"
    },
    image: {
        width: "100%",
        height: "100%"
    }
};

export default ShopView;
