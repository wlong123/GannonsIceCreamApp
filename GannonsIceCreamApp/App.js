import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import QRCode from 'react-native-qrcode';
import Home from './src/Components/home'

export default class App extends React.Component {
  state = {
    text: 'http://facebook.github.io/react-native/',
  };
  render() {
    return (
      <ImageBackground
          style={{
            flex: 1,
          }}
          source={require('./public/background.png')}
      > 
      <Home></Home>
      <View style={styles.container}> 
        <ScrollView>
          <Text style={styles.flavors}>Chocolate</Text>
          <Text style={styles.flavors}>Vanilla</Text>
          <Text>{"\n"}</Text>
          <Image
          style={styles.image}
          source={require('./public/icecream.png')}
        />
        <QRCode
          value={this.state.text}
          size={200}
          bgColor='black'
          fgColor='white'/>
        </ScrollView>
        {/* <Image
          style={styles.image}
          source={require('./public/icecream.png')}
        /> */}
      </View>
      </ImageBackground>
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
  flavors: {
    color: 'blue',
  },
  text: {
    color: 'black',
  },
  image: {
    width: 50, 
    height: 50,
    resizeMode:'contain',
    alignItems: 'flex-end'
  }
});
