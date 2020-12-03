import { DocumentSnapshot } from '@google-cloud/firestore';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Api } from '../../backend/firebase/api';
import { Animal } from '../../backend/models/Animal';
import { Container } from '../components/layout';

export default function PetInterested({ navigation, route }) {
  const doc = route.params.detail as DocumentSnapshot<Animal>;
  const detail: Animal = doc.data() as Animal;

  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    Api.Database.Pet.listInterestedPeople(doc).then(res => {
      console.log(res);
      setList(res);
    });
  }, []);

  return (
    <ScrollView>
      <Container>
        <View style={styles.infoBox}>
          {list?.map(item => (
            <View style={styles.box}>
              <Image style={styles.animalImage} source={{ uri: item.photo }} />
              <Text>{item.name}</Text>
            </View>
          ))}
        </View>
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  animalImage: {
    width: 80,
    height: 80,
  },
  infoBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
});
