
/**
 * 
 * This js is about learning styles and flex layout
 * The main access in React-Native is from top to bottom
 * 
 */

import React from 'react';
import { StyleSheet,  View } from 'react-native';



export default class Lesson2 extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <View
      style={{
        backgroundColor:"#74B9FF",
        width:50,
        height:50
      }}
      />
      <View
      style={{
        backgroundColor:"#192A56",
        width:100,
        height:100
      }}
      />

<View
      style={{
        backgroundColor:"#67E6DC",
        width:150,
        height:150
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
