import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Logo from "../../assets/logo-topo.png";

import {
  Container,
  ImageView,
  Title,
  TextButton,
  InputEmail,
  SalveButton,
  ViewCadastrar,
  TextCadastrar,
} from "./styles";

const RecuperarSenha = () => {
  const navigation = useNavigation();

  const NavegarLogin = () => {
    navigation.navigate("Login")
  }

  return (
    // <SafeAreaView>
    <Container>
      <ImageView>
        <Image source={Logo} resizeMode="contain" />
      </ImageView>

      <Title>Recuperar Senha</Title>

      <InputEmail placeholder="E-mail" />

      <SalveButton>
        <TextButton>Recuperar</TextButton>
      </SalveButton>

      <TouchableOpacity onPress={NavegarLogin}>
        <ViewCadastrar>
          <TextCadastrar>Voltar ao Login!</TextCadastrar>
        </ViewCadastrar>
      </TouchableOpacity>
    </Container>
    // </SafeAreaView>
  );
};

export default RecuperarSenha;
