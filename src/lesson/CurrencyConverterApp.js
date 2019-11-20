
/**
 * 
 * This js is about learning 
 * 
 * Currency Converter App
 * 
 * To eject app from expo
 * This will create app source code in android and ios directory
 * cmd> npm run eject
 * 
 */

import React from 'react';
import { StyleSheet,  View } from 'react-native';



export default class CurrencyConverterApp extends React.Component {
  
  
    constructor() {
        super();
        this.state = {
          inputVal: "",
          resultValue: "0.0"
        }
      }
    
    
      buttonPressed = currency => {
        if (this.state.inputVal === "") {
          Alert.alert("Please enter some value");
          return;
        }
    
        let result = parseFloat(this.state.inputVal) * currencyPerRupee[currency]
    
        this.setState({ resultValue: result.toFixed(2) });
      }
    
    
    
      render() {
        return (
          // dismiss the keyboard on click of screen anywhere
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
            <SafeAreaView style={styles.container}>
              <View style={[{ marginTop: 50 }, styles.screenView]}>
    
                <View style={styles.resultContaoner}>
                  <Text style={styles.resultValue}> {this.state.resultValue} </Text>
                </View>
    
    
                <View style={styles.inputContainer}>
                  <TextInput style={styles.input}
                    selectionColor="#FFF"
                    keyboardType="numeric"
                    placeholder="Enter Value"
                    value={this.state.inputVal}
                    onChangeText={inputVal => { this.setState({ inputVal }) }}
                  />
    
                </View>
    
                <View
                  style={styles.converterButtonContainer}
                >
                  <TouchableOpacity style={styles.converterButton}
                    onPress={() => { this.buttonPressed("DOLLAR") }}
                  >
                    <Text style={styles.converterButtonText}> $ </Text>
    
                  </TouchableOpacity>
    
                  <TouchableOpacity style={styles.converterButton}
                    onPress={() => { this.buttonPressed("EURO") }}
                  >
                    <Text style={styles.converterButtonText}> EURO </Text>
    
                  </TouchableOpacity>
    
                  <TouchableOpacity style={styles.converterButton}
                    onPress={() => { this.buttonPressed("AUSDOLLAR") }}
                  >
                    <Text style={styles.converterButtonText}> AUS </Text>
                  </TouchableOpacity>
    
    
    
                  <TouchableOpacity style={styles.converterButton}
                    onPress={() => { this.buttonPressed("POUND") }}
                  >
                    <Text style={styles.converterButtonText}> POUND </Text>
                  </TouchableOpacity>
    
                  <TouchableOpacity style={styles.converterButton}
                    onPress={() => { this.buttonPressed("YEN") }}
                  >
                    <Text style={styles.converterButtonText}> YEN </Text>
                  </TouchableOpacity>
    
                  <TouchableOpacity style={styles.converterButton}
                    onPress={() => { this.buttonPressed("DINAR") }}
                  >
                    <Text style={styles.converterButtonText}> DINAR </Text>
                  </TouchableOpacity>
    
                  <TouchableOpacity style={styles.converterButton}
                    onPress={() => { this.buttonPressed("RUBEL") }}
                  >
                    <Text style={styles.converterButtonText}> RUBEL </Text>
                  </TouchableOpacity>
                </View>
              </View>
    
            </SafeAreaView>
          </TouchableWithoutFeedback>
        );
      }
    
    
    }
    
    const currencyPerRupee = {
      DOLLAR: 0.14,
      EURO: 0.012,
      POUND: 0.011,
      RUBEL: 0.93,
      AUSDOLLAR: 0.2,
      YEN: 1.54,
      DINAR: 0.0043,
      BITCOIN: 0.0000041
    }
    
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#c1c1c1',
        // alignItems: 'center',
        // justifyContent: 'center',
      },
    
      screenView: {
        flex: 1
      },
    
      resultContaoner: {
        flex: 1,
        height: 70,
        marginTop: 20,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "white",
        backgroundColor: "#6A89CC"
    
      },
      resultValue: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
      },
      input: {
        fontSize: 30,
        color: "#FFF",
        padding: 10
      },
    
      inputContainer: {
        flex: 1,
        height: 78,
        marginTop: 20,
        borderColor: "white",
        backgroundColor: "#6A89CC",
    
      },
      converterButtonContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 20,
        borderColor: "white",
        borderWidth: 2
      },
      converterButton: {
        height: 100,
        // width: 33.3,
        padding: 10,
        margin: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#6ab04c",
        borderColor: "white",
        borderWidth: 2
    
      },
      converterButtonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
      }
    
    });