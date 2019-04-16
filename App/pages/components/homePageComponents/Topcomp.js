import React from "react";
import { AppRegistry, Image, StyleSheet, View } from "react-native";

const Topcomp = () => {
        return (
            <View style={styles.top}>
                <Image
                    style={{ width: "85%", height: "80%", top: "15%" }}
                    source={require("../resources/ExpressoLogo.psd")}
                />
            </View>
        );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    top: {
        height: "10%",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#F0F7F4"
    }
});

export default Topcomp;

AppRegistry.registerComponent("Topcomp", () => Topcomp);
