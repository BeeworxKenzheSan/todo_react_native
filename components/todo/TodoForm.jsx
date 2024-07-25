import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Checkbox from "../UI/Checkbox";
import { BASE_STYLES } from "../../utils/constants";

function TodoForm({ onClose, buttonText = "Add Task", onConfirm, data }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const titleChangeHandler = (enteredValue) => {
    setTitle(enteredValue);
  };
  const descriptionChangeHandler = (enteredValue) => {
    setDescription(enteredValue);
  };

  const switcherHandler = (checked) => {
    setIsCompleted(checked);
  };

  function onSubmit() {
    const newTodo = {
      title: title,
      description: description,
      completed: isCompleted,
      id: id,
    };
    onConfirm(newTodo);
  }

  const isEmtyFields = () => {
    if (title.trim().length && description.trim().length) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (data && data?.id && data?.title) {
      setId(data.id);
      setDescription(data.description);
      setIsCompleted(data.completed);
      setTitle(data.title);
    }
  }, [data]);

  return (
    <View style={styles.formContainer}>
      <View>
        <View style={styles.formInputContainer}>
          <Text style={styles.label}>Title</Text>
          <Input
            value={title}
            onChangeText={titleChangeHandler}
            placeholder="Enter the title"
          />
        </View>
        <View style={styles.formInputContainer}>
          <Text style={styles.label}>Description</Text>
          <Input
            value={description}
            onChangeText={descriptionChangeHandler}
            placeholder="Enter the description"
            multiline={true}
          />
        </View>
        <View style={styles.formInputContainer}>
          <Checkbox
            value={isCompleted}
            onValueChange={switcherHandler}
            label="Status"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button variant="secondary" title="Cancel" onPress={onClose} />
          <Button
            variant="primary"
            title={buttonText}
            onPress={onSubmit}
            disabled={!isEmtyFields()}
          />
        </View>
      </View>
    </View>
  );
}

export default TodoForm;

const styles = StyleSheet.create({
  formContainer: {
    width: 300,
    maxWidth: 350,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
  },
  formInputContainer: {
    marginBottom: 8,
  },
  label: {
    color: BASE_STYLES.DEEP_INDIGO,
    marginBottom: 8,
  },
});
