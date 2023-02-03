import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { estilo } from '../../../Style';

export default function Home() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.text}>Home!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
