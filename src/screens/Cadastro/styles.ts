import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const ImageView = styled.View`
  margin: 50px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-family: ${({theme}) => theme.fonts.PoppinsBold};
`;

export const InputNome = styled.TextInput`
  width: 80%;
  height: 45px;
  border-width: 1px;
  border-color: lightgray;
  border-radius: 30px;
  padding-left: 15px;
`;

export const InputEmail= styled.TextInput`
  width: 80%;
  height: 45px;
  border-width: 1px;
  border-color: lightgray;
  border-radius: 30px;
  padding-left: 15px;
  margin-top: 10px;
`;

export const ImputSenha= styled.TextInput`
  width: 80%;
  height: 45px;
  border-width: 1px;
  border-color: lightgray;
  border-radius: 30px;
  padding-left: 15px;
  margin-top: 10px;
`;

export const SalveButton= styled.TouchableOpacity`
  width: 80%;
  height: 45px;
  background-color: ${({theme}) => theme.colors.BUTTON};
  align-items:center;
  justify-content: center;
  border-radius: 30px;
  margin-bottom: 50px;
  margin-top: 50px;
`;

export const TextButton= styled.Text`
  color: ${({theme}) => theme.colors.BACKGROUND};
  font-size: 18px;
`;

export const ViewCadastrar = styled.View``;

export const TextCadastrar = styled.Text`
  font-size: 17px;
  font-family: ${({theme}) => theme.fonts.PoppinsBold};
`;
