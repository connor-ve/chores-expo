import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
// import AnotherScreen from "./pages/AnotherScreen";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false, // This hides the header globally for all screens
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="Other" component={AnotherScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
