/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Text } from 'react-native';
import Home from './src/components/home';
import Flavors from './src/components/flavors';
import Login from './src/auth-components/login';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';


export default createAppContainer(createBottomTabNavigator(
  {
    Home: Home,
    Flavors: Flavors,
    Login: Login
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Flavors') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        } else if (routeName === 'Login') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons

        // this should be changed to an icon
        return <Text>{routeName}</Text>;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
  }
));
