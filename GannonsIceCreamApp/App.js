/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './src/Components/home'
import Login from './src/Components/Customer/login';
import CreateAccount from './src/Components/Customer/createAccount';
import CustomerHome from './src/Components/Customer/customer-home';
import EmployeeHome from './src/Components/Employee/employee-home';
import Employee from './src/Components/Employee/employee';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <RootStack/>;

  }
}

const RootStack = createStackNavigator(
  {
    Home: Home,
    CustomerHome: CustomerHome,
    Login: Login,
    CreateAccount: CreateAccount,
    EmployeeHome: EmployeeHome,
    Employee: Employee
  },
  {
    initialRouteName: 'Home',
  }
);