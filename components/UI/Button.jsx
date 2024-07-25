import React from "react";
import { Text, StyleSheet, Platform, Pressable } from "react-native";

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
    backgroundColor: "#7a12ff",
  },
  secondary: {
    borderWidth: "1px",
    borderColor: "#5819b3",
  },
  text: {
    color: Platform.OS === "ios" ? "#FFFFFF" : "#000000",
    fontWeight: "bold",
    fontSize: 16,
  },
  secondaryText: {
    color: "#5819b3",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Button;
