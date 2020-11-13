import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';
import { Api } from '../../backend/firebase/api';
import AuthContext from '../firebase/auth.context';
import AtalhosStack from '../routes/AtalhosStack';
import Login from './login';
import PetAdoption from './petAdoption';
import PetRegister from './petRegister/petRegister';

export default function Home({ navigation }) {
  const auth = React.useContext(AuthContext)
  function send() {
    const token = auth.profile.deviceToken
    console.log(token)
    const data = {
    }
    Api.Database.Profile.sendNotification({ token, data })
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    button: {
      height: 50,
      width: '60%',
      alignSelf: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      borderRadius: 2,
    },
    textButton: {
      alignContent: 'center',
      alignSelf: 'center',
      fontSize: 12,
      color: '#434343',
    },
    viewWelcome: {
      alignItems: 'center',
      textAlignVertical: 'center',
      textAlign: 'center',
      marginLeft: 70,
      marginRight: 70,
      marginBottom: 48,
    },
    viewOla: {
      alignItems: 'center',
      textAlignVertical: 'center',
      textAlign: 'center',
      marginTop: 56,
      marginBottom: 52,
    },
    textOla: {
      fontFamily: 'Courgette_400Regular',
      fontSize: 72,
      color: '#ffd358',
    },
    textWelcome: {
      fontSize: 16,
      color: '#757575',
    },
    clickButtons: {
      marginBottom: 44,
    },
    logo: {
      width: 122,
      height: 44,
      alignSelf: 'center',
      marginTop: 68,
    },
    loginLink: {
      alignSelf: 'center',
      fontSize: 16,
      color: '#88c9bf',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.viewOla}>
        <Text style={styles.textOla}>Olá!</Text>
      </View>
      <View style={styles.viewWelcome}>
        <Text style={styles.textWelcome}>Bem-vindo ao Meau!</Text>
        <Text style={{ textAlign: 'center', fontSize: 16, color: '#757575' }}>
          Aqui você pode adotar, doar e ajudar cães e gatos com facilidade.
        </Text>
        <Text style={styles.textWelcome}>Qual o seu interesse?</Text>
      </View>
      <Button onPress={send}>
        Notification
      </Button>
      <View style={styles.clickButtons}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(AtalhosStack.name, { screen: PetAdoption.name });
          }}
        >
          <View style={styles.button} backgroundColor="#ffd358">
            <Text
              style={styles.textButton}
            >
              ADOTAR
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.button} backgroundColor="#ffd358">
            <Text style={styles.textButton}>AJUDAR</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(AtalhosStack.name, { screen: PetRegister.name });
          }}
        >
          <View style={styles.button} backgroundColor="#ffd358">
            <Text style={styles.textButton}>CADASTRAR ANIMAL</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text
        style={styles.loginLink}
        onPress={() => {
          navigation.navigate(Login.name);
        }}
      >
        login
      </Text>
      <Image
        style={styles.logo}
        source={require('../../assets/logo/meau_logo.png')}
      />
    </View>
  );
}
