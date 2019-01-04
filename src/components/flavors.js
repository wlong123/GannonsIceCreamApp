import React, { Component } from 'react';
import { Text, Image, StyleSheet, View, Platform, AppRegistry, FlatList, SectionList } from 'react-native';


export default class Flavors extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Flavors at Gannon's Isle</Text>

        <SectionList
          renderItem={({item, index, section}) => (
            <Text style={styles.subtitle} key={index}>{item}</Text>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={{fontWeight: 'bold', fontSize: 24, margin: 10}}>{title}</Text>
          )}
          sections={[
            {title: 'Soft Serve Flavors',
            data: ['Vanilla', 'Chocolate', 'Vanilla and Chocolate Twist', 'Black Raspberry',
                  'Orange Sherbet', 'Fruit and Berry Twist', 'Low Fat Vanilla Yogurt',
                  'Low Fat Chocolate Yogurt', 'Low Fat Vanilla and Chocolate Yogurt Twist',
                  'Vanilla Dole Whip', 'Chocolate Dole Whip', 'Raspberry Dole Whip',
                  'Pineapple Dole Whip']
                },
            {title: 'Hard Flavors (Homemade)', data: ['Vanilla', 'Chocolate']},
          ]}
          keyExtractor={(item, index) => item + index}
        />
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 100 : 0,
    backgroundColor: '#F5FCFF'
  },
  subtitle: {
    backgroundColor: '#64B5F6',
    color: '#fff',
    fontSize: 24,
    textAlign: 'left',
    margin: 10,
    padding: 5
  },
  title: {
    fontSize: 48,
    textAlign: 'left',
    margin: 10,
    fontWeight: 'bold'
  },
});