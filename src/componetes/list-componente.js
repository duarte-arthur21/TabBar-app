import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import { estilo } from '../../../Style';

export default function List() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Listar!</Text>

      <Text style={estilo.text}> Usuario 1:</Text>
      <Text style={estilo.text}> Usuario 2:</Text>
      <Text style={estilo.text}> Usuario 3:</Text>
      <Text style={estilo.text}> Usuario 4:</Text>
      <Text style={estilo.text}> Usuario 5:</Text>
      <Text style={estilo.text}> Usuario 6:</Text>
      <Text style={estilo.text}> Usuario 7:</Text>
      <Text style={estilo.text}> Usuario 8:</Text>
      <Text style={estilo.text}> Usuario 9:</Text>



      <StatusBar style="auto" />
    </View>
  );
}