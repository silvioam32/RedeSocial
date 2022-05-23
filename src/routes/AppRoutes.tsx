import { View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";
import RecuperarSenha from "../screens/RecuperarSenha";
import Home from "../screens/Home/Home";

const Stack = createStackNavigator()

const AppRoutes: React.FC = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShow: false,
            }}
        >
            <Stack.Screen name="Login" component={Login} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}} />
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default AppRoutes;
