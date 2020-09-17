import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Button, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts, Roboto_400Regular, Roboto_500Medium} from  '@expo-google-fonts/roboto';
import { AppLoading } from 'expo';

const Stack = createStackNavigator();

export default function profileRegister({navigation}) {
	
	let [fontsLoaded] = useFonts({
		Roboto_400Regular,
		Roboto_500Medium,
	});

	if ( !fontsLoaded ){
		return <AppLoading />
	}

	return (
		<ScrollView> 
			<StatusBar barStyle="light-content" backgroundColor="#88c9bf" />

			<View style={styles.container}>
				<View style={styles.header}></View>

				<View style={styles.infoBox}>
					<Text style={{fontFamily: 'Roboto_400Regular'}}>
						As informações preenchidas serão divulgadas
						apenas para a pessoa com a qual você realizar
						o processo de adoção e/ou apadrinhamento,
						após a formalização do processo.
					</Text>
				</View>

				<View style={styles.formData}>
					<Text style={styles.personalInfoText}>INFORMAÇÕES PESSOAIS</Text>
					
					<TextInput 
						keyboardType='default'
						style={styles.input}
						placeholder='Nome Completo'
					/>
					<TextInput 
						keyboardType='numeric'
						style={styles.input}
						placeholder='Idade'
					/>
					<TextInput 
						keyboardType='email-address'
						style={styles.input}
						placeholder='E-mail'
					/>
					<TextInput 
						keyboardType='default'
						style={styles.input}
						placeholder='Estado'
					/>
					<TextInput 
						keyboardType='default'
						style={styles.input}
						placeholder='Cidade'
					/>
					<TextInput 
						multiline
						keyboardType='default'
						style={styles.input}
						placeholder='Endereço'
					/>
					<TextInput 
						keyboardType='numeric'
						style={styles.input}
						placeholder='Telefone'
					/>

					<Text style={styles.personalInfoText}>INFORMAÇÕES DE PERFIL</Text>
					<TextInput 
						keyboardType='default'
						style={styles.input}
						placeholder='Nome de usuário'
					/>
					<TextInput 
						style={styles.inputFont}
						secureTextEntry={true}
						keyboardType='default'
						style={styles.input}
						courgette			placeholder='Senha'
					/>
					<TextInput 
						secureTextEntry={true}
						keyboardType='default'
						style={styles.input}
						placeholder='Confirmação de senha'
					/>

					<Text style={styles.personalInfoText}>FOTO DE PERFIL</Text>
					<View style={styles.pictureStyle}>
						<Icon name='control-point' style={styles.pictureText} />
						<Text style={styles.pictureText}>adicionar foto</Text>
					</View> 
					<TouchableOpacity>
						<View style={styles.registerButton}>
							<Text>FAZER CADASTRO</Text>
						</View>
					</TouchableOpacity>

				</View>

			</View>

			<Button title="Go back" onPress={() => navigation.goBack()} />

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
	pictureStyle: { // Consertar detalhes
		width: 128,
		height: 128,
		marginTop: 32,
		alignItems: 'center',
		alignSelf: 'center',
		justifyContent: 'center',
		backgroundColor: '#e6e7e7',
		borderRadius:2,
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
		height:50,
		marginTop: 32,
	},

});



