import React from "react";
import {
    createDrawerNavigator,
    createStackNavigator,
    createAppContainer
} from "react-navigation";

import Homepage from "./Homepage";
import Profilepage from "./ProfilePage";
import Loginpage from "./LoginPage";
import Checkoutpage from "./Checkout";
import CheckoutHeader from "./components/headerComponents/Checkout";
import DrawerHeader from "./components/headerComponents/Drawer";

const HomePage_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    First: {
        screen: Homepage,
        navigationOptions: ({ navigation }) => ({
            title: "Home Screen",
            headerLeft: <DrawerHeader navigationProps={navigation} />,
            headerRight: <CheckoutHeader navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: "#F0F7F4"
            },
            headerTintColor: "#000"
        })
    },
    Checkout: {
        screen: Checkoutpage
    }
});

const ProfilePage_StackNavigator = createStackNavigator({
    //All the screen from the Screen2 will be indexed here
    Second: {
        screen: Profilepage,
        navigationOptions: ({ navigation }) => ({
            title: "Profile Screen",
            headerLeft: <DrawerHeader navigationProps={navigation} />,
            headerRight: <CheckoutHeader navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: "#F0F7F4"
            },
            headerTintColor: "#000"
        })
    },
    Checkout: {
        screen: Checkoutpage
    }
});

const LoginScreen_StackNavigator = createStackNavigator({
    //All the screen from the Screen3 will be indexed here
    Third: {
        screen: Loginpage,
        navigationOptions: ({ navigation }) => ({
            title: "Login Screen",
            headerLeft: <DrawerHeader navigationProps={navigation} />,
            headerRight: <CheckoutHeader navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: "#F0F7F4"
            },
            headerTintColor: "#000"
        })
    },
    Checkout: {
        screen: Checkoutpage
    }
});

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomePage_StackNavigator,
        navigationOptions: {
            drawerLabel: "Home Screen"
        }
    },
    Profile: {
        screen: ProfilePage_StackNavigator,
        navigationOptions: {
            drawerLabel: "Profile Screen"
        }
    },
    Login: {
        screen: LoginScreen_StackNavigator,
        navigationOptions: {
            drawerLabel: "Login Screen"
        }
    }
});

export default createAppContainer(DrawerNavigator);
