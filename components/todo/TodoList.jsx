import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AppModal from "../UI/Modal";
import TodoForm from "./TodoForm";
import ConfirmDeleteTodo from "../UI/ConfirmDeleteTodo";
import Button from "../UI/Button";
import {
  DeleteIcon,
  DoneIcon,
  NotDonedIcon,
  RefreshIcon,
} from "../../assets/appIcons/icon-collection";
import { SORT_TYPE } from "../../utils/constants";

function TodoList({
  todos,
  updateTodo,
  toggleCompleteTodo,
  deleteTodo,
  onSort,
}) {
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
    <View style={styles.actionButtonsStyles}>
      <Button variant="secondary" size="small" icon={<DeleteIcon />} />
      <Button
        variant="secondary"
        size="small"
        icon={<DoneIcon />}
        onPress={() => onSort(SORT_TYPE.COMPLETED)}
      />
      <Button
        variant="secondary"
        size="small"
        icon={<NotDonedIcon />}
        onPress={() => onSort(SORT_TYPE.NOT_COMPLETED)}
      />
      <Button
        variant="secondary"
        size="small"
        icon={<RefreshIcon />}
        onPress={() => onSort(SORT_TYPE.SHOW_ALL)}
      />
    </View>
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
      <View style={styles.todoWrapper}>
        <View style={styles.emptyContainer}>{renderElements}</View>
        <View style={styles.renderingItems}>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 18,
    color: "white",
  },
  todoWrapper: {
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    width: "100%",
    maxWidth: 400,
    marginHorizontal: 16,
    flex: 1,
  },
  actionButtonsStyles: {
    flexDirection: "row",
    position: "absolute",
    top: 20,
    gap: 15,
    zIndex: 100,
  },
  completedTasks: {
    color: "white",
  },
  renderingItems: {
    maxHeight: 700,
  },
});

export default TodoList;
