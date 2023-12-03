import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Firebase from './Firebase';

export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);

  function cadastrar() {
    Firebase.auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(() => {
        Alert.alert('Atenção', 'Dados cadastrados com sucesso. Faça login..');
        navigation.navigate('Login', { email });
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/email-already-in-use') {
          Alert.alert('Atenção', 'Este e-mail já tem cadastro.');
        } else if (errorCode == 'auth/weak-password') {
          Alert.alert('Atenção', 'Deve ter no mínimo 6 caracteres.');
        } else if (errorCode == 'auth/invalid-email') {
          Alert.alert('Atenção', 'Este email é inválido.');
        }
        Alert.alert(errorCode);
      });
  }

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Cadastre-se </Text>
      <Image
        source={require('../assets/chapeudepalha.png')}
        style={estilo.img}
      />

      <TextInput
        style={estilo.input}
        onChangeText={(email) => setEmail(email)}
        value={email}
        placeholder="Digite o seu Email"
        required
      />
      <TextInput
        style={estilo.input}
        secureTextEntry={true}
        onChangeText={(senha) => setSenha(senha)}
        value={senha}
        placeholder="Digite a sua Senha"
        required
      />
      <TouchableOpacity
        style={estilo.botao}
        onPress={() => {
          cadastrar();
        }}>
        <Text> Cadastrar </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={estilo.botao}
        onPress={() => navigation.navigate('Acesso')}>
        <Text> Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#fff',
    fontSize: 20,
    width: 300,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  botao: {
    backgroundColor: '#fff',
    fontSize: 20,
    width: 200,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 15,
  },
  titulo: {
    margin: 24,
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  img: {
    width: 250,
    height: 250,
  },
});
