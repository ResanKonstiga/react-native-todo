import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

import Header from "./components/Header";
import Form from "./components/Form";
import TaskList from "./components/TaskList";

export default function App() {
  const [taskList, setTaskList] = useState([
    {
      text: "Купить молоко",
      index: 1,
    },
    {
      text: "Купить молоко",
      index: 2,
    },
    {
      text: "Купить молоко",
      index: 3,
    },
    {
      text: "Купить молоко",
      index: 4,
    },
  ]);

  const addHandler = (input) => {
    setTaskList((list) => {
      return [{ text: input, index: 5 }, ...list];
    });
  };

  return (
    <View>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList
          data={taskList}
          renderItem={({ item }) => <TaskList el={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
