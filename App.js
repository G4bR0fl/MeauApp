import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/home";
import profileRegister from "./src/screens/profileRegister";
import Icon from "react-native-vector-icons/FontAwesome";

const Stack = createStackNavigator();

export default function App() {
  const appBar = {
    headerTitle: () => {
      "Home";
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={appBar}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            headerStyle: {
              backgroundColor: "white",
            },
            headerLeft: () => (
              <Icon
                name="bars"
                size={24}
                style={{ padding: 16, color: "#88c9bf" }}
              />
            ),
          }}
        />
        <Stack.Screen name="profileRegister" component={profileRegister} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
