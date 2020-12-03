import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components';
import { Container } from '../components/layout';
import { theme } from '../components/theme';

export default function InfoEvents() {
  const styles = StyleSheet.create({
    titleBox: {
      height: 32,
      width: 344,
      alignItems: 'flex-start',
      backgroundColor: '#cfe9e5',
      paddingLeft: 16,
      borderRadius: 2,
      elevation: 3,
    },
    titleText: {
      fontFamily: 'Roboto_500Medium',
      fontSize: 16,
      color: '#434343',
    },
    contentBox: {
      flex: 1,
      flexDirection: 'column',
      flexWrap: 'wrap',
      backgroundColor: 'white',
      flexShrink: 1,
      width: 344,
      marginBottom: 8,
      borderRadius: 2,
      elevation: 3,
    },
    textBoxTitle: {
      alignContent: 'center',
      paddingLeft: 16,
      paddingTop: 16,
      fontFamily: 'Roboto_400Regular',
      fontSize: 12,
      color: '#589b9b',
    },
    textDescription: {
      alignContent: 'center',
      paddingLeft: 16,
      fontSize: 14,
      flexWrap: 'wrap',
      fontFamily: 'Roboto_400Regular',
      color: '#757575',
    },
  });

  return (
    <PaperProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <ScrollView>
          <Container>
            <View style={styles.titleBox}>
              <Text style={styles.titleText}>
                Feira de Adoção de Cães e Gatos
              </Text>
            </View>
            <View style={styles.contentBox}>
              <View>
                <Text style={styles.textBoxTitle}>DATA</Text>
                <Text style={styles.textDescription}>
                  Domingo 16 de outubro
                </Text>
              </View>
              <View>
                <Text style={styles.textBoxTitle}>LOCAL</Text>
                <Text style={styles.textDescription}>
                  Petz - SIA Trecho 2, ao lado da Gravia
                </Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.textBoxTitle}>INFORMAÇÕES</Text>
                <Text style={styles.textDescription}>
                  Venha nos prestigiar e traga sua doação amiga! Toda doação é
                  bem vinda
                </Text>
              </View>
              <View>
                <Text style={styles.textBoxTitle}>HORA</Text>
                <Text style={styles.textDescription}>11H às 15h</Text>
              </View>
            </View>

            <View style={styles.titleBox}>
              <Text style={styles.titleText}>
                Vacinação Contra a Raiva Animal
              </Text>
            </View>
            <View style={styles.contentBox}>
              <View>
                <Text style={styles.textBoxTitle}>DATA</Text>
                <Text style={styles.textDescription}>10 e 17 de setembro</Text>
              </View>
              <View>
                <Text style={styles.textBoxTitle}>LOCAL</Text>
                <Text style={styles.textDescription}>
                  Em frente a centros de saúde do DF
                </Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.textBoxTitle}>INFORMAÇÕES</Text>
                <Text style={styles.textDescription}>
                  Ocorre no próximo abado, 10 de stembro, a primeira etapa da
                  fase urbana da campanha de vacinação contra raiva no Distrito
                  Federal. As regiões foram divididas em dois grandes blocos. A
                  primeira fase atenderá cerca de 21 cidades em mais de 200
                  postos. A segunda fase acontecerá em 17 de setembro e
                  contemplará as 11 cidades mais populosas do DF
                </Text>
              </View>
              <View>
                <Text style={styles.textBoxTitle}>HORA</Text>
                <Text style={styles.textDescription}>11H às 15h</Text>
              </View>
            </View>
          </Container>
        </ScrollView>
      </ThemeProvider>
    </PaperProvider>
  );
}
