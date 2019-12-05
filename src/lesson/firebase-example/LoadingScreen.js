import React from "react"
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Image,
    ActivityIndicator
} from "react-native"

import * as firebase from "firebase";



export default class LoadingScreen extends React.Component {

    render(){
        return(<View style={styles.container}>
            <Text>Loading Screen</Text>
        </View>)
    }

}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignContent : "center",
        alignItems : "center"
    }
})