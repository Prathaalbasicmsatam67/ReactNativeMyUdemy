import React from 'react';

import { Dimensions, Image, Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import Home  from './src/lesson/MultipleScreenNavigation/Home'
import Follow  from './src/lesson/MultipleScreenNavigation/Follow'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  Follow : { screen : Follow }
}, {
  defaultNavigationOptions: {
    headerTintColor: "#FFF",
    headerStyle: {
      backgroundColor: "#FF4848"
    },
    headerTitleStyle : {
      color : "#FFF"
    }
  }
}
);

const FirstScreen = createAppContainer(MainNavigator);

export default FirstScreen;