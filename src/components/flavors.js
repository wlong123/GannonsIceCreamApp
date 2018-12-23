import React, { Component } from 'react';
import { Text, Image, StyleSheet, View, Platform } from 'react-native';


export default class Flavors extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={{ alignSelf: 'center' }} source={require('./../images/gannons_logo.png')} />
        <Text style={styles.welcome}>Welcome to Flavors!</Text>
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
});