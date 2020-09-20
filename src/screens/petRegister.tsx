import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import {
  Button,
  RadioButton,
  TextInput,
  Provider as PaperProvider,
  DefaultTheme,
} from "react-native-paper";
import styled from "styled-components/native";
import { Container } from "../components/layout";
import CheckboxGroup from "../components/CheckboxGroup";
import Hr from "../components/Hr";
import { PhotoInput } from "../components/PhotoInput";
import { ThemeProvider } from "@react-navigation/native";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#88c9bf",
    accent: "#f1c40f",
  },
};

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
  const InputLabel = styled.Text`
    text-transform: uppercase;
    margin-top: 7px;
    margin-bottom: 10px;
    color: ${(props) => JSON.stringify(props)};
  `;
  const temperamentos = [
    { label: "Brincalhão", prop: "brincalhao" },
    { label: "Tímido", prop: "timido" },
    { label: "Calmo", prop: "calmo" },
    { label: "Guarda", prop: "guarda" },
    { label: "Amoroso", prop: "amoroso" },
    { label: "Preguiçoso", prop: "preguicoso" },
  ];

  const saude = [
    { label: "Vacinado", prop: "vacinado" },
    { label: "Vermifugado", prop: "vermifugado" },
    { label: "castrado", prop: "castrado" },
    { label: "Doente", prop: "doente" },
  ];

  const invertTheme = {};

  return (
    <PaperProvider theme={theme}>
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
            <InputLabel>Nome do Animal</InputLabel>
          <TextInput keyboardType="default" label="Nome do Animal" />
          <PhotoInput />
          <RadioButton.Group onValueChange={(value) => {}} value={""}>
            <View style={styles.radioGroup}>
              <Text>Espécie</Text>
              <View>
                <Text>Cachorro</Text>
                <RadioButton value="first" />
              </View>
              <View>
                <Text>Gato</Text>
                <RadioButton value="second" />
              </View>
            </View>
          </RadioButton.Group>
          <RadioButton.Group onValueChange={(value) => {}} value={""}>
            <Text>Sexo</Text>
            <View style={styles.radioGroup}>
              <View>
                <Text>Macho</Text>
                <RadioButton value="first" />
              </View>
              <View>
                <Text>Fêmea</Text>
                <RadioButton value="second" />
              </View>
            </View>
          </RadioButton.Group>
          <RadioButton.Group onValueChange={(value) => {}} value={""}>
            <Text>Porte</Text>
            <View style={styles.radioGroup}>
              <View>
                <Text>Pequeno</Text>
                <RadioButton value="first" />
              </View>
              <View>
                <Text>Médio</Text>
                <RadioButton value="second" />
              </View>
              <View>
                <Text>Grande</Text>
                <RadioButton value="second" />
              </View>
            </View>
          </RadioButton.Group>
          <RadioButton.Group onValueChange={(value) => {}} value={""}>
            <Text>Idade</Text>
            <View style={styles.radioGroup}>
              <View>
                <Text>Filhote</Text>
                <RadioButton value="first" />
              </View>
              <View>
                <Text>Adulto</Text>
                <RadioButton value="second" />
              </View>
              <View>
                <Text>Idoso</Text>
                <RadioButton value="second" />
              </View>
            </View>
          </RadioButton.Group>
          <RadioButton.Group onValueChange={(value) => {}} value={""}>
            <Text>Temperamento</Text>
            <View style={styles.radioGroup}>
              <View>
                <Text>Pequeno</Text>
                <RadioButton value="first" />
              </View>
              <View>
                <Text>Médio</Text>
                <RadioButton value="second" />
              </View>
              <View>
                <Text>Grande</Text>
                <RadioButton value="second" />
              </View>
            </View>
          </RadioButton.Group>
          <View>
            <Text>Temperamento</Text>
            <CheckboxGroup elements={temperamentos} />
          </View>
          <View>
            <Text>Saúde</Text>
            <CheckboxGroup elements={saude} />
            <TextInput
              style={styles.input}
              keyboardType="default"
              label="Doenças do Animal"
            />
          </View>
          <View>
            <Text>Necessidades do Animal</Text>
            <CheckboxGroup elements={temperamentos} />
            <TextInput
              style={styles.input}
              keyboardType="default"
              label="Nome do Medicamento"
            />
            <TextInput
              style={styles.input}
              keyboardType="default"
              label="Especifique o(s) objeto(o)"
            />
          </View>
          <View>
            <Text>Sobre o animal</Text>
            <TextInput
              style={styles.input}
              keyboardType="default"
              label="Especifique o(s) objeto(o)"
            />
          </View>
        </Container>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  radioGroup: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    width: 330,
    margin: 10,
    padding: 8,
    height: 15,
  },
});
