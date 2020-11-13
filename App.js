import React from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
  },
  name: {
    color: 'navy',
    fontSize: 36
  }
});

const Greeting = (props) => {
  return (
    <View style={styles.center}>
      <Text style={styles.name}>Hello {props.name}!</Text>
    </View>
  );
};

const LotsOfGreetings = () => {
  return (
    <View style={[styles.center, { top: 50 }]}>
      <Greeting name="Rexxar" />
      <Greeting name="Jaina" />
      <Greeting name="Valeera" />
    </View>
  );
};

export default LotsOfGreetings;
