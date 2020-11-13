import React from "react";
import { Text, View } from "react-native";

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 21,
        }}
      >Hello, world!</Text>
    </View>
  );
};
export default HelloWorldApp;
