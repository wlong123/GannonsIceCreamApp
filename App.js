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
import LoginContainer from './src/auth-components/login-home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';


export default createAppContainer(createBottomTabNavigator(
  {
    Home: Home,
    Flavors: Flavors,
    Login: LoginContainer
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        } else if (routeName === 'Flavors') {
          iconName = `ios-ice-cream`;
        } else if (routeName === 'Login') {
          iconName = `ios-contact`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons

        // this should be changed to an icon
        // return <Text>{routeName}</Text>;
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
  }
));
