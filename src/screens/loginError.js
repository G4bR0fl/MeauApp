import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const Stack = createStackNavigator();

export default function loginError({ navigation }) {
    return (

        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#589b9b" />
            <Text style={styles.errorText}>Ops!</Text>
            <Text style={{ color: '#757575' }}>Você não pode realizar esta ação sem possuir um cadastro</Text>
            <TouchableOpacity>
                <View style={styles.registerButton}>
                    <Text style={{ color: '#434343' }}>FAZER CADASTRO</Text>
                </View>
            </TouchableOpacity>
            <Text style={{ color: '#757575' }}>Já possui cadastro?</Text>
            <TouchableOpacity>
                <View style={styles.registerButton}>
                    <Text style={{ color: '#434343' }}>FAZER LOGIN</Text>
                </View>
            </TouchableOpacity>
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    errorText: {
        fontFamily: 'Courgette_400Regular',
        color: '#88c9bf',
        fontSize: 53,
        marginTop: 52,
        marginBottom: 52,
    },
    registerButton: {
        backgroundColor: '#88c9bf',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: 260,
        height: 50,
        marginTop: 16,
        marginBottom: 42,
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#e6e6df',
    },
});