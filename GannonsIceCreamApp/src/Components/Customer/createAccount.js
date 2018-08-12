import React from 'react';
import { StyleSheet, View, ImageBackground, Button } from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  username: t.String,
  password: t.String,
  email: t.String,
});
export default class CreateAccount extends React.Component {
  static navigationOptions = {
    title: "Create Account",
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
            <Form type={User} /> 
            <Button
                title="Sign Up!"
                color="black"
                onPress={this.handleSubmit}
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
  });