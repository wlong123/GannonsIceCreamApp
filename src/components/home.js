import React, { Component } from 'react';
import { Text, Image, Platform, StyleSheet, View } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={{ alignSelf: 'center' }} source={require('./../images/gannons_logo.png')} />
        <Text style={styles.welcome}>Welcome to Gannon's Isle!</Text>
        <Text style={styles.instructions}>{instructions}</Text>
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});