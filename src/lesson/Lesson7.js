/**
 * 
 * Sample app to for dice roller
 * 
 */


import React from 'react';
import { Text,  View, Alert , TouchableOpacity } from 'react-native';



export default class Lesson6 extends React.Component {


    constructor() {
        super();
    
        this.state = {
          uri : require("./src/DiceAssets/dice1.png")
        }
      }
    
    
      getRandomValue = () => {
        return Math.floor((Math.random() * 6)) + 1;
      }
    
      playButtonPressed = () => {
    
        var rNum = this.getRandomValue();
    
        switch(rNum) {
          case 1:
          this.setState({uri : 
            require("./src/DiceAssets/dice1.png")
          });
          break;
    
          case 2:
          this.setState({uri : 
            require("./src/DiceAssets/dice2.png")
          });
          break;
    
          case 3:
          this.setState({uri : 
            require("./src/DiceAssets/dice3.png")
          });
          break;
    
          case 4:
          this.setState({uri : 
            require("./src/DiceAssets/dice4.png")
          });
          break;
    
          case 5:
          this.setState({uri : 
            require("./src/DiceAssets/dice5.png")
          });
          break;
    
          case 6:
          this.setState({ uri : 
            require("./src/DiceAssets/dice6.png")
          });
          break;
    
          default:
    
          this.setState({uri : 
            require("./src/DiceAssets/dice1.png")
          });
          break;
    
        }
      };
    
      render() {
        return (
          <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#c1c1c1",
            padding: 10,
            marginTop: 50
    
          }}>
    
            <Image source={
              this.state.uri
            }
            />
    
            <TouchableOpacity
            onPress = {this.playButtonPressed}
            >
              <Text
                style={styles.gameButtom}
              > Play Me</Text>
            </TouchableOpacity>
          </View>
        );
      }
    }
    
    
    const styles = StyleSheet.create({
      gameButtom: {
        marginTop: 10,
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 40,
        borderRadius: 5,
        borderColor: "white"
      }
    
    });
    
    
    