import React from 'react';
import {
    createBottomTabNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

import Homepage from './Homepage';
import Profilepage from './ProfilePage';
import QRpage from './QRpage';
import Checkoutpage from './Checkout';
import CheckoutHeader from './components/header/CheckoutIcon';
import ClearCheckoutHeader from './components/header/ClearCheckoutIcon';
import ExitCheckout from './components/header/ExitCheckout';
import {
    Feather,
    FontAwesome,
} from '@expo/vector-icons';

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

const tabIconStyling = {
    size: 26,
    selected: '#362D30',
    inactive: '#9C9497',
};

export const Tabs = createBottomTabNavigator(
    {
        Lista: {
            screen: Homepage,
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

        QR: {
            screen: QRpage,
            navigationOptions: {
                tabBarLabel: 'QR',
                tabBarIcon: ({ focused, tintColor }) => {
                    return (
                        <FontAwesome
                            name={'qrcode'}
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
            activeTintColor: '#362D30',
            activeBackgroundColor: '#eee',
            labelStyle: {
                fontSize: 12,
            },
            style: {
                backgroundColor: 'white',
            },
        },
    },
);

export default createStackNavigator(
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
            navigationOptions: ({ navigation }) => ({
                title: 'Varukorg',
                headerRight: <ClearCheckoutHeader />,
                headerLeft: <ExitCheckout navigationProps={navigation} />,
                ...headerStyling,
            }),
        },
    },
    {
        mode: 'modal',
    },
);

//export default createAppContainer(RootStack);
