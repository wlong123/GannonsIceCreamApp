import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import QRCode from 'react-native-qrcode';
import { Button } from 'react-native-elements';

export default class CustomerHome extends React.Component {
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
        source={require('../../../public/background.png')}
        >
        <View style={styles.container}> 
            <Button
                onPress={() => this.props.navigation.navigate('Login')}
                title="Login"
                color="blue"
                large={true}
                outline={true}
                buttonStyle={styles.buttonTop}
            />
            <Button
                onPress={() => this.props.navigation.navigate('CreateAccount')}
                title="Create Account"
                color="blue"
                large={true}
                outline={true}
                buttonStyle={styles.buttonBottom}
            />
            <QRCode
            value={this.state.text}
            size={200}
            bgColor='black'
            fgColor='white'/>
        </View>
        </ImageBackground>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: .75,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: 'black',
    },
    buttonTop: {
      padding: 10, 
      marginTop: 10,
      marginBottom: 10,
    },
    buttonBottom: {
      padding: 10, 
      marginBottom: 10,
    }
  });