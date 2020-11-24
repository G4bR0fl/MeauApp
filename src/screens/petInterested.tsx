import { Animal } from '@backend/models/Animal';
import { DocumentSnapshot } from '@google-cloud/firestore';
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Api } from '../../backend/firebase/api';
import { Container } from '../components/layout';

export default function PetInterested({ navigation, route }) {
  const doc = route.params.detail as DocumentSnapshot<Animal>;
  const detail: Animal = doc.data() as Animal;
  console.log(detail);
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    Api.Database.Pet.listInterestedPeople(doc).then(res =>
      setList(res.map(doc => [doc.data(), doc]))
    );
  }, []);

  return (
    <ScrollView>
      <Container>
        {list?.map(([item, doc]) => (
          <View>a</View>
        ))}
      </Container>
    </ScrollView>
  );
}
