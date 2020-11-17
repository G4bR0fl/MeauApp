import React from 'react';
import { ScrollView } from 'react-native';
import {
    Provider as PaperProvider,
    Text
} from 'react-native-paper';
import { ThemeProvider } from 'styled-components';
import { Container } from '../components/layout';
import { theme } from '../components/theme';


export default function InfoLegislation() {
    return (
        <PaperProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <ScrollView>
                    <Container>
                        <Text>InfoLegislation
                        
                        </Text>
                    </Container>
                </ScrollView>
            </ThemeProvider>
        </PaperProvider>
    );
}
