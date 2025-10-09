import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/page/home';
import Home2 from './src/page/home2';
import Home3 from './src/page/home3';
import Home4 from './src/page/home4';
import Home5 from './src/page/home5';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home}
         options={{
          title:"Tela Inicial",
          headerStyle: { backgroundColor: "#000000"},
          headerTintColor: "#FFa500",
           }}/>
        <Stack.Screen name="home2" component={Home2}
         options={{
          title:"Tela Inicial",
          headerStyle: { backgroundColor: "#000000"},
          headerTintColor: "#FFa500",
           }}/>
        <Stack.Screen name="home3" component={Home3}
         options={{
          title:"Tela Inicial",
          headerStyle: { backgroundColor: "#000000"},
          headerTintColor: "#FFa500",
           }}/>
        <Stack.Screen name="home4" component={Home4}
         options={{
          title:"Tela Inicial",
          headerStyle: { backgroundColor: "#000000"},
          headerTintColor: "#FFa500",
           }}/>
        <Stack.Screen name="home5" component={Home5}
         options={{
          title:"Tela Inicial",
          headerStyle: { backgroundColor: "#000000"},
          headerTintColor: "#FFa500",
           }}/>
      </Stack.Navigator>  
    </NavigationContainer>
    
  );
}

