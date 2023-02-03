import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { estilo } from "../../Style";

export default function Cadastro(){
    return(
        <View >
          <Text style={estilo.titulo}>Cadastre um novo Usuario:</Text>
                <TextInput
                style={estilo.textInput}
                placeholder="Nome completo *"
                />
                <TextInput
                style={estilo.textInput}
                placeholder="E-mail *"
                />
                <TextInput
                style={estilo.textInput}
                placeholder="Telefone*"
                />
                <TextInput
                style={estilo.textInput}
                placeholder="Nova Senha*"
                />
    
           <Text style={estilo.titulo}>Agora converta o valor</Text>
                <TouchableOpacity>
                    <Text style={estilo.buttom}>
                      Cadastrar</Text>
                </TouchableOpacity>
    
        </View>
    );
}