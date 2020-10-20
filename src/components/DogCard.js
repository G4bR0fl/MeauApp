import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PetAdopt from '../screens/petAdopt';

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
  titleView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fee29b',
    height: 32,
    padding: 15,
  },
  container: {
    borderWidth: 0.2,
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 10,
  },
  titleText: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
    color: '#434343',
  },
  animalImage: {
    width: '100%',
    height: 183,
  },
});
const Stack = createStackNavigator();

const DogCard = () => (
  
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Pequi</Text>
        <Icon name="heart" />
      </View>
      <Image
        style={styles.animalImage}
        source={require('../../assets/dog.jpg')}
      />
      <View style={styles.infoView}>
        <Text>MACHO</Text>
        <Text>ADULTO</Text>
        <Text>MÉDIO</Text>
      </View>
      <View style={styles.infoView}>
        <Text>SAMAMBAIA SUL - DISTRITO FEDERAL</Text>
      </View>
    </View>
);

export default DogCard;
