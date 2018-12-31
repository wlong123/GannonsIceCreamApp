import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './login';
import CreateAccount from './create-account';
import Authenticated from './authenticated';

const loginNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    CreateAccount: { screen: CreateAccount },
    Authenticated: { screen: Authenticated }
  },
  {
    initialRouteName: "Login"
  }
);

const LoginContainer = createAppContainer(loginNavigator);

export default LoginContainer