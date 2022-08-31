import AsyncStorage from "@react-native-async-storage/async-storage";

import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputBase,
  TouchableOpacity,
  View,
} from "react-native";
import ToDo from "./components/ToDo";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [toDoText, setTodoText] = useState("");
  const arr = Array(4).fill(0, Array(0));

  const addTodo = () => {
    if (toDoText.length !== 0) {
      setTodos((old) => [...old, toDoText]);
      setTodoText("");
      save();
    }
  };

  const save = async () => {
    try {
      await AsyncStorage.setItem("todos", JSON.stringify(todos ? todos : null));
    } catch (err) {
      console.log(err);
    }
  };

  const load = async () => {
    try {
      setTodos(JSON.parse(await AsyncStorage.getItem("todos")));
    } catch (err) {
      console.log(err);
    }
  };

  const deleteToDo = (index) => {
    const reducedArr = todos;
    reducedArr.splice(index, 1);
    setTodos((old) => [...old]);
    save();
  };
  useEffect(() => {
    load();
  }, []);

  return (
    <View style={styles.container}>
      {todos.map((td, index) => (
        <ToDo toDo={td} key={index} index={index} onDelete={deleteToDo} />
      ))}
      <View style={styles.subContainer}>
        <TouchableOpacity style={styles.add} onPress={addTodo}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={toDoText}
          placeholder={"enter to do"}
          onChangeText={(e) => setTodoText(e)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  subContainer: {
    backgroundColor: "rgba(60, 179, 113,0.2)}",
    flexDirection: "row",
    marginTop: 10,
    borderRadius: 5,
    padding: 5,
    margin: 2,
  },
  input: {
    flex: 7,
    padding: 10,
  },
  add: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    borderRadius: 15,
    padding: 5,
  },
  text: {
    fontSize: 20,
    color: "#ffffff",
  },
});
