import { DocumentSnapshot } from '@google-cloud/firestore';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Api } from '../../backend/firebase/api';
import { Animal } from '../../backend/models/Animal';
import { Container } from '../components/layout';

export default function PetInterested({ navigation, route }) {
  const doc = route.params.detail as DocumentSnapshot<Animal>;
  const detail: Animal = doc.data() as Animal;

  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    Api.Database.Pet.listInterestedPeople(doc).then(res => {
      //console.log(res.map(r => [r.data(), r]));
      //setList(res.map(r => [r.data(), r]));
    });
  }, []);

  return (
    <ScrollView>
      <Container>
        {list?.map(([item, doc]) => (
          <View>
            <Text>a</Text>
          </View>
        ))}
      </Container>
    </ScrollView>
  );
}
