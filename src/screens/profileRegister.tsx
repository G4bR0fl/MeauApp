import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Api } from '../../backend/firebase/api';
import { Profile } from '../../backend/models/User';
import { InputLabel } from '../components/InputLabel';
import { PhotoInput } from '../components/PhotoInput';

export default function profileRegister({ navigation }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState<number>(undefined as any);
  const [email, setEmail] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const person = {
    name,
    age,
    email,
    state,
    city,
    address,
    phone,
    username,
    password,
  } as Profile & { password: string };

  function onSubmit(data: any) {
    if (password === passwordConfirmation) {
      const { email, password, ...rest } = person;
      Api.Auth.createUser({ email, password }, { email, ...rest });
      console.log('User criado com sucesso!');
    } else {
      console.log('Senhas diferentes, user não foi criado');
    }
  }

  return (
    <ScrollView>
      <StatusBar barStyle="light-content" backgroundColor="#88c9bf" />

      <View style={styles.container}>
        <View style={styles.infoBox}>
          <Text style={{ fontFamily: 'Roboto_400Regular' }}>
            As informações preenchidas serão divulgadas apenas para a pessoa com
            a qual você realizar o processo de adoção e/ou apadrinhamento, após
            a formalização do processo.
          </Text>
        </View>

        <View style={styles.formData}>
          <Text style={styles.personalInfoText}>INFORMAÇÕES PESSOAIS</Text>
          <TextInput
            keyboardType="default"
            style={styles.input}
            placeholder="Nome Completo"
            onChangeText={text => setName(text)}
            value={name}
          />
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            placeholder="Idade"
            onChangeText={text => setAge(text)}
            value={age}
          />
          <TextInput
            keyboardType="email-address"
            style={styles.input}
            placeholder="E-mail"
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <TextInput
            keyboardType="default"
            style={styles.input}
            placeholder="Estado"
            onChangeText={text => setState(text)}
            value={state}
          />
          <TextInput
            keyboardType="default"
            style={styles.input}
            placeholder="Cidade"
            onChangeText={text => setCity(text)}
            value={city}
          />
          <TextInput
            multiline
            keyboardType="default"
            style={styles.input}
            placeholder="Endereço"
            onChangeText={text => setAddress(text)}
            value={address}
          />
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            placeholder="Telefone"
            onChangeText={text => setPhone(text)}
            value={phone}
          />
          <Text style={styles.personalInfoText}>INFORMAÇÕES DE PERFIL</Text>
          <TextInput
            keyboardType="default"
            style={styles.input}
            placeholder="Nome de usuário"
            onChangeText={text => setUsername(text)}
            value={username}
          />
          <TextInput
            secureTextEntry={true}
            keyboardType="default"
            style={styles.input}
            placeholder="Senha"
            onChangeText={text => setPassword(text)}
            value={password}
          />
          <TextInput
            secureTextEntry={true}
            keyboardType="default"
            style={styles.input}
            placeholder="Confirmação de senha"
            onChangeText={text => setPasswordConfirmation(text)}
            value={passwordConfirmation}
          />
          <InputLabel>Foto de Perfil</InputLabel>
          <PhotoInput />
          <TouchableOpacity onPress={() => onSubmit(person)}>
            <View style={styles.registerButton}>
              <Text>FAZER CADASTRO</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  menuFont: {
    fontSize: 20,
    color: '#434343',
    fontFamily: 'Roboto_500Medium',
  },
  infoBox: {
    backgroundColor: '#cfe9e5',
    width: 340,
    height: 80,
    marginTop: 16,
    alignSelf: 'center',
    borderRadius: 4,
    padding: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#434343',
  },
  personalInfoText: {
    color: '#88c9bf',
    marginTop: 28,
  },
  formData: {
    marginLeft: 25,
    marginBottom: 32,
    marginRight: 16,
  },
  input: {
    flex: 1,
    borderBottomWidth: 0.8,
    borderColor: '#e6e7e8',
    padding: 8,
    width: 330,
    margin: 10,
  },
  pictureStyle: {
    width: 128,
    height: 128,
    marginTop: 32,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6e7e7',
    borderRadius: 2,
  },
  pictureText: {
    color: '#757575',
  },
  registerButton: {
    backgroundColor: '#88c9bf',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 260,
    height: 50,
    marginTop: 32,
  },
});
