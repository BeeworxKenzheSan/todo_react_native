import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Checkbox from "../UI/Checkbox";
import Button from "../UI/Button";
import { EditIcon, XmarkIcon } from "../../assets/appIcons/icon-collection";

const TodoItem = ({ item, onEdit, onDelete, onComplete }) => {
  const toggleHandler = () => {
    onComplete(item.id);
  };

  const onEditHandler = (editingTodo) => {
    onEdit(editingTodo);
  };

  const onDeleteHanlder = (deletingItem) => {
    onDelete(deletingItem);
  };
  return (
    <View
      style={[
        styles.taskContainer,
        item.completed && styles.completedTaskContiner,
      ]}
    >
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
        {item.title}
      </Text>
      <View style={styles.buttonContainer}>
        <Checkbox value={item.completed} onValueChange={toggleHandler} />
        <Button
          size="small"
          variant="secondary"
          icon={<XmarkIcon />}
          onPress={() => onDeleteHanlder(item)}
        />
        <Button
          size="small"
          variant="secondary"
          icon={<EditIcon />}
          onPress={() => onEditHandler(item)}
        />
      </View>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  taskContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  completedTaskContiner: {
    backgroundColor: "#baa5a5",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    flexShrink: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
