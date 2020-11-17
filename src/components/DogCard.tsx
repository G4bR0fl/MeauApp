import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Animal } from '../../backend/models/Animal';

export default function DogCard({
  value,
  onPress,
}: {
  value: Animal;
  onPress?: Function | any;
}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{value.nome}</Text>
        <Icon name="heart" />
      </View>
      <Image style={styles.animalImage} source={{ uri: value.photo }} />
      <View style={styles.infoView}>
        <Text>{value.sexo}</Text>
        <Text>ADULTO</Text>
        <Text>MÉDIO</Text>
      </View>
      <View style={styles.infoView}>
        <Text>SAMAMBAIA SUL - DISTRITO FEDERAL</Text>
      </View>
    </TouchableOpacity>
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
