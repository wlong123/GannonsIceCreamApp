import React from 'react';
import { StyleSheet, View, ImageBackground, Text } from 'react-native';
import { Button } from 'react-native-elements';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const Employee = t.struct({
  "": t.String,
});

export default class EmployeeHome extends React.Component {
    handleSubmit = () => {
        // do the things  
        this.props.navigation.navigate('Employee')
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
            <Text style={styles.text}>Enter Employee Id:</Text>
            <Form type={Employee} /> 
            <Button
                title="Sign In"
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
      flex: .75,
      justifyContent: 'center',
    },
    text: {
      color: 'black',
    },
  });