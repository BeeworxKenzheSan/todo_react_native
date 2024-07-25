import React from "react";
import { Text, StyleSheet, Platform, Pressable } from "react-native";
import { BASE_STYLES } from "../../utils/constants";

const Button = ({
  onPress,
  title,
  variant = "primary",
  style,
  icon,
  disabled,
  size = "base",
  ...props
}) => {
  const buttonStyles = [
    styles.base,
    variant === "primary" ? styles.primary : styles.secondary,
    style,
    disabled && styles.disabled,
    size === "base" ? styles.baseSize : styles.medium,
  ];
  const textStyles = variant !== "primary" ? styles.secondaryText : styles.text;

  return (
    <Pressable
      onPress={!disabled ? onPress : null}
      style={({ pressed }) => [
        ...buttonStyles,
        {
          opacity: pressed || disabled ? 0.5 : 1,
        },
      ]}
      {...props}
    >
      {icon ? icon : <Text style={textStyles}>{title}</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
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
    backgroundColor: BASE_STYLES.PURE_WHITE,
    borderColor: BASE_STYLES.VIBRANT_PURPLE,
    borderWidth: 1,
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
  disabled: {
    backgroundColor: BASE_STYLES.LIGHT_NEUTRAL_PURPLE,
  },
  baseSize: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  medium: {
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
});

export default Button;
