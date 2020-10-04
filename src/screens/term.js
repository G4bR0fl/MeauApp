import {
  Roboto_400Regular,
  Roboto_500Medium,
  useFonts,
} from '@expo-google-fonts/roboto';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';
import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Stack = createStackNavigator();

export default function term({ navigation }) {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView>
      <StatusBar barStyle="light-content" backgroundColor="#589b9b" />

      <View style={styles.container}>
        <View style={styles.header}></View>

        <View style={styles.textHead}>
          <Text style={styles.adoptionInfo}>
            O termo de adoção é um termo que oficialia o processo de adoção de
            um animal. Similarmente funciona o termo de apadrinhamento.
          </Text>
        </View>
        <View>
          <Text style={styles.textBody}>
            É importante que o doador/dono exija a assinatura deste termo por
            parte do adotante/padrinho, de forma a ter prova legal de que a
            pessoa adquiriu o animal. Assim, podem ser tomadas providências
            legais em caso de maus tratos ou negligência do animal.
          </Text>
          <Text style={styles.textBody}>
            Para facilitar o processo, o Meau disponibiliza o termo aos seus
            doadores e donos de animais que utilizam o aplicativo para encontrar
            um destino e/ou ajuda para seu bichinho. Este termo é enviado por
            email para que possa ser feita a impressão e, no momento da entrega
            do animal(ou quando o padrinho vai conhecer), a assinatura por parte
            do adotante/padrinho.
          </Text>
          <Text style={styles.textBody}>
            Pressionando os botões abaixo vocẽ receberá em seu email o termo em
            questão, nos formatos .word e .pdf
          </Text>
        </View>

        <TouchableOpacity style={{ marginTop: 15 }}>
          <View style={styles.termButton}>
            <Text style={styles.textButton}>TERMO DE ADOÇÃO</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginBottom: 16 }}>
          <View style={styles.termButton}>
            <Text style={styles.textButton}>TERMO DE APADRINHAMENTO</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  textHead: {
    width: 340,
    marginTop: 16,
    padding: 5,
    alignSelf: 'center',
    marginBottom: 5,
  },
  textBody: {
    width: 340,
    alignSelf: 'center',
    borderRadius: 4,
    padding: 5,
    fontSize: 14,
    marginBottom: 5,
    color: '#757575',
  },
  adoptionInfo: {
    fontFamily: 'Roboto_400Regular',
    color: '#757575',
    fontSize: 14,
  },
  termButton: {
    backgroundColor: '#88c9bf',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 232,
    height: 40,
    marginBottom: 8,
    borderRadius: 2,
    elevation: 5,
  },
  textButton: {
    fontFamily: 'Roboto_400Regular',
    color: '#434343',
  },
});
