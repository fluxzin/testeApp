import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ViagemScreen from './ViagemScreen';
import CarrosDisponiveisScreen from './CarrosDisponiveisScreen';
import { StyleSheet } from 'react-native'; // Adicione esta linha
import ViagemMap from './ViagemMap';
import AceitarCorridaScreen from './AceitarCorridaScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Viagem" component={ViagemScreen} />
        <Stack.Screen name="CarrosDisponiveis" component={CarrosDisponiveisScreen} />
        <Stack.Screen name="ViagemMap" component={ViagemMap} />
        <Stack.Screen name="AceitarCorridaScreen" component={AceitarCorridaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});