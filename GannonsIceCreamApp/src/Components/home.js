import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Home extends React.Component {
    
    render() {
      return (
        <View style={styles.container}> 
          <Text style={styles.text}>Welcome to Gannon's Ice Cream</Text>
          <Text>{"\n"}</Text>        
          <Text style={styles.text}>Todays Ice Cream Flavors are: </Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 3,
      // backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: 'black',
    },
  });