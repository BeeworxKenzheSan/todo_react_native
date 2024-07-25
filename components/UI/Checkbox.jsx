import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { BASE_STYLES } from "../../utils/constants";

const Checkbox = ({ label, value = false, onValueChange, style = {} }) => {
  const [isChecked, setIsChecked] = useState(value);

  const handleValueChange = (newValue) => {
    setIsChecked(newValue);
    onValueChange(newValue);
  };
  useEffect(() => {
    setIsChecked(value);
  }, [value]);

  return (
    <View style={[styles.container, style]}>
      <Switch
        value={isChecked}
        onValueChange={handleValueChange}
        thumbColor={
          isChecked
            ? BASE_STYLES.VIBRANT_PURPLE
            : BASE_STYLES.LIGHT_NEUTRAL_GRAY
        }
        trackColor={{
          false: BASE_STYLES.LIGHT_NEUTRAL_GRAY,
          true: BASE_STYLES.LIGHT_NEUTRAL_PURPLE,
        }}
      />
      {label ? <Text style={styles.label}>{label}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  label: {
    marginLeft: 12,
    fontSize: 16,
    color: BASE_STYLES.DEEP_INDIGO,
  },
});

export default Checkbox;
