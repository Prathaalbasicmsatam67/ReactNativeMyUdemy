import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { createStore } from 'redux'
import { connect } from "react-redux";


/**
 * Install
 * 
 * npm install redux react-redux
 * 
 */

// const initState = {
//   myCounter: 0
// }

// const store = createStore(reducer);

// const reducer = (state = initState, action) => {

//   switch (action.type) {
//     case 'INC_COUNTER':
//       return { myCounter: state.myCounter + 1 }
//     case 'DEC_COUNTER':
//       if (state.myCounter >= 1) {
//         return { myCounter: state.myCounter - 1 }
//       } else {
//         return state;
//       }


//     default:
//       break
//   }
// }


class MyApp extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.incCounter()
                        }}
                    >
                        <Text>Increase</Text>
                    </TouchableOpacity>

                    <Text style={{ fontSize: 30 }}> {this.props.myCounter}</Text>
                    <TouchableOpacity
                        onPress={() => this.props.decCounter()}
                    >
                        <Text>Decrease</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


function mapStateToProps(state) {
    return {
        myCounter: state.myCounter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        incCounter: () => dispatch({
            type: "INC_COUNTER"
        }),
        decCounter: () => dispatch({
            type: "DEC_COUNTER"
        })
    }
}

export default connect(mapStateToProps,
    mapDispatchToProps)(MyApp)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    }
})



