import React from 'react';
import {
    createBottomTabNavigator,
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

/*
    Temporarily, all of the stackNavigators carry a checkoutScreen.
    There is some documentation regarding defaultNavitationOptions which can be looked into,
    so that we dont need to fix the header and add the checkoutscreen navigation ability, however,
    I (robert) tried to no success without it being really buggy.
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
    },
});

const ProfilePage_StackNavigator = createStackNavigator({
    Second: {
        screen: Profilepage,
    },
});

const LoginScreen_StackNavigator = createStackNavigator({
    Third: {
        screen: Loginpage,
    }
});

export const Tabs = createBottomTabNavigator({
    Lista: {
        screen: HomePage_StackNavigator,
    },
    QR: {
        screen: LoginScreen_StackNavigator,
    },
    profile: {
        screen: ProfilePage_StackNavigator,
    },
});

export const RootStack = createStackNavigator(
    {
        Main: {
            screen: Tabs,
            navigationOptions: ({ navigation }) => ({
                title: 'Main',
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
    },
    {
        mode: 'modal',
    },
);

export default createAppContainer(RootStack);
