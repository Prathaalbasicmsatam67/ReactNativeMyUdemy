import React from 'react';

import { Image, Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { Audio } from 'expo-av';

const listBackGroundColors = {
  1: "#26ae60",
  2: "#25CCF7",
  3: "#6A89CC",
  4: "#badc57",
  5: "#A3CB37",
  6: "#53E0BC",
  7: "#F4C724",
  8: "#01CBC6",
  9: "#8395A7",
  10: "#EA7773",
}

const soundList = {
  one: require("./src/SpanishAssets/one.wav"),
  two: require("./src/SpanishAssets/two.wav"),
  three: require("./src/SpanishAssets/three.wav"),
  four: require("./src/SpanishAssets/four.wav"),
  five: require("./src/SpanishAssets/five.wav"),
  six: require("./src/SpanishAssets/six.wav"),
  seven: require("./src/SpanishAssets/seven.wav"),
  eight: require("./src/SpanishAssets/eight.wav"),
  nine: require("./src/SpanishAssets/nine.wav"),
  ten: require("./src/SpanishAssets/ten.wav"),

}

export default class SpanishSoundApp extends React.Component {

  // Function to play sound
  playSound = async number => {
    const soundObject = new Audio.Sound();

    try {
      let path = soundList[number]
      await soundObject.loadAsync(path)

      await soundObject.playAsync()
        .then(async playbackStatus => {
          setTimeout(() => {
            soundObject.unloadAsync();
          }, playbackStatus.playableDurationMillis);
        }).catch(error => {
          console.log(error)
        })
    }
    catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.gridContainer}>
          <Image
            style={styles.logo}
            source={require("./src/SpanishAssets/logo.png")} />

          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[{ backgroundColor: listBackGroundColors[1] }, styles.item]}
              onPress={() => { this.playSound("one") }}
            >
              <Text style={styles.itemText}>One</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[{ backgroundColor: listBackGroundColors[2] }, styles.item]}
              onPress={() => { this.playSound("two") }}
            >
              <Text style={styles.itemText}>Two</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[{ backgroundColor: listBackGroundColors[3] }, styles.item]}
              onPress={() => { this.playSound("three") }}
            >
              <Text style={styles.itemText}>Three</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[{ backgroundColor: listBackGroundColors[4] }, styles.item]}
              onPress={() => { this.playSound("four") }}
            >
              <Text style={styles.itemText}>Four</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[{ backgroundColor: listBackGroundColors[5] }, styles.item]}
              onPress={() => { this.playSound("five") }}
            >
              <Text style={styles.itemText}>Five</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[{ backgroundColor: listBackGroundColors[6] }, styles.item]}
              onPress={() => { this.playSound("six") }}
            >
              <Text style={styles.itemText}>Six</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[{ backgroundColor: listBackGroundColors[7] }, styles.item]}
              onPress={() => { this.playSound("seven") }}
            >
              <Text style={styles.itemText}>Seven</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[{ backgroundColor: listBackGroundColors[8] }, styles.item]}
              onPress={() => { this.playSound("eight") }}
            >
              <Text style={styles.itemText}>Eight</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[{ backgroundColor: listBackGroundColors[9] }, styles.item]}
              onPress={() => { this.playSound("nine") }}
            >
              <Text style={styles.itemText}>Nine</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[{ backgroundColor: listBackGroundColors[10] }, styles.item]}
              onPress={() => { this.playSound("ten") }}
            >
              <Text style={styles.itemText}>Ten</Text>
            </TouchableOpacity>
          </View>


        </View>

      </ScrollView>)
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
  },
  gridContainer: {
    flex: 1,
    margin: 5,

  },
  logo: {
    alignSelf: "center",
    marginTop: 25
  },
  rowContainer: {
    flexDirection: "row"
  },
  item: {
    flex: 1,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    margin: 2
  },
  itemText: {
    color: "#FFF",
    fontSize: 20,
  }
})