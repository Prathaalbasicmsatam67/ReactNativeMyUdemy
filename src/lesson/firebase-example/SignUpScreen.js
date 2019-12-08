import React from "react"
import {
    StyleSheet,
    View,
    Text,
    Image,
    ActivityIndicator,
    KeyboardAvoidingView,
    TouchableOpacity
} from "react-native"


import * as firebase from "firebase"

import { Form, Item, Input, Label, Button } from "native-base"

export default class SignUpScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            name: ""
        }
    }

    static navigationOptions = {
        title: "SignUp",
        header: null
    };

    signUpUser = (name, email, password) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(authenticate =>{
                return authenticate.user
                .updateProfile({
                    displayName : name
                })
                .then(()=>{
                    this.props.navigation.replace("Home")
                })
            })
            
            .catch(error => {
                alert(error.message)
            })
    }

    render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="position"
                enabled
            >

                <View style={styles.logoContainer}>
                    <Image
                        source={require("../../../assets/logo.png")}

                    />
                    <Text> Learn Code </Text>

                </View>

                <Form style={styles.form}>

                    <Item floatingLabel>
                        <Label>Name</Label>
                        <Input
                            autoCorrect={false}
                            autoCapitalize="none"
                            keyboardType="name-phone-pad"
                            onChangeText={name => {
                                this.setState({
                                    name
                                })
                            }}
                        />
                    </Item>

                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input
                            autoCorrect={false}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            onChangeText={email => {
                                this.setState({
                                    email
                                })
                            }}
                        />
                    </Item>

                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input
                            secureTextEntry={true}
                            autoCorrect={false}
                            autoCapitalize="none"
                            // keyboardType="visible-password"
                            onChangeText={password => {
                                this.setState({
                                    password
                                })
                            }}
                        />
                    </Item>

                    <Button
                        style={styles.button}
                        full
                        rounded
                        onPress={() => {
                            this.signUpUser(
                                this.state.name,
                                this.state.email,
                                this.state.password
                            )
                        }}
                    >
                        <Text style={styles.buttonText}>SignUp</Text>
                    </Button>

                </Form>

                <View style={styles.footer}>
                    <Text>OR</Text>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate("SignIn")
                        }}
                    >
                        <Text>Already have an account? </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    logoContainer: {
        alignItems: "center",
        marginTop: 100,
        marginBottom: 100
    },
    form: {
        padding: 20,
        width: "100%"
    },
    button: {
        marginTop: 20
    },
    buttonText: {
        color: "#fff"
    },
    footer: {
        alignItems: "center"
    }
});