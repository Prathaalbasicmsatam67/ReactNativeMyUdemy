
/**
 * 
 * This js is about learning "State"
 * 
 * It is recommended to initialize ur state inside construcor
 * 
 * To change the value of state we should always call setState()
 * 
 * 
 * 
 */

import React from 'react';
import { StyleSheet,  View } from 'react-native';



export default class Lesson4 extends React.Component {
    constructor(){
        super();
      this.state = {
          myText: "Hello World"
      }
          
      }
    
      render(){
    return (
      <View style={{
        flex:1,
        alignItems:"center",
        backgroundColor:"#c1c1c1",
        padding:10,
        // marginTop : Dimensions.get("window").width 
        marginTop : 50
        
      }}>
    
      <TextInput 
      style={{
        backgroundColor:"white",
        height:50,
        width:300,
        borderWidth:0.5,
        borderRadius:5,
        padding:5
    
      }} 
      
      placeholder="Enter the value"
      placeholderTextColor="#7B8788"
    
      onChangeText={ (text) => {
        this.setState({myText : text}); 
      }}
    
      ></TextInput>
    
        <Text 
        style={{
          marginTop:50,
          fontSize:25
        }}
        > {this.state.myText
        .split(' ')
        .map(text=> text && "😆") // This converts our text into provided emoji
        .join(" ")
        } </Text>
    
      </View>
    );
    }
}
