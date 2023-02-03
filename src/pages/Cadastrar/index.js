import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { estilo } from '../../../Style';

export default function Cadastrar() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.text}>Cadastrar!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
