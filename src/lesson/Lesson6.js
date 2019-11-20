/**
 * 
 * Sample app to change background color on press of text
 * 
 */


import React from 'react';
import { Text,  View, Alert , TouchableOpacity } from 'react-native';



export default class Lesson6 extends React.Component {
  
  constructor(){
    super();
  this.state = {
      randomColor : null
  }

      
  }

  myButtonPressed = () => {
    // Alert.alert("Welcome");
    this.setState({ randomColor : this.getRandomColor() })
  }

  getRandomColor = () => {
    return (
      "rgb("+
      Math.floor(Math.random() * 256) + "," +
      Math.floor(Math.random() * 256) + "," +
      Math.floor(Math.random() * 256) + ")"
    )
  }

  

  render(){
return (
  <View style={{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    // backgroundColor:"#c1c1c1",
    backgroundColor : this.state.randomColor,
    padding:10,
    marginTop : 50
    
  }}>

 <TouchableOpacity
 onPress={this.myButtonPressed}
 >
 <Text style={{
 fontSize : 30,
 backgroundColor : "#c1c1c1",
 paddingVertical : 12,
 paddingHorizontal : 20,
 borderRadius : 5,
 borderWidth : 2,
 borderColor : "#FFFFFF"
 
 }}> Change Background </Text>

</TouchableOpacity>

    
  </View>
);
}
}


