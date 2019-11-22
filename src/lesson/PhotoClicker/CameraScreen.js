/**
 * 
 * For camera to work we need to install camera pkg using following cmd
 * expo install expo-camera
 * 
 */

import React from 'react'

import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Camera } from "expo-camera";
import * as Permissions from 'expo-permissions';
import { FontAwesome } from "@expo/vector-icons"

export default class CameraScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back,
            isFlashLightOn: Camera.Constants.FlashMode.off
        }
    }


    static navigationOption = {
        title: "Camera"
    }

    // Flip the camera
    flipCamera = () => {
        this.setState({
            type:
                (this.state.type === Camera.Constants.Type.back ?
                    Camera.Constants.Type.front
                    : Camera.Constants.Type.back),
        })
    }

    // Flip the camera
    toggleFlashLight = () => {
        this.setState({
            type:
                (this.state.isFlashLightOn === Camera.Constants.FlashMode.off ?
                    Camera.Constants.FlashMode.on
                    : Camera.Constants.FlashMode.off),
        })
    }

    // Take Pic and send it to home screen
    takePicture = async () => {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync();
            this.props.navigation.navigate("PhotoHome", { photo });
        }
    }

    // ask for camera permission
    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermission: status === "granted"
        })
    }

    render() {

        const { hasCameraPermission } = this.state

        if (hasCameraPermission === null) {
            return <View />
        } else if (hasCameraPermission === false) {
            return <View > <Text> No access to camera </Text></View>
        } else {

            return (<View style={styles.container}>
                <Camera
                    style={styles.cameraView}
                    type={this.state.type}
                    flashMode={this.state.isFlashLightOn}
                    ref={ref => { this.camera = ref; }}
                >

                <View style={styles.actionContainer}>
                    <TouchableOpacity
                     onPress={()=> this.flipCamera() }
                    style={styles.iconHolder}>
                        <FontAwesome
                            name="camera"
                            size={35}
                            style={styles.icon}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={()=> this.takePicture() }
                    style={styles.iconHolder}>
                        <FontAwesome
                            name="circle"
                            size={35}
                            style={styles.icon}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={()=> this.toggleFlashLight() }
                    style={styles.iconHolder}>
                        <FontAwesome
                            name="flash"
                            size={35}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
                </Camera>
            </View>);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    cameraView:{
        flex : 1
    },
    actionContainer : {
        
        flex : 1,
        flexDirection : "row",
        backgroundColor : "transparent"
    },
    iconHolder :{
        flex : 1,
        alignItems : "center",
        alignSelf : "flex-end"
    },
    icon:{
        marginBottom : 10,
        color : "#fff"
    }
})