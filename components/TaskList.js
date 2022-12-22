import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function TaskList({ el, deleteHandler }) {
  return (
    <TouchableOpacity onPress={() => deleteHandler(el.key)}>
      <Text style={styles.text}>{el.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
    justifyContent: "center",
    padding: 20,
    textAlign: "left",
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 10,
    width: "80%",
    marginLeft: "10%",
  },
});
