import React from 'react';
import { StyleSheet, View, Button, ImageBackground } from 'react-native';
import QRCode from 'react-native-qrcode';

export default class CustomerHome extends React.Component {
    state = {
        text: 'http://facebook.github.io/react-native/',
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
            />
            <Button
                onPress={() => this.props.navigation.navigate('CreateAccount')}
                title="Create Account"
                color="blue"
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
  });