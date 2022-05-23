import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Logo from "../../assets/logo-topo.png";

import {
  Container,
  ImageView,
  Title,
  TextButton,
  ImputSenha,
  InputEmail,
  SalveButton,
  ViewForgot,
  TextForgot,
  ViewCadastrar,
  TextCadastrar,
} from "./styles";

const Login = () => {
  const navigation = useNavigation();

  const NavegarCadastrar = () => {
    navigation.navigate("Cadastro")
  }

  const NavegarRecuperarSenha = () => {
    navigation.navigate("RecuperarSenha")
  }

  const NavegarHome = () => {
    navigation.navigate("Home")
  }

  return (
    // <SafeAreaView>
    <Container>
      <ImageView>
        <Image source={Logo} resizeMode="contain" />
      </ImageView>

      <Title>Rede Social</Title>

      <InputEmail placeholder="E-mail" />
      <ImputSenha placeholder="Senha" secureTextEntry keyboardType="numeric" />

      <TouchableOpacity style={{width:'100%'}} onPress={NavegarRecuperarSenha}> 
      <ViewForgot>
        <TextForgot>Recuperar Senha</TextForgot>
      </ViewForgot>
      </TouchableOpacity>

      <SalveButton onPress={NavegarHome}>
        <TextButton>Entrar</TextButton>
      </SalveButton>

      <TouchableOpacity onPress={NavegarCadastrar}>
        <ViewCadastrar>
          <TextCadastrar>Não tem conta? Cadastrar!</TextCadastrar>
        </ViewCadastrar>
      </TouchableOpacity>
    </Container>
    // </SafeAreaView>
  );
};

export default Login;
