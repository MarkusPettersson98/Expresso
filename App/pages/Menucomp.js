import React from 'react';
import {
    createDrawerNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

import Homepage from './Homepage';
import Profilepage from './ProfilePage';
import Loginpage from './LoginPage';
import Checkoutpage from './Checkout';
import CheckoutHeader from './components/header/CheckoutIcon';
import ClearCheckoutHeader from './components/header/ClearCheckoutIcon';
import DrawerHeader from './components/header/DrawerIcon';
import Order from './components/order/Order'

/*
    This class relies on react-navigation, this is where we navigate through the app.
    navigationOptions lets us set headers and in the future, tab options.

    
    Temporarily, all of the stackNavigators carry a checkoutScreen.
    There is some documentation regarding defaultNavitationOptions which can be looked into,
    so that we dont need to fix the header and add the checkoutscreen navigation ability, however,
    I (robert) tried to no success without it being really buggy.

    We are probably going to change drawerNavigator into Tabnavigator.
*/

// so that the colour of the header is located at one spot.
const headerStyling = {
    headerStyle: {
        backgroundColor: '#57454B',
    },
    headerTintColor: '#fff',
};

// determines icon sizes and color, could possibly be moved to a 'styles'-file to avoid passing props.
const headerIconStyling = {
    size: 32,
    color: '#F0F7F4',
};

const HomePage_StackNavigator = createStackNavigator({
    First: {
        screen: Homepage,
        navigationOptions: ({ navigation }) => ({
            title: 'Home Screen',
            headerLeft: (
                <DrawerHeader
                    navigationProps={navigation}
                    styling={headerIconStyling}
                />
            ),
            headerRight: (
                <CheckoutHeader
                    navigationProps={navigation}
                    styling={headerIconStyling}
                />
            ),

            ...headerStyling,
        }),
    },
    Checkout: {
        screen: Checkoutpage,
        navigationOptions: () => ({
            title: 'Varukorg',
            headerRight: <ClearCheckoutHeader />,
            ...headerStyling,
        }),
    },
    Order: {
      screen: Order,
      navigationOptions: () => ({
          title: 'Order',
          ...headerStyling,
      }),
    }
});

const ProfilePage_StackNavigator = createStackNavigator({
    Second: {
        screen: Profilepage,
        navigationOptions: ({ navigation }) => ({
            title: 'Profile Screen',
            headerLeft: (
                <DrawerHeader
                    navigationProps={navigation}
                    styling={headerIconStyling}
                />
            ),
            headerRight: (
                <CheckoutHeader
                    navigationProps={navigation}
                    styling={headerIconStyling}
                />
            ),

            ...headerStyling,
        }),
    },
    Checkout: {
        screen: Checkoutpage,
        navigationOptions: () => ({
            title: 'Varukorg',
            headerRight: <ClearCheckoutHeader />,
            ...headerStyling,
        }),
    },
});

const LoginScreen_StackNavigator = createStackNavigator({
    Third: {
        screen: Loginpage,
        navigationOptions: ({ navigation }) => ({
            title: 'Login Screen',
            headerLeft: (
                <DrawerHeader
                    navigationProps={navigation}
                    styling={headerIconStyling}
                />
            ),
            headerRight: (
                <CheckoutHeader
                    navigationProps={navigation}
                    styling={headerIconStyling}
                />
            ),

            ...headerStyling,
        }),
    },
    Checkout: {
        screen: Checkoutpage,
        navigationOptions: () => ({
            title: 'Varukorg',
            headerRight: <ClearCheckoutHeader />,
            ...headerStyling,
        }),
    },
});

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomePage_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Home Screen',
        },
    },
    Profile: {
        screen: ProfilePage_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Profile Screen',
        },
    },
    Login: {
        screen: LoginScreen_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Login Screen',
        },
    },
});

export default createAppContainer(DrawerNavigator);
