import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}><ImageBackground style={styles.aseHMIAt} source={require("./Dragon3.jpg")} resizeMode="cover"></ImageBackground><Text style={styles.yxQEQInv}>Lorem ipsum…</Text></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  aseHMIAt: {
    width: 194,
    height: 132,
    position: "absolute",
    left: 66,
    top: 53
  },
  yxQEQInv: {
    width: 208,
    height: 129,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 54,
    top: 237
  }
});
export default Untitled2;