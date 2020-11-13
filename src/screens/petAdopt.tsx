import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { Button, Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components';
import { Api } from '../../backend/firebase/api';
import BaseAnimal from '../../backend/models/Animal';
import { InputLabel } from '../components/InputLabel';
import { invertedTheme } from '../components/theme';

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
    justifyContent: 'space-between',
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
  },
  animalImage: {
    width: '100%',
    height: 183,
  },
});

const images = [
  require('../../assets/dog.jpg'),
  require('../../assets/dog.jpg'),
  require('../../assets/dog.jpg'),
  require('../../assets/dog.jpg'),
  require('../../assets/dog.jpg'),
];
function PetAdopt({ route, navigation }) {
  const doc = route.params.detail;
  const detail: BaseAnimal = route.params.detail.data();
  navigation.setOptions({ title: detail.nome });

  function pretetionToAdoption() {
    Api.Database.Pet.pretetionToAdoption(doc);
  }

  return (
    <PaperProvider theme={invertedTheme}>
      <ThemeProvider theme={invertedTheme}>
        <ScrollView>
          <SliderBox
            images={images}
            dotColor="white"
            inactiveDotColor="#90A4AE"
          />
          <View style={styles.infoContainer}>
            <View>
              <Text style={styles.titleText}>{detail.nome}</Text>
            </View>
            <View style={styles.infoRow}>
              <View>
                <InputLabel>Sexo</InputLabel>
                <Text>{detail.sexo}</Text>
              </View>
              <View>
                <InputLabel>Porte</InputLabel>
                <Text>{detail.porte}</Text>
              </View>
              <View>
                <InputLabel>Idade</InputLabel>
                <Text>{detail.idade}</Text>
              </View>
            </View>
            <View>
              <InputLabel>Localização</InputLabel>
              <Text>Samambai Sul - Distrito Federal</Text>
            </View>
            <View>
              <View>
                <InputLabel>Castrado</InputLabel>
                <Text>Não</Text>
              </View>
              <View>
                <Text>VERMIFUGADO</Text>
                <Text>Sim</Text>
              </View>
            </View>
            <View>
              <View>
                <Text>VACINADO</Text>
                <Text>Não</Text>
              </View>
              <View>
                <Text>DOENÇAS</Text>
                <Text>Nenhuma</Text>
              </View>
            </View>
            <View>
              <Text>TEMPERAMENTO</Text>
              <Text>Calmo e dócil</Text>
            </View>
            <View>
              <Text>EXIGÊNCIAS DO DOADOR</Text>
              <Text>
                Termo de adoção, fotos da casam visita prévia e acompanhamento
                durante três meses
              </Text>
            </View>
            <View>
              <Text>MAIS SOBRE BIDU</Text>
              <Text>
                Pequi é um cão muito dócil e de fácil convivência. Adora
                caminhadas e se dá muito bem com crianças. Tem muito medo de
                raios e de chuva, nesses momentos ele requer mais atenção. Está
                disponível para adoção pois eu e minha família o encontramos na
                rua e não podemos mantê-lo em nossa casa.
              </Text>
            </View>
            <Button mode="contained" onPress={pretetionToAdoption}>
              PRETENTO ADOTAR
            </Button>
          </View>
        </ScrollView>
      </ThemeProvider>
    </PaperProvider>
  );
}

export default PetAdopt;
