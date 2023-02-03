import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { estilo } from '../../../Style';

export default function Home() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.text}>Home!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 25,
    fontWeight: 'bold',
  },
});
