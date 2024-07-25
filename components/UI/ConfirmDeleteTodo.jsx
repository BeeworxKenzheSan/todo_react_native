import { View, Text, StyleSheet } from "react-native";
import Button from "./Button";

const ConfirmDeleteTodo = ({ title, onConfirm, onCancel }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Are you sure you want to remove
        <Text style={styles.removingTextStyles}> {title}</Text>?
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Cancel" variant="secondary" onPress={onCancel} />
        <Button title="Delete" variant="primary" onPress={onConfirm} />
      </View>
    </View>
  );
};

export default ConfirmDeleteTodo;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    margin: 10,
  },
  removingTextStyles: {
    color: "red",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
  },
});
