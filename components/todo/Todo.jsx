import React, { useEffect, useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { BASE_STYLES, SORT_TYPE } from "../../utils/constants";
import { AddIcon } from "../../assets/appIcons/icon-collection";
import Button from "../UI/Button";
import AppModal from "../UI/Modal";
import TodoForm from "./TodoForm";
import { genereteId } from "../../utils";
import useStore from "../../store";
import TodoList from "./TodoList";

function Todo() {
  const [addTodoModal, setAddTodoModal] = useState(false);
  const {
    todos,
    addTodo,
    toggleCompleteTodo,
    updateTodo,
    deleteTodo,
    removeAllTodos,
  } = useStore();
  const [sortedTodos, setSotredTodos] = useState(todos);

  const sorteTodosByType = (type) => {
    if (type === SORT_TYPE.COMPLETED) {
      return todos.filter((todos) => !todos.completed);
    }
    if (type === SORT_TYPE.NOT_COMPLETED) {
      return todos.filter((todos) => todos.completed);
    }
    if (type === SORT_TYPE.SHOW_ALL) {
      return [...todos];
    }
    return [];
  };

  const sortTodos = (type) => {
    const updatedTodos = sorteTodosByType(type);
    setSotredTodos(updatedTodos);
  };

  const addModalHandler = () => {
    setAddTodoModal((prevState) => !prevState);
  };

  const addTodoHandler = (newTodo) => {
    const todoWithId = { ...newTodo, id: genereteId() };
    addTodo(todoWithId);
    addModalHandler();
  };

  useEffect(() => {
    setSotredTodos(todos);
  }, [todos]);

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
          todos={sortedTodos}
          toggleCompleteTodo={toggleCompleteTodo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          onSort={sortTodos}
          removeAllTodos={removeAllTodos}
          isHasTodos={Boolean(todos.length)}
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
    zIndex: 1000,
  },
});
