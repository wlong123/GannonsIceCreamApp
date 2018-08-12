import React from 'react';
import { StyleSheet, View, ImageBackground, Text } from 'react-native';
import { Button } from 'react-native-elements'

export default class Home extends React.Component {
    state = {
        text: 'http://facebook.github.io/react-native/',
      };
    static navigationOptions = {
      title: "Gannon's Ice Cream",
    };
    render() {
      return (
        <ImageBackground
        style={{
          flex: 3,
        }}
        source={require('../../public/background.png')}
        >
        <View style={styles.container}> 
          <Text style={styles.text}>I am a:</Text>
          <Button
              onPress={() => this.props.navigation.navigate('CustomerHome')}
              title="Customer"
              color="blue"
              rounded={true}
              outline={true}
              large={true}
              buttonStyle={styles.button}
          />
          <Button
              onPress={() => this.props.navigation.navigate('EmployeeHome')}
              title="Employee"
              color="blue"
              outline={true}
              large={true}
              buttonStyle={styles.button}
              rounded={true}
          />
        </View>
        </ImageBackground>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: .5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: 'black',
    },
    button: {
      padding: 10, 
      marginTop: 10,
    }
  });