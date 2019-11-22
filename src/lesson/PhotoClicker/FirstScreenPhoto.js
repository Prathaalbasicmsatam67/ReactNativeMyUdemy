import React from 'react';

import { Dimensions, Image, Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import PhotoHome from './src/lesson/PhotoClicker/PhotoHome'
import CameraScreen from './src/lesson/PhotoClicker/CameraScreen'
import Follow from './src/lesson/MultipleScreenNavigation/Follow'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

const MainNavigator = createStackNavigator(
  {
    PhotoHome: { screen: PhotoHome },
    CameraScreen: { screen: CameraScreen },
  
  }, {
  defaultNavigationOptions: {
    headerTintColor: "#FFF",
    headerStyle: {
      backgroundColor: "#FF4848"
    },
    headerTitleStyle: {
      color: "#FFF"
    }
  }
}
);

const FirstScreenPhoto = createAppContainer(MainNavigator);

export default FirstScreenPhoto;