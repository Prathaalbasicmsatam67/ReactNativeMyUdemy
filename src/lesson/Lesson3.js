
/**
 * 
 * This js is about learning  flex box layout
 * The main access in React-Native is from top to bottom
 * 
 * justifyContent : 
 *  space-between // gives spaces between view
 *  space-around // Same like space-between diff is it gies space at start and end of views
 * 
 * 
 * alignItems :
 * center // move an element in center
 * stretch // increase the width of view complete screen 
 */

import React from 'react';
import { StyleSheet,  View } from 'react-native';



export default class Lesson2 extends React.Component {
  render(){
    return (
        <View style={{
          flex:1, // Use entire screen,
          flexDirection:"row" // Default is column  
        }}>
          <View
          style={{
            flex:1,
            backgroundColor:"#74B9FF",
          }}
          />
          <View
          style={{
            flex:2,
            backgroundColor:"#192A56",
          }}
          />
    
    <View
          style={{
            flex:3, // It's like layout weight in android
            backgroundColor:"#67E6DC",
          }}
          />
    
        </View>
      );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
