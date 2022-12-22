import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function Header() {
  return (
    <View style={styles.main}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Text style={styles.text}>ToDo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 25,
    height: 100,
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
  },
  text: {
    marginTop: 10,
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});
