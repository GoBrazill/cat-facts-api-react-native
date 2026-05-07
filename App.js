import { Text, View, Button, TouchableOpacity } from 'react-native';

import { GlobalStyles } from './src/styles/GlobalStyles';
import api from './src/services/api';
import { useState } from 'react';

export default function App() {

  const [fato, setFato] = useState('Clique no botão para gerar um fato!')
  async function carregarFatos() {
    try {
      const res = await api.get('fact')
      setFato(res.data.fact)
    } catch (err) {
      setFato('Erro ao carregar fato')
    }
  }

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}> Fatos sobre Gatos</Text>
      <Text style={GlobalStyles.fact}> {fato} </Text>
      <TouchableOpacity title='Carregar Fato' onPress={carregarFatos} style={GlobalStyles.button} >

      <Text style={GlobalStyles.textButton}> Carregar Fato </Text>
      </TouchableOpacity>
          
    </View>
  );
}

