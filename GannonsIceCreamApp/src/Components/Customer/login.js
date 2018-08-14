import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import t from 'tcomb-form-native';
const _ = require('lodash');

// clone the default stylesheet
const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

// overriding the text color
stylesheet.textbox.error.color = 'red';

const Form = t.form.Form;

const User = t.struct({
  username: t.String,
  password: t.String,
});

export default class Login extends React.Component {
  static navigationOptions = {
    title: "Login",
  };
  handleSubmit = () => {
    // do the things  
    this.props.navigation.goBack()
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
        <Form type={User} style={styles.form}/> 
            <Button
                title="Sign In!"
                color="black"
                onPress={this.handleSubmit}
                rounded={true}
                large={true}
                buttonStyle={styles.button}
            />
        </View>
        </ImageBackground>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      marginTop: 20,
      padding: 20,
    },
    text: {
        color: 'black',
    },
    form: {
      backgroundColor: 'black'
    },
    button: {
      backgroundColor: 'green'
    }
  });