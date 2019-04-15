import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
 
import Screen1 from './Homepage';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
 
const NavigationDrawerStructure = props => {
  //Structure for the navigatin Drawer
  toggleDrawer = (nP) => {
    //Props to open/close the drawer
    nP.toggleDrawer();
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
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: 'Home Screen',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#F0F7F4',
      },
      headerTintColor: '#000',
    }),
  },
});
 
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 2',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#F0F7F4',
      },
      headerTintColor: '#000',
    }),
  },
});
 
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 3',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#F0F7F4',
      },
      headerTintColor: '#000',
    }),
  },
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