import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components';
import AuthContext from '../components/auth/auth.context';
import { theme } from '../components/theme';

export default function ProfileUser() {
  const styles = StyleSheet.create({
    headerBar: {
      backgroundColor: '#b6edd9',
    },
    profileImage: {
      marginTop: 16,
      marginBottom: 12,
      alignSelf: 'center',
    },
    contentValues: {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textLabel: {
      marginTop: 36,
      marginBottom: 8,
      fontSize: 18,
      color: '#589b9b',
    },
    textContent: {
      fontSize: 18,
      color: '#757575',
    },
    displayName: {
      marginTop: 12,
      fontSize: 20,
      color: '#434343',
    },
    button: {
      height: 50,
      width: '60%',
      alignSelf: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      marginTop: 32,
      marginBottom: 24,
      backgroundColor: '#88c9bf',
    },
    textButton: {
      alignContent: 'center',
      alignSelf: 'center',
      color: '#757575',
      fontSize: 18,
    },
    spacing: {
      marginBottom: 50,
    },
    spacingSocial: {
      marginTop: 70,
    },
  });

  const auth = React.useContext(AuthContext);
  return (
    <PaperProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <SafeAreaView>
          <ScrollView>
            <View>
              <Avatar.Image
                size={112}
                style={styles.profileImage}
                source={{ uri: auth?.profile.photo }}
              />
            </View>
            <View style={styles.contentValues}>
              <Text style={styles.displayName}>{auth?.profile.name}</Text>
              <Text style={styles.textLabel}>NOME COMPLETO</Text>
              <Text style={styles.textContent}>{auth?.profile.name}</Text>
              <Text style={styles.textLabel}>IDADE</Text>
              <Text style={styles.textContent}>
                {auth?.profile.age
                  ? auth?.profile.age + ' anos'
                  : 'Não informado'}
              </Text>
              <Text style={styles.textLabel}>EMAIL</Text>
              <Text style={styles.textContent}>{auth?.profile.email}</Text>
              <Text style={styles.textLabel}>LOCALIZAÇÃO</Text>
              <Text style={styles.textContent}>
                {auth?.profile.cidade
                  ? auth?.profile.state
                    ? auth?.profile.cidade + ' - ' + auth?.profile.state
                    : ''
                  : 'Não informado'}
              </Text>
              <Text style={styles.textLabel}>ENDEREÇO</Text>
              <Text style={styles.textContent}>
                {auth?.profile.address
                  ? auth?.profile.address
                  : 'Não informado'}
              </Text>
              <Text style={styles.textLabel}>TELEFONE</Text>
              <Text style={styles.textContent}>
                {auth?.profile.phone ? auth?.profile.phone : 'Não informado'}
              </Text>
              <Text style={styles.textLabel}>NOME DE USUÁRIO</Text>
              <Text style={styles.textContent}>
                {auth?.profile.username
                  ? auth?.profile.username
                  : 'Não informado'}
              </Text>
              <Text style={styles.textLabel}>HISTÓRICO</Text>
              <Text style={styles.textContent}>Adotou 1 gato</Text>
              <Button
                style={styles.button}
                title="editar perfil"
                mode="contained"
                onPress={() => console.log('Editar')}
              >
                <Text style={styles.textButton}>EDITAR PERFIL</Text>
              </Button>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ThemeProvider>
    </PaperProvider>
  );
}
