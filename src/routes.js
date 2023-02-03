import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Entypo, Feather, AntDesign} from '@expo/vector-icons';

import Home from './pages/Home';
import Cadastrar from './pages/Cadastrar';
import Listar from './pages/Listar';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
        tabBarOptions={{
            Style:{
                backgroundColor: '#121212',
                borderTopColor: 'transparent',
            },
            activeTintColor: '#FFF',
            tabStyle:{
                paddingBottom: 5,
                paddingTop: 5,
            }
        }}
        >
            <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
                tabBarIcon:({size, color}) => (
                    <Entypo name="home" size={size} color={color}/>
                )
            }}
            />
            <Tab.Screen 
            name="Cadastrar" 
            component={Cadastrar}
            options={{
                tabBarIcon:({size, color}) => (
                    <AntDesign name="adduser" size={size} color={color}/>
                )
            }}
            />
            <Tab.Screen 
            name="Listar" 
            component={Listar}
            options={{
                tabBarIcon:({size, color}) => (
                    <AntDesign name="menufold" size={size} color={color}/>
                )
            }}
            />
        </Tab.Navigator>
    )
}