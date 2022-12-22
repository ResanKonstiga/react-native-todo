import React, { useState } from "react";
import { StyleSheet, TextInput, Pressable, Text, View } from "react-native";

export default function Form({ addHandler, onChange, input }) {
  return (
    <View>
      <TextInput
        value={input}
        style={styles.input}
        onChangeText={onChange}
        placeholder="Enter your task..."
        placeholderTextColor="silver"
        clearButtonMode="always"
      />

      <Pressable
        style={styles.button}
        onPress={() => {
          addHandler(input);
        }}
      >
        <Text style={styles.text}>Add</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    color: "white",
    fontSize: 25,
    borderBottomWidth: 1,
    borderColor: "#000",
    padding: 5,
    marginBottom: 25,
    marginHorizontal: "10%",
    width: "80%",
  },
  button: {
    width: "50%",
    marginHorizontal: "25%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginBottom: 20,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: "#538de2",
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
