import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Provider as PaperProvider, Text } from 'react-native-paper';
import { ThemeProvider } from 'styled-components';
import { Container } from '../components/layout';
import { theme } from '../components/theme';

export default function InfoLegislation() {
  const styles = StyleSheet.create({
    lawTitle: {
      fontFamily: 'Roboto_500Medium',
      color: '#434343',
      fontSize: 16,
      marginBottom: 24,
    },
    chapterTitle: {
      fontFamily: 'Roboto_500Medium',
      fontSize: 12,
      color: '#589b9b',
    },
    articleStyle: {
      fontFamily: 'Roboto_400Regular',
      fontSize: 14,
      color: '#589b9b',
    },
    textStyle: {
      fontFamily: 'Roboto_400Regular',
      fontSize: 14,
      color: '#757575',
    },
  });

  return (
    <PaperProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <ScrollView>
          <Container>
            <Text style={styles.lawTitle}>
              Lei nº 14.483, de 16 de julho de 2007
            </Text>
            <Text style={styles.chapterTitle}>CAPÍTULO II – DAS DOAÇÕES</Text>
            <Text style={styles.articleStyle}>
              Art. 4°
              <Text>
                É permitida a realização de eventos de doação de cães e gatos em
                estabelecimentos devidamente legalizados.
              </Text>
            </Text>
            <Text>
              § 1° A feira só poderá ser realizada sob a responsabilidade de
              pessoa física ou jurídica, de direito público ou privado, sem fins
              lucrativos mantenedoras ou responsáveis por cães e gatos.
            </Text>
            <Text>
              § 2° Para identificação da entidade, associação, instituição ou
              pessoa promotora do evento é necessário a existência de uma placa,
              em local visível, no espaço de realização do evento de doação,
              contendo: nome do promotor, seja pessoa física ou jurídica, CPF ou
              CNPJ, com respectivo telefone.
            </Text>
            <Text>
              § 3° Pet shops ou clínicas veterinárias podem promover doações de
              animais, desde que haja identificação do responsável pela
              atividade, no local de exposição dos animais, atendendose às
              exigências previstas no parágrafo anterior.
            </Text>
            <Text>
              § 4° Os animais expostos para doação devem estar devidamente
              esterilizados e submetidos a controle de endo e ectoparasitas, bem
              como submetidos ao esquema de vacinação contra a raiva e doenças
              espécie-específicas, conforme respectiva faixa etária, mediante
              atestados.
            </Text>
            <Text style={styles.articleStyle}>
              Art. 5°
              <Text>
                As doações serão regidas por contrato específico, cujas
                obrigações previstas, por escrito, devem contemplar os dados
                qualificativos do animal, do adotante e do doador, as
                responsabilidades do adotante, as penalidades no caso de
                descumprimento, a permissão de monitoramento pelo doador e as
                condições de bem-estar e manutenção do animal. Parágrafo único.
                Antes da consumação da doação e da assinatura do contrato, o
                potencial adotante deve ser amplamente informado e
                conscientizado sobre a convivência da família com um animal,
                noções de comportamento, expectativa de vida, provável porte do
                animal na fase adulta (no caso de filhotes), necessidades
                nutricionais e de saúde.
              </Text>
            </Text>
            <Text style={styles.articleStyle}>
              Art. 6°
              <Text>
                No ato da doação deve ser providenciado o RGA do animal, em nome
                do novo proprietário.
              </Text>
            </Text>
            <Text style={styles.articleStyle}>
              Art. 7°
              <Text>
                Aqueles elencados no § 1o do art. 4o podem cobrar taxa de adoção
                do animal, devendo para tanto fornecer ao adotante recibo
                especificando o valor da taxa e demais gastos.
              </Text>
            </Text>
          </Container>
        </ScrollView>
      </ThemeProvider>
    </PaperProvider>
  );
}
