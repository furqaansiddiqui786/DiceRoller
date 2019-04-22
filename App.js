import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Textview from "./src/components/Textview"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source = {require('./src/images/dice1.png')} />
       </View> 
    );
  }
}

npm install -g expo-cli

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
