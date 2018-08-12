import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';


export default class Login extends React.Component {
  static navigationOptions = {
    title: "Login",
  };
    render() {
      return (
        <ImageBackground
        style={{
          flex: 3,
        }}
        source={require('../../../public/background.png')}
        >
        <View style={styles.container}> 
          <Text style={styles.text}>Welcome to Gannon's Ice Cream</Text>
          <Text style={styles.text}>Todays Ice Cream Flavors are: </Text>
        </View>
        </ImageBackground>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: .1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        color: 'black',
      },
  });