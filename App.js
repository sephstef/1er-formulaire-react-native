import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import * as eva from '@eva-design/eva';
// import { ApplicationProvider } from '@ui-kitten/components';
import HomeScreen from "./screen/HomeScreen";
import LoginScreen from "./screen/LoginScreen";
import PersonalDataScreen from "./screen/PersonalDataScreen";
import SignInScreen from "./screen/SignInScreen";
import ValidationScreen from "./screen/ValidationScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#c8371a" },
          }}
        >
          <Stack.Screen
            name="Home"
            options={{ title: "Accueil" }}
            component={HomeScreen}
          />
          <Stack.Screen
            name="Login"
            options={{ title: "Connexion" }}
            component={LoginScreen}
          />
          <Stack.Screen
            name="SignIn"
            options={{ title: "Inscription" }}
            component={SignInScreen}
          />
          <Stack.Screen
            name="PersonalData"
            options={{ title: "Informations personnelles" }}
            component={PersonalDataScreen}
          />
          <Stack.Screen
            name="Validation"
            options={{ title: "Opération réussie" }}
            component={ValidationScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      // </ApplicationProvider>
  );
}
