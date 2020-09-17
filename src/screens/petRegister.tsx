import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Button, Checkbox, RadioButton, TextInput } from "react-native-paper";
import CheckboxGroup from "../components/CheckboxGroup";
import Hr from "../components/Hr";
import { PhotoInput } from "../components/PhotoInput";

export default function PetRegister() {
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

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Tenho interesse em cadastrar o animal para </Text>
        <View style={styles.buttonContainer}>
          <Button>Adoção</Button>
          <Button>Apadrinhar</Button>
          <Button>Ajuda</Button>
        </View>
        <Hr />
        <Text>Ajuda</Text>
        <TextInput
          style={styles.input}
          keyboardType="default"
          label="Nome do Animal"
        />
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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 900,
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  radioGroup: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    width: 330,
    margin: 10,
    padding: 8,
  },
});
