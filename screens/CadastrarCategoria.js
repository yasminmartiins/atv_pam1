import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CadastroCategoria = () => {
  const [nomeCategoria, setNomeCategoria] = useState('');
  const [observacoes, setObservacoes] = useState('');

  const cadastrarCategoria = () => {
    console.log('Nome da categoria:', nomeCategoria);
    console.log('Observações:', observacoes);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/login.png')}
        style={styles.logo}
      />

      <Text style={styles.label}>NOME DA CATEGORIA:</Text>

      <TextInput
        style={styles.inputNome}
        placeholder="Digite o nome da categoria"
        value={nomeCategoria}
        onChangeText={(text) => setNomeCategoria(text)}
      />

      <Text style={styles.label}>OBSERVAÇÕES:</Text>

      <TextInput
        style={[styles.inputObs, styles.multilineInput]}
        placeholder="Digite as observações"
        value={observacoes}
        onChangeText={(text) => setObservacoes(text)}
        multiline={true}
      />

      <TouchableOpacity>
       <Text style={styles.button}> Cadastrar </Text> 
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  logo: {
    width: 250,
    height: 100,
    marginBottom: 20,
    borderRadius: 50, 
    marginLeft: 60,
    
  },
  label: {
    marginLeft: 10,
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputNome: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 17,
    padding: 8,
    marginBottom: 35,
  },
  inputObs: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 17,
    padding: 8,
    marginBottom: 35,
    textAlignVertical: 'top',
  },
  multilineInput: {
    height: 100,
  },
  button: {

    color: 'white',
    textAlign: 'center',
    backgroundColor: 'red', 
    borderRadius: 10, 
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    fontWeight: '700',
    fontSize: 16,
  },

});

export default CadastroCategoria;