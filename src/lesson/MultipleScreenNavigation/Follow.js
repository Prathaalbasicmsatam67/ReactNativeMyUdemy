import React from 'react'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { View, Text, StyleSheet, Button } from 'react-native';


export default class Follow extends React.Component {

    render() {
        const followReq = this.props.navigation.getParam("followRequest", "0")
        const doFollow = this.props.navigation.getParam("doFollow", "")

        return (<View style={styles.container}>
            <Text> You can follow these friends </Text>

            {
                followReq.map((frn, index) => {
                    return (<Button
                        key={frn}
                        title={`Follow ${frn}`}
                        onPress={() => doFollow(index)}
                    />)
                })
            }

            <Button
                title="Go to Home"
                onPress={() => {
                    this.props.navigation.navigate("Home")
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