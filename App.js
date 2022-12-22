import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

import Header from "./components/Header";
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

  return (
    <View>
      <Header />
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
