import React, { Component } from 'react';
import { AppRegistry, Image, Text, View, StyleSheet, ScrollView } from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View>
        <ScrollView>
        
        <View><Image source={pic} style={{width: 193, height: 110}}/></View>
      <View><Text style={styles.bigBlue}>hello</Text></View>
      <View><Text style={styles.red}>world</Text></View>
      <View><Text style={{fontWeight: 'bold'}}>
        my name is 
        <Text style={{color: 'red'}}>
           kitty
        </Text>
      </Text></View>
      
      
        </ScrollView>
      
         
      </View>
      
       
    
      
    );
  }
}
const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 60,
  },
  red: {
    color: 'red',
    fontFamily: 'Cochin',
    fontSize: 50,
  },
});





