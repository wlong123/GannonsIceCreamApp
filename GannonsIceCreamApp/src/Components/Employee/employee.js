import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text, Linking } from 'react-native';
// import QRCodeScanner from 'react-native-qrcode-scanner';

export default class Employee extends React.Component {
    onSuccess(e) {
        Linking
          .openURL(e.data)
          .catch(err => console.error('An error occured', err));
      }

    render() {
      return (
        <ImageBackground
        style={{
          flex: 3,
        }}
        source={require('../../../public/background.png')}
        >
        <View style={styles.container}> 
            <Text style={styles.text}>Welcome Employee!</Text>
            {/* <QRCodeScanner
                onRead={this.onSuccess.bind(this)}
                topContent={
                <Text style={styles.centerText}>
                    Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
                </Text>
                }
                bottomContent={
                <TouchableOpacity style={styles.buttonTouchable}>
                    <Text style={styles.buttonText}>OK. Got it!</Text>
                </TouchableOpacity>
                }
            /> */}
        </View>
        </ImageBackground>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: .75,
      justifyContent: 'center',
    },
    text: {
      color: 'black',
    },
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
      },textBold: {
        fontWeight: '500',
        color: '#000',
      },
      buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
      },
      buttonTouchable: {
        padding: 16,
      },
  });