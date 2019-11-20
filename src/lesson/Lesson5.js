/**
 * 
 * 
 * Button :
 * 
 * Looks diff for android and ios
 * 
 * to provide text to button we should use title props of button
 * 
 * 
 * 
 */


import React from 'react'
import {View , TouchableOpacity, Text, Button} from 'react-native'

export default class Lesson5 extends React.Component {


  myButtonPressed() {
    Alert.alert("Welcome");
  }

    render(){
        return (
          <View style={{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            // backgroundColor:"#c1c1c1",
            padding:10,
            marginTop : 50
            
          }}>
        
         <Button
        
        
         onPress={ () => { 
          Alert.alert("Hello, Dude");
        
        
         } }
         title="Press Me"
        //  color="#c1c1c1" // It's for bg color of button
         />
        
        

        <TouchableOpacity
 onPress={this.myButtonPressed}
 >
 <Text style={{
 fontSize : 30,
 backgroundColor : "#c1c1c1",
 paddingVertical : 12,
 paddingHorizontal : 20,
 borderRadius : 5
 
 }}> Hey </Text>

</TouchableOpacity>


        
            
          </View>
        );
        }
        }
        