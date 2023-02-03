import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { estilo } from '../../../Style';
import List from './componetes/list-componente';

export default function Listar() {
  return (
    <View style={estilo.container}>
        <List/>
      <StatusBar style="auto" />
    </View>
  );
}