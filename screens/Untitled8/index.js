import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled8 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.SlXVECWb} source={require("./Dragon3.jpg")} resizeMode="repeat"></ImageBackground><ImageBackground style={styles.DzGyCltd} source={require("./Dragon3.jpg")} resizeMode="stretch"></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  SlXVECWb: {
    width: 165,
    height: 109,
    position: "absolute",
    left: 68,
    top: 53
  },
  DzGyCltd: {
    width: 230,
    height: 237,
    position: "absolute",
    left: 82,
    top: 245
  }
});
export default Untitled8;