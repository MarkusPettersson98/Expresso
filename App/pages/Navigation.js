import React from 'react';
import { View } from 'react-native';
import {
    createBottomTabNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

import Homepage from './Homepage';
import Profilepage from './ProfilePage';
import OrderPage from './OrderPage';
import Checkoutpage from './Checkout';
import CheckoutHeader from './components/header/CheckoutIcon';
import ClearCheckoutHeader from './components/header/ClearCheckoutIcon';
import ExitCheckout from './components/header/ExitCheckout';
import Cafe from './components/cafe/Cafe';
import ExpressoLogoHeader from './components/header/ExpressoLogo';
import { Feather, MaterialIcons } from '@expo/vector-icons';

// so that the colour of the header is located at one spot.
const headerStyling = {
    headerStyle: {
        backgroundColor: '#57454B',
        height:60,
    },
    headerTintColor: '#fff',
};

// determines icon sizes and color, could possibly be moved to a 'styles'-file to avoid passing props.
const headerIconStyling = {
    size: 32,
    color: '#F0F7F4',
};

const tabIconStyling = {
    size: 26,
    selected: '#362D30',
    inactive: '#9C9497',
};

export const Tabs = createBottomTabNavigator(
    {
        Lista: {
            screen: () => <Homepage presentationMode={'List'} />,
            navigationOptions: {
                tabBarLabel: 'Lista',
                tabBarIcon: ({ focused, tintColor }) => {
                    return (
                        <Feather
                            name={'list'}
                            color={
                                focused
                                    ? tabIconStyling.selected
                                    : tabIconStyling.inactive
                            }
                            size={tabIconStyling.size}
                        />
                    );
                },
            },
        },
        Karta: {
            screen: () => <Homepage presentationMode={'Map'} />,
            navigationOptions: {
                tabBarLabel: 'Karta',
                tabBarIcon: ({ focused, tintColor }) => {
                    return (
                        <Feather
                            name={'map'}
                            color={
                                focused
                                    ? tabIconStyling.selected
                                    : tabIconStyling.inactive
                            }
                            size={tabIconStyling.size}
                        />
                    );
                },
            },
        },

        Order: {
            screen: OrderPage,
            navigationOptions: {
                tabBarLabel: 'Köp',
                tabBarIcon: ({ focused, tintColor }) => {
                    return (
                        <MaterialIcons
                            name={'receipt'}
                            color={
                                focused
                                    ? tabIconStyling.selected
                                    : tabIconStyling.inactive
                            }
                            size={tabIconStyling.size}
                        />
                    );
                },
            },
        },
        profile: {
            screen: Profilepage,
            navigationOptions: {
                tabBarLabel: 'Profil',
                tabBarIcon: ({ focused, tintColor }) => {
                    return (
                        <Feather
                            name={'github'}
                            color={
                                focused
                                    ? tabIconStyling.selected
                                    : tabIconStyling.inactive
                            }
                            size={tabIconStyling.size}
                        />
                    );
                },
            },
        },
    },
    {
        tabBarOptions: {
            // om bakgrunden
            activeBackgroundColor: '#eee',
            backgroundColor: 'white',

            // Om label
            labelStyle: {
                fontSize: 12,
            },
            // om textens färg
            activeTintColor: '#362D30',
            inactiveTintColor: '#9C9497',
        },
    },
);

export const RootStack = createStackNavigator(
    {
        Main: {
            screen: Tabs,
            navigationOptions: ({ navigation }) => ({
                headerTitle: <ExpressoLogoHeader />,
                headerRight: (
                    <CheckoutHeader
                        navigationProps={navigation}
                        styling={headerIconStyling}
                    />
                ),
                headerLeft: <View />, // so the headerTitle is center
                ...headerStyling,
            }),
        },
        Checkout: {
            screen: Checkoutpage,
            navigationOptions: ({ navigation }) => ({
                headerTitle: <ExpressoLogoHeader />,
                headerRight: <ClearCheckoutHeader />,
                headerLeft: <ExitCheckout navigationProps={navigation} />,
                ...headerStyling,
            }),
        },
        Cafe: {
            screen: Cafe,
            navigationOptions: ({ navigation }) => ({
                headerTitle: <ExpressoLogoHeader />,
                ...headerStyling,
            }),
        },
    },
    {
        mode: 'card',
    },
);

export default createAppContainer(RootStack);
