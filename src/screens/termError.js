import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const Stack = createStackNavigator();

export default function termError({ navigation }) {

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#589b9b" />
      <Text style={styles.errorText}>Pronto!</Text>
      <Text style={styles.bodyText}>
        O termo já foi enviado para o seu email. Caso não tenha recebido,
        verifique se o seu email está cadastrado corretamente na área " meu
        perfil", no menu principal.
      </Text>
      <Text style={styles.bodyText}>
        Para entender um pouco mais sobre as leis que envolvem esse processo,
        acesse nossa área de legislação
      </Text>
      <TouchableOpacity>
        <View style={styles.registerButton}>
          <Text style={{ color: '#434343' }}>LEGISLAÇÃO</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  errorText: {
    fontFamily: 'Courgette_400Regular',
    color: '#88c9bf',
    fontSize: 53,
    marginTop: 52,
    marginBottom: 52,
  },
  bodyText: {
    fontFamily: 'Roboto_400Regular',
    color: '#757575',
    alignItems: 'center',
    width: 300,
    marginBottom: 20,
    textAlign: 'center',
  },
  registerButton: {
    backgroundColor: '#88c9bf',
    justifyContent: 'center',
    alignItems: 'center',
    width: 260,
    height: 50,
    marginTop: 100,
    marginBottom: 42,
    elevation: 3,
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#e6e6df',
  },
});
