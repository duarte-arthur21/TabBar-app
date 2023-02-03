import { View } from 'react-native';
import  Cadastro from './componetes/create-componente';
import { estilo } from '../../../Style';

export default function Cadastrar() {
  return (
    <View style={estilo.container}>
      <Cadastro/>
    </View>
  );
}
