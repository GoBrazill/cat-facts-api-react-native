import { Text, View, Button, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';

import { useFonts, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";

import { GlobalStyles } from './src/styles/GlobalStyles';
import api from './src/services/api';


export default function App() {
  const [fontesCarregadas] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold,
  });


  const [fato, setFato] = useState('Clique no botão para gerar um fato!')
  async function carregarFatos() {
    try {
      const res = await api.get('fact')
      setFato(res.data.fact)
    } catch (err) {
      setFato('Não foi possível carregar um fato!')
    }
  }

  useEffect(() => {
    carregarFatos()
  }, [])

  if(!fontesCarregadas) {
    return null
  }

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}> Fatos sobre Gatos</Text>
      <Text style={GlobalStyles.fact}> {fato} </Text>
      <TouchableOpacity title='Carregar Fato' onPress={carregarFatos} style={GlobalStyles.button} >
        <Text style={GlobalStyles.textButton}> Carregar outro fato </Text>
      </TouchableOpacity>

    </View>
  );
}

