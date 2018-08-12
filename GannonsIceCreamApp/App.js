import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './src/Components/home'
import Login from './src/Components/Customer/login';
import CreateAccount from './src/Components/Customer/createAccount';
import CustomerHome from './src/Components/Customer/customer-home';
import EmployeeHome from './src/Components/Employee/employee-home';
import Employee from './src/Components/Employee/employee';

export default class App extends React.Component {
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
