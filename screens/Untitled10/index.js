import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled10 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.oQVlSeoO} source={require("./dragon4.jpg")} resizeMode="cover"></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  oQVlSeoO: {
    width: 183,
    height: 198,
    position: "absolute",
    left: 83,
    top: 186
  }
});
export default Untitled10;