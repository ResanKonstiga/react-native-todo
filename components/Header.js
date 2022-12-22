import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>ToDo List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 65,
    height: 100,
    backgroundColor: "silver",
  },
  text: {
    fontSize: 18,
    color: "red",
    textAlign: 'center',
  },
});
