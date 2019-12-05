import React from 'react';

import { Dimensions, Image, Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

// Import screens
import HomeScreen from "./src/lesson/ContactManagerApp/HomeScreen"
import EditContact from "./src/lesson/ContactManagerApp/EditContact"
import AddNewContact from "./src/lesson/ContactManagerApp/AddNewContact"
import ViewContact from "./src/lesson/ContactManagerApp/ViewContact"

// Import navigation
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    EditContact: { screen: EditContact },
    AddNew: { screen: AddNewContact },
    View: { screen: ViewContact },
  
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

const ContactMgrApp = createAppContainer(MainNavigator);

export default ContactMgrApp;