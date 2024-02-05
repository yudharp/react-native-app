import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Yudha Ananda</Text>
      <Text style={styles.text}>Mila - Nisa</Text>
      <Text style={styles.text}>Ara - Tyas</Text>
      <Text style={styles.text}>Aul - Claryta</Text>
      <Text style={styles.text}>MW - Arva</Text>

      <View style={styles.separator} />

      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  separator: {
    height: 20,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: "pink",
    marginVertical: 10,
  },
});

export default MyComponent;
