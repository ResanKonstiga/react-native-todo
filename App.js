import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, FlatList, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Header from "./components/Header";
import Form from "./components/Form";
import TaskList from "./components/TaskList";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [input, setInput] = useState("");

  const onChange = (input) => {
    setInput(input);
  };
  const addHandler = (input) => {
    setInput('');
    setTaskList((list) => {
      return [
        { text: input, key: Math.random().toString(36).substring(7) },
        ...list,
      ];
    });
  };

  const deleteHandler = (key) => {
    Alert.alert("Complete task", "Are you sure?", [
      {
        text: "Yes",
        onPress: () =>
          setTaskList((list) => {
            return list.filter((taskList) => taskList.key !== key);
          }),
      },
      { text: "Cancel" },
    ]);
  };

  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={styles.button}
    >
      <SafeAreaView style={styles.home}>
        <Header />
        <Form addHandler={addHandler} onChange={onChange} input={input} />
        <View>
          <FlatList
            data={taskList}
            renderItem={({ item }) => (
              <TaskList el={item} deleteHandler={deleteHandler} />
            )}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  home: {
    height: "100%",
  },
});
