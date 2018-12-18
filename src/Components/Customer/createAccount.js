import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import t from 'tcomb-form-native';
import Auth from '../../auth/auth';

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
        // Auth.register(User.email, User.password).then(() => {
        //   this.props.navigation.goBack();
        // }).catch((error) => {
        //   console.log(error);
        // })
        this.props.navigation.navigate('CustomerHome')
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
                rounded={true}
                large={true}
                onPress={this.handleSubmit}
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
      button: {
        backgroundColor: 'green'
      }
  });