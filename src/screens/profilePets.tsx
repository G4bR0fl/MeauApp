import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Api } from '../../backend/firebase/api';
import DogCardProfile from '../components/DogCardProfile';
import { Container } from '../components/layout';
import AtalhosStack from '../routes/AtalhosStack';
import PetDetail from './petDetail';

export default function ProfilePets({ navigation }) {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    Api.Database.Profile.listOwnedPets().then(res =>
      setList(res.map(doc => [doc.data(), doc]))
    );
  }, []);

  function petDetail(detail: any) {
    navigation.navigate(AtalhosStack.name, {
      screen: PetDetail.name,
      params: {
        detail,
        mode: 'owned',
      },
    });
  }

  return (
    <ScrollView>
      <Container>
        {list?.map(([item, doc]) => (
          <DogCardProfile value={item} onPress={() => petDetail(doc)} />
        ))}
      </Container>
    </ScrollView>
  );
}
