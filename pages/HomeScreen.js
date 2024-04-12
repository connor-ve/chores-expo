// Example of a simple HomeScreen.js
import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Other Screen"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

export default HomeScreen;
