import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      uri: require('./src/images/dice1.png')
    };
  }
  //javascript function to get random images//
  Getrandomimages = () =>{
    return Math.floor(Math.random() * 6) + 1;
  }
  //javascript function to generate random images using the getrandomimages function//
  buttonpressed = () => {
    var pics = this.Getrandomimages();
    switch (pics) {
      case 1:
        this.setState({uri: require('./src/images/dice1.png')})
      break;
      case 2:
        this.setState({uri: require('./src/images/dice2.png')})
      break;
      case 3:
        this.setState({uri: require('./src/images/dice3.png')})
      break;
      case 4:
        this.setState({uri: require('./src/images/dice4.png')})
      break;
      case 5:
        this.setState({uri: require('./src/images/dice5.png')})
      break;
      case 6:
        this.setState({uri: require('./src/images/dice6.png')})
      break;

      default:
        this.setState({uri: require('./src/images/dice1.png')})
        break;
    }
  }
  render(){
    return(
      <View style = {styles.container}>
      <Text style = {styles.title}>Press Play Game to Spin the Dice</Text>
        <Image
        source = {this.state.uri}
        />
        <TouchableOpacity
        onPress={this.buttonpressed}
        >
          <Text style = {styles.button}>Play Game</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    backgroundColor: "pink",
    alignItems : "center",
  },
  button:{
    color: "black",
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 60,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: "white",
    fontSize: 20
  },
  title:{
    marginBottom: 50,
    fontSize: 20,
    borderWidth: 2,
    borderColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 100,
    backgroundColor: "white",
    fontWeight: "bold"
  }
})