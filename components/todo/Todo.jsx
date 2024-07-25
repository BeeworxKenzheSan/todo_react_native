import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { BASE_STYLES } from "../../utils/constants";
import { AddIcon } from "../../assets/appIcons/icon-collection";
import Button from "../UI/Button";
import AppModal from "../UI/Modal";
import TodoForm from "./TodoForm";
import { genereteId } from "../../utils";
import useStore from "../../store";
import TodoList from "./TodoList";

function Todo() {
  const [addTodoModal, setAddTodoModal] = useState(false);
  const { todos, addTodo, toggleCompleteTodo, updateTodo, deleteTodo } =
    useStore();

  const addModalHandler = () => {
    setAddTodoModal((prevState) => !prevState);
  };

  const addTodoHandler = (newTodo) => {
    const todoWithId = { ...newTodo, id: genereteId() };
    addTodo(todoWithId);
    addModalHandler();
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <AppModal isVisible={addTodoModal} onClose={addModalHandler}>
        <TodoForm onClose={addModalHandler} onConfirm={addTodoHandler} />
      </AppModal>
      <View style={styles.container}>
        <Button
          onPress={addModalHandler}
          style={styles.fixedButton}
          icon={<AddIcon />}
        />
        <TodoList
          todos={todos}
          toggleCompleteTodo={toggleCompleteTodo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      </View>
    </SafeAreaView>
  );
}

export default Todo;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: BASE_STYLES.LIGHT_NEUTRAL_PURPLE,
    justifyContent: "center",
    alignItems: "center",
  },
  fixedButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    alignSelf: "center",
  },
});
