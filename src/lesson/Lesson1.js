import React from 'react';
import { Image,StyleSheet, Text, View } from 'react-native';
import NameText from './src/components/NameText';
import EmailImage from './src/images/email.png'



export default class Lesson1 extends React.Component {
    render(){
  return (
    <View style={styles.container}>
        {/* 
       // Loading image from n/w
       // It's necessary to specify width and height when we are loading
       // imags from nwk

        // Note : When we write Inline style at that time we should use {{}}
        
         <Image source={{
        uri:"http://pngimg.com/uploads/email/email_PNG56.png",
      }}
      
      style={{
        width:100,
        height:100
      }}
      />
        
        // Loading from local uri
         <Image source={require("./src/images/email.png")}/>
        
         // Loading image as Obj
         <Image source={EmailImage}/>
        
        */}
      
      <Image source={EmailImage}/>

     

      <NameText name="Pratham"/>
      

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
