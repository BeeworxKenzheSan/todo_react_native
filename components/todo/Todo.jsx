import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { BASE_STYLES } from "../../utils/constants";
import { AddIcon } from "../../assets/appIcons/icon-collection";
import Button from "../UI/Button";
import AppModal from "../UI/Modal";
import TodoForm from "./TodoForm";

function Todo() {
  const [addTodoModal, setAddTodoModal] = useState(true);

  const addModalHandler = () => {
    setAddTodoModal((prevState) => !prevState);
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <AppModal isVisible={addTodoModal} onClose={addModalHandler}>
        <TodoForm onClose={addModalHandler} />
      </AppModal>
      <View style={styles.container}>
        <Button
          onPress={addModalHandler}
          style={styles.fixedButton}
          icon={<AddIcon />}
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
