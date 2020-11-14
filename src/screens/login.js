import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity, View
} from "react-native";
import { Button, Provider as PaperProvider, TextInput } from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome";
import { ThemeProvider } from 'styled-components';
import { Api } from "../../backend/firebase/api";
import AuthContext from "../components/auth/auth.context";
import AppLogo from '../components/Logo';
import { theme } from '../components/theme';

function Login({ navigation }) {

  const auth = React.useContext(AuthContext);

  onPress = () => {
    Api.Auth.signInWithEmail({
      email: username,
      password: password
    })
  };

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <PaperProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <SafeAreaView style={styles.container}>
          <AppLogo />
          <View style={styles.spacing}>
            <TextInput
              style={styles.textInput}
              label="Nome de usuário"
              value={username}
              textContentType="username"
              onChangeText={(input) => setUsername(input)}
            />
            <TextInput
              style={styles.textInput}
              label="Senha"
              value={password}
              secureTextEntry={true}
              textContentType="password"
              onChangeText={(input) => setPassword(input)}
            />
          </View>
          <Button style={styles.button2} mode="contained" onPress={onPress}>
            Entrar
          </Button>
          <TouchableOpacity style={styles.spacingSocial}>
            <View style={styles.button} backgroundColor="#194f7c">
              <Icon name="facebook-square" color="white">
                <Text style={styles.textButtonSocial}> ENTRAR COM FACEBOOK</Text>
              </Icon>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button} backgroundColor="#f15f5c">
              <Icon name="google-plus" color="white">
                <Text style={styles.textButtonSocial}> ENTRAR COM GOOGLE</Text>
              </Icon>
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      </ThemeProvider>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingLeft: 50,
    paddingRight: 50,
  },
  textInput: {
    borderBottomWidth: 1,
    marginBottom: 20
  },
  button: {
    height: 50,
    width: "80%",
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 2,
  },
  button2: {
    height: 50,
    width: "80%",
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  textButton: {
    alignContent: "center",
    alignSelf: "center",
    fontFamily: "Roboto_400Regular",
  },
  textButtonSocial: {
    alignContent: "center",
    alignSelf: "center",
    fontFamily: "Roboto_400Regular",
    color: "#f7f7f7",
  },
  spacing: {
    marginBottom: 50,
    marginTop: 50,
  },
  spacingSocial: {
    marginTop: 70,
  },
});

export default Login;
