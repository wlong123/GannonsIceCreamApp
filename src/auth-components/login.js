import React, { Component } from 'react';
import { Text, Image, StyleSheet, View, Platform, TouchableHighlight, Alert } from 'react-native';
import firebase from 'react-native-firebase';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
// import Icon from 'react-native-vector-icons/FontAwesome';
import { GoogleSignin } from 'react-native-google-signin';

const someFunction = () => console.log("Test");
export default class Login extends Component {
  render() {
    // Calling this function will open Google for login.
    const googleLogin = async () => {
      try {
        // Add any configuration settings here:
        await GoogleSignin.configure();

        const data = await GoogleSignin.signIn();

        // create a new firebase credential with the token
        const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
        // login with credential
        const currentUser = await firebase.auth().signInWithCredential(credential);
        console.info(JSON.stringify(currentUser.user.toJSON()));
        this.props.navigation.navigate('Authenticated')
      } catch (e) {
        console.error(e);
      }
    }

    return (
      <View style={styles.container}>
        <Image style={{ alignSelf: 'center' }} source={require('./../images/gannons_logo.png')} />
        <Text style={styles.welcome}>Welcome to Login!</Text>
        <FormLabel>Name</FormLabel>
        <FormInput onChangeText={someFunction} />
        {/* <FormValidationMessage style={styles.formError}>Invalid Name</FormValidationMessage> */}
        <FormLabel>Email</FormLabel>
        <FormInput onChangeText={someFunction} containerStyle={styles.formPadding} />
        {/* <FormValidationMessage>Invalid Email</FormValidationMessage> */}
        <TouchableHighlight style={styles.button} onPress={googleLogin}>
          <Text>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.props.navigation.navigate('CreateAccount')}>
          <Text>Create Account</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 100 : 0,
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#afeeee',
    padding: 10,
    margin: 10
  },
  formPadding: {
    marginBottom: 30
  }
});
