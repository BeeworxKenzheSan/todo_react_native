import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AppModal from "../UI/Modal";
import TodoForm from "./TodoForm";
import ConfirmDeleteTodo from "../UI/ConfirmDeleteTodo";

function TodoList({ todos, updateTodo, toggleCompleteTodo, deleteTodo }) {
  const [editTodoModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [edititingTodo, setEditignTodo] = useState(false);

  const editModalHandler = (editingTodo) => {
    if (editingTodo) {
      setEditignTodo(editingTodo);
    }
    setEditModal((prevState) => !prevState);
  };

  const deleteModalHandler = (deletingTodo) => {
    if (deletingTodo) {
      setEditignTodo(deletingTodo);
    }
    setDeleteModal((prevState) => !prevState);
  };

  const editTodo = (todo) => {
    const { id, ...rest } = todo;
    updateTodo(id, rest);
    editModalHandler();
  };

  const onDelete = () => {
    deleteTodo(edititingTodo.id);
    deleteModalHandler();
  };

  const renderElements = !todos.length ? (
    <Text style={styles.emptyText}>The list is empty</Text>
  ) : (
    <View></View>
  );

  return (
    <View style={styles.container}>
      <AppModal isVisible={editTodoModal} onClose={editModalHandler}>
        <TodoForm
          onClose={editModalHandler}
          onConfirm={editTodo}
          data={edititingTodo}
          buttonText="Save"
        />
      </AppModal>
      <AppModal isVisible={deleteModal} onClose={deleteModalHandler}>
        <ConfirmDeleteTodo
          title={edititingTodo.title}
          onCancel={deleteModalHandler}
          onConfirm={onDelete}
        />
      </AppModal>
      <View style={styles.emptyContainer}>{renderElements}</View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem
            item={item}
            onComplete={toggleCompleteTodo}
            onEdit={editModalHandler}
            onDelete={deleteModalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 400,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 18,
    color: "#999",
  },
});

export default TodoList;
