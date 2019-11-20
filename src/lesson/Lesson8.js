
/**
 * 
 * This js is about learning 
 * how to handle Notch 
 * 
 * SafeAreaView works best with IOS devices but
 * not same for Android. So we need to handle or provide
 * marginTop to View by adding View element inside SafeAreaView.
 * 
 */

import React from 'react';
import { StyleSheet,  View } from 'react-native';



export default class Lesson2 extends React.Component {
  
    render() {
        return(
          <SafeAreaView style={styles.container}>
          <View style={{marginTop:50}}>
          <Text> Hello World !!!!</Text>
          </View>
           </SafeAreaView>
        );
      }
    
    
    }
    
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
      },
    });