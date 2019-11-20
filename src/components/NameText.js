
import React, {Component} from 'react'
import {Text, StyleSheet} from 'react-native'

export default class NameText extends Component {

    render(){
        return(
            <Text style={styles.textStyle} >{this.props.name}</Text>
        );
    }

}

const styles = StyleSheet.create({
    textStyle:{
        backgroundColor: "orange",
        color:"white",
        padding:10,
        marginTop:10,
        borderRadius:5
    }
});