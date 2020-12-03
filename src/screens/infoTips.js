import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpandableListView } from 'react-native-expandable-listview';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components';
import { Container } from '../components/layout';
import { theme } from '../components/theme';

// Ver o navigator que nao ta rolando
// Redirecionar o click desses caras pra uma página nova

export default function InfoTips() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    tipBox: {
      backgroundColor: 'white',
      alignContent: 'center',
      alignItems: 'center',
      width: 344,
      height: 80,
    },
    tipText: {
      fontFamily: 'Roboto_400Regular',
      fontSize: 14,
      color: '#757575',
    },
  });

  const CONTENT = [
    {
      id: '100',
      categoryName: 'Comportamento',
      subCategory: [
        { id: '1', name: 'Cão vs gato: qual deve ser o seu bichinho?' },
        { id: '2', name: 'Como lidar com pets muito agitados' },
        { id: '3', name: 'Por que alguns animais não gostam de crianças?' },
      ],
    },
    {
      id: '101',
      categoryName: 'Alimentação',
      subCategory: [
        { id: '4', name: 'A importância de alimentar o pet com ração' },
        { id: '5', name: 'Quais frutas você pode e não pode dar ao seu pet' },
        { id: '6', name: 'Como escolho a melhor ração para o meu pet?' },
        { id: '7', name: 'Socorro! Meu pet não quer comer mais ração!' },
      ],
    },
    {
      id: '102',
      categoryName: 'Saude',
      subCategory: [
        { id: '8', name: 'Como cortar as unhas do seu cachorro' },
        { id: '9', name: 'Mantendo ap ele e pelagem de seu pet saudável' },
        { id: '10', name: 'Como identificar dor em cães?' },
        { id: '11', name: 'Nariz seco é sinal de doença?' },
        { id: '12', name: 'Colocando microchip em seu cachorro' },
        { id: '13', name: 'Vermes em cães e gatos' },
        { id: '14', name: 'Como limpar as orelhas de seu cachorro' },
        { id: '15', name: 'Livrando-se das pulgas e carrapatos!' },
        { id: '16', name: 'Câncer em cachorros' },
      ],
    },
  ];

  return (
    <PaperProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <ScrollView>
          <Container>
            <ExpandableListView
              renderInnerItemSeparator={true}
              innerItemContainerStyle={{ backgroundColor: 'white' }}
              innerItemLabelStyle={{
                color: '#757575',
                marginVertical: 16,
                fontSize: 14,
                marginLeft: -7,
              }}
              itemLabelStyle={{
                fontFamily: 'Roboto_500Medium',
                fontSize: 16,
                color: '#434343',
              }}
              data={CONTENT}
            />
          </Container>
        </ScrollView>
      </ThemeProvider>
    </PaperProvider>
  );
}
