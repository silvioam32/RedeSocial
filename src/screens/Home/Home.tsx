import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Container } from "./styles";

const Home = () => {
  const navigation = useNavigation()

  const Logout = ( ) => {
    navigation.navigate("Login")
  }

  return (
    <Container>
      <Text>Home</Text>
      <TouchableOpacity onPress={Logout}>
        <Text style={{color: "blue",marginTop:10}}> Logout </Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Home;
