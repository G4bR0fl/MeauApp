import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import styled from 'styled-components/native';
import CheckboxGroup from '../../components/CheckboxGroup';
import Hr from '../../components/Hr';
import { InputLabel } from '../../components/InputLabel';
import { PhotoInput } from '../../components/PhotoInput';
import {
  RadioButton,
  RadioButtonGroup,
} from '../../components/RadioButtonGroup';

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

export default function PetRegisterForm({ onSubmit }) {
  const { control, handleSubmit, errors } = useForm();

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

  return (
    <>
      <Text>Tenho interesse em cadastrar o animal para </Text>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <ButtonBox
          //onChangeText={onChange}
          //value={value}
          >
            <Button mode="contained">Adoção</Button>
            <Button mode="contained">Apadrinhar</Button>
            <Button mode="contained">Ajuda</Button>
          </ButtonBox>
        )}
        name="interesse"
        defaultValue=""
      />
      <Hr />
      <Title>Ajuda</Title>
      <View>
        <InputLabel>Nome do Animal</InputLabel>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              keyboardType="default"
              label="Nome do Animal"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="nome"
          defaultValue=""
        />
      </View>
      <InputLabel>Foto de Perfil</InputLabel>
      <PhotoInput />
      <View>
        <InputLabel>Espécie</InputLabel>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <RadioButtonGroup onValueChange={onChange} value={value}>
              <RadioButton label="Cachorro" value="cachoro" />
              <RadioButton label="Gato" value="gato" />
            </RadioButtonGroup>
          )}
          name="especie"
          defaultValue=""
        />
      </View>
      <View>
        <InputLabel>Sexo</InputLabel>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <RadioButtonGroup onValueChange={onChange} value={value}>
              <RadioButton label="Macho" value="macho" />
              <RadioButton label="Fêmea" value="femea" />
            </RadioButtonGroup>
          )}
          name="sexo"
          defaultValue=""
        />
      </View>
      <View>
        <InputLabel>Porte</InputLabel>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <RadioButtonGroup onValueChange={onChange} value={value}>
              <RadioButton label="Pequeno" value="pequeno" />
              <RadioButton label="Médio" value="medio" />
              <RadioButton label="Grande" value="grande" />
            </RadioButtonGroup>
          )}
          name="porte"
          defaultValue=""
        />
      </View>
      <View>
        <InputLabel>Idade</InputLabel>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <RadioButtonGroup onValueChange={onChange} value={value}>
              <RadioButton label="Filhote" value="filhote" />
              <RadioButton label="Adulto" value="adulto" />
              <RadioButton label="Idoso" value="idoso" />
            </RadioButtonGroup>
          )}
          name="idade"
          defaultValue=""
        />
      </View>
      <View>
        <InputLabel>Temperamento</InputLabel>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <CheckboxGroup
              onChange={onChange}
              elements={temperamentos}
              value={value}
            />
          )}
          name="temperamento"
          defaultValue=""
        />
      </View>
      <View>
        <InputLabel>Saúde</InputLabel>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <CheckboxGroup onChange={onChange} elements={saude} value={value} />
          )}
          name="saude"
          defaultValue=""
        />
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              onChange={onChange}
              value={value}
              keyboardType="default"
              label="Doenças do Animal"
            />
          )}
          name="saude_doencas"
          defaultValue=""
        />
      </View>
      <View>
        <InputLabel>Necessidade do Animal</InputLabel>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <CheckboxGroup
              onChange={onChange}
              elements={necessidades}
              value={value}
            />
          )}
          name="necessidades"
          defaultValue=""
        />
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              onChange={onChange}
              value={value}
              keyboardType="default"
              label="Nome do Medicamento"
            />
          )}
          name="necessidades_medicamentos"
          defaultValue=""
        />
        <CheckboxGroup elements={objetos} />
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              onChange={onChange}
              value={value}
              keyboardType="default"
              label="Especifique o(s) objeto(o)"
            />
          )}
          name="objetos"
          defaultValue=""
        />
      </View>
      <View>
        <InputLabel>Sobre o animal</InputLabel>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              onChange={onChange}
              value={value}
              keyboardType="default"
              label="Compartilhe a história do animal"
            />
          )}
          name="historia"
          defaultValue=""
        />
      </View>
      <Button mode="contained">Procurar ajuda</Button>

      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        Salvar
      </Button>
    </>
  );
}
