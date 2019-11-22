import React from 'react'

import { View, Text, StyleSheet, Button } from 'react-native';


export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            followRequest: ["John", "Jain", "Ram", "Janice"],
            following: ["Pratham"]
        }
    }

    doFollow = index => {
        // As per new js we dnt need to write these var names
        // state.varName as both names are equal
        const { followRequest, following } = this.state

        const followNew = followRequest.splice(index, 1)
        following.push(followNew);

        this.setState({
            followRequest,
            following
        });
    }

    render() {
        return (<View style={styles.container}>
            <Text> You are following {this.state.following.length} </Text>
            <Button
                title="Go to Follow"
                onPress={() => {
                    this.props.navigation.navigate("Follow", {
                        followRequest: this.state.followRequest,
                        following: this.state.following,
                        doFollow : this.doFollow // transfer method to another compo
                    })
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
    }
})