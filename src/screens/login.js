import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  const styles = StyleSheet.create({
    headerBar: {
      backgroundColor: "#b6edd9",
      fontFamily: "Roboto_400Regular",
    },
    textInput: {
      height: 50,
      width: "80%",
      alignSelf: "center",
      borderBottomColor: "#e6e7e8",
      borderBottomWidth: 1,
      marginTop: 20,
      fontFamily: "Roboto_400Regular",
      color: "#575756",
      fontSize: 14,
    },
    button: {
      height: 50,
      width: "60%",
      alignSelf: "center",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10,
      borderRadius: 2,
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
      marginTop: 64,
    },
    spacingSocial: {
      marginTop: 70,
    },
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView>
      <View style={styles.spacing}>
        <TextInput
          placeholder="Nome de usuário"
          style={styles.textInput}
          value={username}
          textContentType="username"
          onChangeText={(input) => setUsername(input)}
        />
        <TextInput
          placeholder="Senha"
          style={styles.textInput}
          value={password}
          secureTextEntry={true}
          textContentType="password"
          onChangeText={(input) => setPassword(input)}
        />
      </View>
      <TouchableOpacity>
        <View style={styles.button} backgroundColor="#88c9bf">
          <Text style={styles.textButton}>ENTRAR</Text>
        </View>
      </TouchableOpacity>
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
  );
};

export default Login;
