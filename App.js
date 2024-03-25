import { StyleSheet, View, TextInput, TouchableOpacity, Image, Text } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.form}>
        <View style={styles.logo}>
          <Image source={require('./assets/logo-pra-fazer.png')}></Image>
        </View>
        <View style={styles.input}>
          <TextInput placeholder="E-mail"></TextInput>
        </View>
        <View style={styles.input}>
          <TextInput placeholder="Senha"></TextInput>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.buttonText}>Criar Usuário</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FF6600',
  },
  form: {
    padding: 30,
  },
  logo: {
    alignItems: 'center',
    paddingTop: 100,
    marginBottom: 80,
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    color: '#DDD',
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#070A52',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
  },
  textUsuario: {
    color: '#FFFFFF'
  }
});
