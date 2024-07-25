import { View, Text } from "react-native";
import React from "react";

export default function Wrapper() {
  return (
    <View>
      <Text>Wrapper</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
