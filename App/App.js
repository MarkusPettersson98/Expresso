import React from "react";
import { View } from "react-native";
import Menucomp from "./pages/Menucomp";

export default class App extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Menucomp />
            </View>
        );
    }
}
