import React from 'react';
import { ScrollView, View } from 'react-native';
import {
  Button,
  Provider as PaperProvider,
  Text,
  TextInput,
} from 'react-native-paper';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components/native';
import CheckboxGroup from '../components/CheckboxGroup';
import Hr from '../components/Hr';
import { InputLabel } from '../components/InputLabel';
import { Container } from '../components/layout';
import { PhotoInput } from '../components/PhotoInput';
import { RadioButton, RadioButtonGroup } from '../components/RadioButtonGroup';
import { theme } from '../components/theme';
import { Api } from '../firebase/api';
import Animal from '../firebase/models/Animal';

const ButtonBox = styled.View`
  width: 100%;
  padding: 5%;
  justify-content: space-between;
  flex-direction: row;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
  margin: 10px 0px;
`;

export default function PetRegister() {
  const temperamentos = [
    { label: 'Brincalhão', prop: 'brincalhao' },
    { label: 'Tímido', prop: 'timido' },
    { label: 'Calmo', prop: 'calmo' },
    { label: 'Guarda', prop: 'guarda' },
    { label: 'Amoroso', prop: 'amoroso' },
    { label: 'Preguiçoso', prop: 'preguicoso' },
  ];

  const saude = [
    { label: 'Vacinado', prop: 'vacinado' },
    { label: 'Vermifugado', prop: 'vermifugado' },
    { label: 'Castrado', prop: 'castrado' },
    { label: 'Doente', prop: 'doente' },
  ];

  const necessidades = [
    { label: 'Alimento', prop: 'alimento' },
    { label: 'Auxilio Financeiro', prop: 'financeiro' },
    { label: 'Medicamento', prop: 'medicamento' },
  ];

  const objetos = [{ label: 'Objetos', prop: 'objetos' }];

  function onSubmit() {
    Api.Database.createPet({
      nome: 'Tirulipa',
      especie: 'cachorro',
      sexo: 'M',
      porte: 'medio ',
    } as Animal);
  }

  return (
    <PaperProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <ScrollView>
          <Container>
            <Text>Tenho interesse em cadastrar o animal para </Text>
            <ButtonBox>
              <Button mode="contained">Adoção</Button>
              <Button mode="contained">Apadrinhar</Button>
              <Button mode="contained">Ajuda</Button>
            </ButtonBox>
            <Hr />
            <Title>Ajuda</Title>
            <View>
              <InputLabel>Nome do Animal</InputLabel>
              <TextInput keyboardType="default" label="Nome do Animal" />
              <PhotoInput />
            </View>
            <View>
              <InputLabel>Espécie</InputLabel>
              <RadioButtonGroup onValueChange={value => {}} value={''}>
                <RadioButton label="Cachorro" value="cachoro" />
                <RadioButton label="Gato" value="gato" />
              </RadioButtonGroup>
            </View>
            <View>
              <InputLabel>Sexo</InputLabel>
              <RadioButtonGroup onValueChange={value => {}} value={''}>
                <RadioButton label="Macho" value="macho" />
                <RadioButton label="Fêmea" value="femea" />
              </RadioButtonGroup>
            </View>
            <View>
              <InputLabel>Porte</InputLabel>
              <RadioButtonGroup onValueChange={value => {}} value={''}>
                <RadioButton label="Pequeno" value="pequeno" />
                <RadioButton label="Médio" value="medio" />
                <RadioButton label="Grande" value="grande" />
              </RadioButtonGroup>
            </View>
            <View>
              <InputLabel>Idade</InputLabel>
              <RadioButtonGroup onValueChange={value => {}} value={''}>
                <RadioButton label="Filhote" value="filhote" />
                <RadioButton label="Adulto" value="adulto" />
                <RadioButton label="Idoso" value="idoso" />
              </RadioButtonGroup>
            </View>
            <View>
              <InputLabel>Temperamento</InputLabel>
              <CheckboxGroup elements={temperamentos} />
            </View>
            <View>
              <InputLabel>Saúde</InputLabel>
              <CheckboxGroup elements={saude} />
              <TextInput keyboardType="default" label="Doenças do Animal" />
            </View>
            <View>
              <InputLabel>Necessidade do Animal</InputLabel>
              <CheckboxGroup elements={necessidades} />
              <TextInput keyboardType="default" label="Nome do Medicamento" />
              <CheckboxGroup elements={objetos} />
              <TextInput
                keyboardType="default"
                label="Especifique o(s) objeto(o)"
              />
            </View>
            <View>
              <InputLabel>Sobre o animal</InputLabel>
              <TextInput
                keyboardType="default"
                label="Especifique o(s) objeto(o)"
              />
            </View>
            <Button mode="contained">Procurar ajuda</Button>

            <Button mode="contained" onPress={onSubmit}>
              Salvar
            </Button>
          </Container>
        </ScrollView>
      </ThemeProvider>
    </PaperProvider>
  );
}
