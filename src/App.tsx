import "react-native-gesture-handler";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import { NavigationContainer } from "@react-navigation/native";

import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import theme from "../src/styles/theme";

import Routes from "./routes";

export default function App() {
  const [fontLoading, error] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontLoading) {
    if (error) {
      console.log("erro ao carregar as fonter:" + error.message);
    }
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar style="dark" />
        <View style={{ flex: 1 }}>
          <Routes />
        </View>
      </NavigationContainer>
    </ThemeProvider>
  );
}
