import React from "react"
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Image,
    ActivityIndicator
} from "react-native"

import { Card, CardItem } from "native-base";

export default class HttpExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: []
        }

    }

    getUserFromApi = () => {
        return (
            fetch("https://randomuser.me/api/?results=50")
                .then(response => response.json())
                .then(responseJson => {
                    this.setState({
                        isLoading: false,
                        dataSource: this.state.dataSource.concat(responseJson.results)
                    })
                })
                .catch(error => {
                    console.log("Error : " + error)
                })
        )
    }

    _keyExtractor = (item, index) => item.id;


    componentDidMount() {
        this.getUserFromApi();
    }

    render() {

        if (this.state.isLoading) {
            return (<View style={styles.progress}>
                <ActivityIndicator
                    size="large"
                    color="#2475B0"
                />
            </View>)
        }

        return (
            <FlatList
                data={this.state.dataSource}
                keyExtractor={this._keyExtractor}
                renderItem={({item}) => (
                    <Card>
                        <CardItem>
                            <View style={styles.container}>
                                <Image
                                    style={styles.profilePic}
                                    source={{
                                        uri: item.picture.medium
                                    }}
                                />
                            </View>

                            <View style={styles.userInfo}>
                                <Text >
                                    Name : {item.name.title} {item.name.first} {item.name.last}
                                </Text>

                                <Text >
                                    Email : {item.email}
                                </Text>

                                <Text >
                                    City : {item.location.city}
                                </Text>
                            </View>
                        </CardItem>
                    </Card>
                )}
            >

            </FlatList>);
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    },
    profilePic: {
        height : 100,
        width : 100,
        marginEnd : 10,
        flex : 2
    },
    userInfo: {
        flex : 5,
        marginStart : 55, 
        flexDirection : "column"
    },
    progress : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    }
})