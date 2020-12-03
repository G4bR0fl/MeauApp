import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SliderBox } from 'react-native-image-slider-box';
import { Divider } from 'react-native-paper';
import styled from 'styled-components/native';

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
    height: 50,
    width: '80%',
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 28,
    borderRadius: 2,
  },
  input: {
    color: '#757575',
  },
});

const Label = styled.Text`
  color: #f7a800;
`;

const images = [require('../../assets/dog.jpg')];
export default function PetAdopt({ route }) {
  const details = route.params.detail;
  return (
    <ScrollView>
      <SliderBox images={images} dotColor="white" inactiveDotColor="#90A4AE" />
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.titleText}>{details.nome}</Text>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.infoBox}>
            <Label>SEXO</Label>
            <Text style={styles.input}>{details.nome}</Text>
          </View>
          <View style={styles.infoBox}>
            <Label>PORTE</Label>
            <Text style={styles.input}>Médio</Text>
          </View>
          <View>
            <Label>IDADE</Label>
            <Text style={styles.input}>Adulto</Text>
          </View>
        </View>
        <View>
          <Label>LOCALIZAÇÃO</Label>
          <Text style={styles.input}>Samambaia Sul - Distrito Federal</Text>
        </View>
        <Divider style={styles.hr} />
        <View style={styles.infoRow}>
          <View style={styles.infoBox}>
            <Label>CASTRADO</Label>
            <Text style={styles.input}>Não</Text>
          </View>
          <View>
            <Label>VERMIFUGADO</Label>
            <Text style={styles.input}>Sim</Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <View>
            <Label style={styles.infoBox}>VACINADO</Label>
            <Text style={styles.input}>Não</Text>
          </View>
          <View>
            <Label>DOENÇAS</Label>
            <Text style={styles.input}>Nenhuma</Text>
          </View>
        </View>
        <Divider style={styles.hr} />
        <View>
          <Label>TEMPERAMENTO</Label>
          <Text style={styles.input}>Calmo e dócil</Text>
        </View>
        <Divider style={styles.hr} />
        <View>
          <Label>EXIGÊNCIAS DO DOADOR</Label>
          <Text style={styles.input}>
            Termo de adoção, fotos da casam visita prévia e acompanhamento
            durante três meses
          </Text>
        </View>
        <Divider style={styles.hr} />
        <View>
          <Label>MAIS SOBRE {details.nome}</Label>
          <Text style={styles.input}>
            Rufus é um cão muito dócil e de fácil convivência. Adora caminhadas
            e se dá muito bem com crianças. Tem muito medo de raios e de chuva,
            nesses momentos ele requer mais atenção. Está disponível para adoção
            pois eu e minha família o encontramos na rua e não podemos mantê-lo
            em nossa casa.
          </Text>
        </View>
        <TouchableOpacity>
          <View style={styles.button} backgroundColor="#ffd358">
            <Text style={styles.textButton}>PRETENDO ADOTAR</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
