import React, { useState } from "react";
import { TextInput, StyleSheet, Platform, SafeAreaView } from "react-native";
import { BASE_STYLES } from "../../utils/constants";

const Input = ({ style, value, onChangeText, error, multiline, ...props }) => {
  const [isActive, setActive] = useState(false);

  const activeInputBorders = {
    borderColor: !isActive
      ? BASE_STYLES.LIGHT_NEUTRAL_GRAY
      : BASE_STYLES.DEEP_INDIGO,
  };

  const errorStyles = error && styles.errorStyles;

  return (
    <SafeAreaView style={[styles.inputContainer, style]}>
      <TextInput
        style={[
          styles.input,
          Platform.OS === "ios" ? styles.iosInput : styles.androidInput,
          activeInputBorders,
          errorStyles,
        ]}
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        {...props}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: BASE_STYLES.LIGHT_NEUTRAL_GRAY,
    width: "100%",
    borderRadius: 8,
  },
  input: {
    height: 48,
    fontSize: 16,
    color: BASE_STYLES.ABSOLUTE_BLACK,
    borderRadius: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
  },
  iosInput: {
    fontFamily: "System",
  },
  androidInput: {
    fontFamily: "sans-serif",
  },
  errorStyles: {
    borderColor: "red",
  },
});

export default Input;
