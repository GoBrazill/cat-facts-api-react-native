import { StyleSheet,Text, View } from 'react-native';

import { GlobalStyles } from './src/styles/GlobalStyles';
import api from './src/services/api';

export default function App() {
  return (
    <View style={GlobalStyles.container}>
      <Text> test </Text>
    </View>
  );
}

