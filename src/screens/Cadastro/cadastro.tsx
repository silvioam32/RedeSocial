import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Logo from "../../assets/logo-cadastro.png";

import {
  Container,
  ImageView,
  Title,
  TextButton,
  ImputSenha,
  InputEmail,
  SalveButton,
  ViewCadastrar,
  TextCadastrar,
  InputNome,
} from "./styles";

const Cadastro = () => {
  const navigation = useNavigation();

  const NavegarCadastrar = () => {
    navigation.navigate("Login")
  }

  return (
    // <SafeAreaView>
    <Container>
      <ImageView>
        <Image source={Logo} resizeMode="contain" />
      </ImageView>

      <Title>Cadastro</Title>

      <InputNome placeholder="Nome" />
      <InputEmail placeholder="E-mail" />
      <ImputSenha placeholder="Senha" secureTextEntry keyboardType="numeric" />

      <SalveButton>
        <TextButton>Cadastrar</TextButton>
      </SalveButton>

      <TouchableOpacity onPress={NavegarCadastrar}>
        <ViewCadastrar>
          <TextCadastrar>Já tenho conta? Voltar Login!</TextCadastrar>
        </ViewCadastrar>
      </TouchableOpacity>
    </Container>
    // </SafeAreaView>
  );
};

export default Cadastro;
