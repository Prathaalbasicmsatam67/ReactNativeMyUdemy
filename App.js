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
import * as firebase from "firebase"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"

import HomeScreen from "./src/lesson/firebase-example/HomeScreen"
import LoadingScreen from "./src/lesson/firebase-example/LoadingScreen"
import SignUpScreen from "./src/lesson/firebase-example/SignUpScreen"
import SignInScreen from "./src/lesson/firebase-example/SignInScreen"


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAqL0j-Uj6zmHz-RFzWr35vdOLEGbGmTW4",
    authDomain: "reactbootcamp-3b12e.firebaseapp.com",
    databaseURL: "https://reactbootcamp-3b12e.firebaseio.com",
    projectId: "reactbootcamp-3b12e",
    storageBucket: "reactbootcamp-3b12e.appspot.com",
    messagingSenderId: "192586319970",
    appId: "1:192586319970:web:fe2b80f43b42583d62293b",
    measurementId: "G-5S52X1YQMT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const MainNavigator = createStackNavigator(
    {
        Loading : {screen : LoadingScreen},
        SignIn : {screen : SignInScreen},
        SignUp : {screen : SignUpScreen},
        Home : {screen : HomeScreen},
    },
    {
        // launcher screen
        initialRouteName : "Loading"
    }
)


const App = createAppContainer(MainNavigator);

export default App;