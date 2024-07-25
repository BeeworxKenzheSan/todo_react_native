import React from "react";
import { Text, StyleSheet, Platform, Pressable } from "react-native";
import { BASE_STYLES } from "../../utils/constants";

const Button = ({ onPress, title, variant = "primary", style, ...props }) => {
  const buttonStyles = [
    styles.base,
    variant === "primary" ? styles.primary : styles.secondary,
    style,
  ];
  const textStyles = variant !== "primary" ? styles.secondaryText : styles.text;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        ...buttonStyles,
        {
          opacity: pressed ? 0.5 : 1,
        },
      ]}
      {...props}
    >
      <Text style={textStyles}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: Platform.OS === "android" ? 4 : 0,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  primary: {
    backgroundColor: BASE_STYLES.VIBRANT_PURPLE,
  },
  secondary: {
    borderWidth: "1px",
    borderColor: BASE_STYLES.DEEP_INDIGO,
  },
  text: {
    color:
      Platform.OS === "ios" ? BASE_STYLES.PURE_WHITE : BASE_STYLES.PURE_WHITE,
    fontWeight: "bold",
    fontSize: 16,
  },
  secondaryText: {
    color: BASE_STYLES.VIBRANT_PURPLE,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Button;
