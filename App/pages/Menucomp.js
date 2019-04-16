import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
 
import Homepage from './Homepage';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Checkoutpage from './Checkout';
import CheckoutHeader from './components/headerComponents/Checkout';
import DrawerHeader from './components/headerComponents/Drawer';
 
const NavigationDrawerStructure = props => {
  //Structure for the navigatin Drawer
  toggleDrawer = (navigationProps) => {
    //Props to open/close the drawer
    navigationProps.toggleDrawer();
  };
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => toggleDrawer(props.navigationProps)}>
          {/*Donute Button Image */}
          <Image
            source={require('./components/resources/menu.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
}


const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Homepage,
    navigationOptions: ({ navigation }) => ({
      title: 'Home Screen',
      headerLeft: <DrawerHeader navigationProps={navigation} />,
      headerRight: <CheckoutHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#F0F7F4',
      },
      headerTintColor: '#000',
    }),
  },
  Checkout: {
    screen: Checkoutpage
  }
});
 
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile Screen',
      headerLeft: <DrawerHeader navigationProps={navigation} />,
      headerRight: <CheckoutHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#F0F7F4',
      },
      headerTintColor: '#000',
    }),
  },
  Checkout: {
    screen: Checkoutpage
  }
});
 
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      title: 'Login Screen',
      headerLeft: <DrawerHeader navigationProps={navigation} />,
      headerRight: <CheckoutHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#F0F7F4',
      },
      headerTintColor: '#000',
    }),
  },
  Checkout: {
    screen: Checkoutpage
  }
});
 
const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Screen1: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Home Screen',
    },
  },
  Screen2: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Profile Screen',
    },
  },
  Screen3: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Login Screen',
    },
  },
});
 
export default createAppContainer(DrawerNavigatorExample);
