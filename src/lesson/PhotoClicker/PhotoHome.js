import React from 'react'

import { View, Image, StyleSheet, Button } from 'react-native';


export default class PhotoHome extends React.Component {

    static navigationOption = {
        title: "PhotoClicker"
    }

    constructor(props) {
        super(props);

    }


    render() {

        let photo = this.props.navigation.getParam("photo", "empty")

        return (<View style={styles.container}>
            <Image
                resizeMode="center"
                style={styles.imageHolder}
                source={photo === "empty" ? require("../../images/email.png") : photo}
            />

            <Button
                title="Take Photo"
                style={styles.button}
                onPress={() => {
                    this.props.navigation.navigate("CameraScreen");
                }}
            />
        </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    imageHolder: {
        alignSelf: "center",
        height: 500,
        margin: 20
    },
    button: {
        margin: 20
    }
})