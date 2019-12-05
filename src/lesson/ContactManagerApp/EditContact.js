import React from 'react'

import {
    View, Text, StyleSheet, TouchableWithoutFeedback,
    Keyboard, Alert, AsyncStorage, ScrollView
} from 'react-native';


import { Form, Item, Input, Label, Button } from "native-base"

export default class EditContact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            phone: "",
            email: "",
            address: "",
            key: ""
        }
    }

    static navigationOptions = {
        title: "Edit Contact"
    }

    componentDidMount() {
        const { navigation } = this.props
        navigation.addListener("willFocus", () => {
            var key = this.props.navigation.getParam("key", "")
            // populate state with key
            this.getContact(key)
        })
    }

    getContact = async key => {
        await AsyncStorage.getItem(key)
            .then(contactJsonString => {
                var contact = JSON.parse(contactJsonString)
                contact["key"] = key
                this.setState(contact)

            })
            .catch(error => console.log("eeeir " + error))
    }

    updateContact = async key => {
        if (
            this.state.fname !== "" &&
            this.state.lname !== "" &&
            this.state.phone !== "" &&
            this.state.email !== "" &&
            this.state.address !== ""
        ) {
            // create contact object
            var contact = {
                fname: this.state.fname,
                lname: this.state.lname,
                phone: this.state.phone,
                email: this.state.email,
                address: this.state.address
            }
            await AsyncStorage.mergeItem(key,
                JSON.stringify(contact)
            )
                .then(() => {
                    Alert.alert("Updated successfully");
                    this.props.navigation.goBack() // like pops out
                })
                .catch(error => {
                    console.log("Error : " + error)
                })

        } else {
            Alert.alert("All Fields are required !");
        }
    }

    render() {
        return (<TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss()
            }}
        >
            <ScrollView style={styles.container}>
                <Form>
                    <Item style={styles.inputItem}>
                        <Label>First Name</Label>
                        <Input
                            autoCorrect={false}
                            autoCapitalize="none"
                            keyboardType="default"
                            placeholder='Enter First Name'
                            value={this.state.fname}
                            onChangeText={fname => this.setState({ fname })}
                        />
                    </Item>

                    <Item style={styles.inputItem}>
                        <Label>Last Name</Label>
                        <Input
                            autoCorrect={false}
                            autoCapitalize="none"
                            keyboardType="default"
                            placeholder='Enter Last Name'
                            value={this.state.lname}
                            onChangeText={lname => this.setState({ lname })}
                        />
                    </Item>

                    <Item style={styles.inputItem}>
                        <Label>Phone</Label>
                        <Input
                            autoCorrect={false}
                            autoCapitalize="none"
                            keyboardType="phone-pad"
                            placeholder='Enter Phone number'
                            value={this.state.phone}
                            onChangeText={phone => this.setState({ phone })}
                        />
                    </Item>

                    <Item style={styles.inputItem}>
                        <Label>Email</Label>
                        <Input
                            autoCorrect={false}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            placeholder='Enter Email'
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                        />
                    </Item>

                    <Item style={styles.inputItem}>
                        <Label>Address</Label>
                        <Input
                            autoCorrect={false}
                            autoCapitalize="none"
                            keyboardType="default"
                            placeholder='Enter Address'
                            value={this.state.address}
                            onChangeText={address => this.setState({ address })}
                        />
                    </Item>


                    <Button
                        style={styles.button}
                        full
                        onPress={() => {
                            this.updateContact(this.state.key);
                        }}

                    >
                        <Text style={styles.buttonText}> Update</Text>
                    </Button>
                </Form>

                <View style={styles.empty} />

            </ScrollView>
        </TouchableWithoutFeedback>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        margin: 10
    },
    inputItem: {
        margin: 10
    },
    button: {
        backgroundColor: "#B83227",
        marginTop: 40
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold"
    }
});
