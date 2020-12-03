import { DocumentSnapshot } from '@google-cloud/firestore';
import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components';
import { Api } from '../../backend/firebase/api';
import { Animal } from '../../backend/models/Animal';
import { ButtonBox } from '../components/form/ButtonBox';
import Divider from '../components/Hr';
import { InputLabel } from '../components/InputLabel';
import { invertedTheme } from '../components/theme';
import AtalhosStack from '../routes/AtalhosStack';
import ProfileStack from '../routes/ProfileStack';
import PetInterested from './petInterested';
import PetRemove from './petRemove';

function PetDetail({ route, navigation }) {
  const doc = route.params.detail as DocumentSnapshot<Animal>;
  const mode = route.params.mode as 'owned' | 'list';
  const detail: Animal = doc.data() as Animal;
  navigation.setOptions({ title: detail.nome });

  function pretetionToAdoption() {
    Api.Database.Pet.pretetionToAdoption(doc);
  }

  function listInterestedPeople() {
    navigation.navigate(AtalhosStack.name, {
      screen: PetInterested.name,
      params: {
        detail: doc,
      },
    });
  }

  function removePet() {
    Api.Database.Pet.remove(doc).then(res => {
      navigation.navigate(ProfileStack.name, {
        screen: PetRemove.name,
        params: {
          detail: detail,
        },
      });
    });
  }

  return (
    <PaperProvider theme={invertedTheme}>
      <ThemeProvider theme={invertedTheme}>
        <ScrollView>
          <Image style={styles.animalImage} source={{ uri: detail.photo }} />
          <View style={styles.infoContainer}>
            <View>
              <Text style={styles.titleText}>{detail.nome}</Text>
            </View>
            <View style={styles.infoRow}>
              <View style={styles.infoBox}>
                <InputLabel>SEXO</InputLabel>
                <Text style={styles.input}>{detail.nome}</Text>
              </View>
              <View style={styles.infoBox}>
                <InputLabel>PORTE</InputLabel>
                <Text style={styles.input}>Médio</Text>
              </View>
              <View>
                <InputLabel>IDADE</InputLabel>
                <Text style={styles.input}>Adulto</Text>
              </View>
            </View>
            <View>
              <InputLabel>LOCALIZAÇÃO</InputLabel>
              <Text style={styles.input}>Samambaia Sul - Distrito Federal</Text>
            </View>
            <Divider style={styles.hr} />
            <View style={styles.infoRow}>
              <View style={styles.infoBox}>
                <InputLabel>CASTRADO</InputLabel>
                <Text style={styles.input}>Não</Text>
              </View>
              <View>
                <InputLabel>VERMIFUGADO</InputLabel>
                <Text style={styles.input}>Sim</Text>
              </View>
            </View>
            <View style={styles.infoRow}>
              <View>
                <InputLabel style={styles.infoBox}>VACINADO</InputLabel>
                <Text style={styles.input}>Não</Text>
              </View>
              <View>
                <InputLabel>DOENÇAS</InputLabel>
                <Text style={styles.input}>Nenhuma</Text>
              </View>
            </View>
            <Divider style={styles.hr} />
            <View>
              <InputLabel>TEMPERAMENTO</InputLabel>
              <Text style={styles.input}>Calmo e dócil</Text>
            </View>
            <Divider style={styles.hr} />
            <View>
              <InputLabel>EXIGÊNCIAS DO DOADOR</InputLabel>
              <Text style={styles.input}>
                Termo de adoção, fotos da casam visita prévia e acompanhamento
                durante três meses
              </Text>
            </View>
            <Divider style={styles.hr} />
            <View>
              <InputLabel>MAIS SOBRE {detail.nome}</InputLabel>
              <Text style={styles.input}>
                Rufus é um cão muito dócil e de fácil convivência. Adora
                caminhadas e se dá muito bem com crianças. Tem muito medo de
                raios e de chuva, nesses momentos ele requer mais atenção. Está
                disponível para adoção pois eu e minha família o encontramos na
                rua e não podemos mantê-lo em nossa casa.
              </Text>
            </View>
            {mode === 'owned' ? (
              <ButtonBox>
                <Button
                  style={styles.button}
                  mode="contained"
                  onPress={listInterestedPeople}
                >
                  Ver Interessados
                </Button>
                <Button
                  style={styles.button}
                  mode="contained"
                  onPress={removePet}
                >
                  Remover Pet
                </Button>
              </ButtonBox>
            ) : (
              <Button
                style={styles.button}
                mode="contained"
                onPress={pretetionToAdoption}
              >
                PRETENTO ADOTAR
              </Button>
            )}
          </View>
        </ScrollView>
      </ThemeProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  headerBar: {
    backgroundColor: '#b6edd9',
    fontFamily: 'Roboto_400Regular',
  },
  likeIcon: {
    padding: 16,
  },
  cardTitle: {
    backgroundColor: '#fee29b',
  },
  infoView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'space-between',
    alignItems: 'center',
    paddingTop: 3,
    paddingBottom: 5,
  },
  infoRow: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-start',
    paddingRight: 60,
    marginTop: 16,
  },
  infoContainer: {
    margin: 20,
  },
  titleText: {
    fontSize: 16,
    color: '#434343',
    fontWeight: 'bold',
  },
  animalImage: {
    width: '100%',
    height: 183,
  },
  hr: {
    marginTop: 16,
    marginBottom: 16,
    color: '#e0e0e0',
  },
  infoBox: {
    paddingRight: 90,
    paddingBottom: 12,
  },
  textButton: {
    alignContent: 'center',
    alignSelf: 'center',
    fontSize: 12,
    color: '#434343',
  },
  button: {
    marginBottom: 10,
    marginTop: 28,
  },
  input: {
    color: '#757575',
  },
});

export default PetDetail;
