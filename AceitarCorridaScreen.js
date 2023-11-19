import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AceitarCorridaScreen = ({ route, navigation }) => {
  const { carroSelecionado } = route.params;
  const [aceitaCorrida, setAceitaCorrida] = useState(false);

  const aceitarCorrida = () => {
    // Lógica para aceitar a corrida
    setAceitaCorrida(true);
  };

  const iniciarViagem = () => {
    // Lógica para iniciar a viagem, pode incluir navegação para a tela de ViagemMap
    navigation.navigate('ViagemMap', { ...route.params, aceitaCorrida: true });
  };

  return (
    <View style={styles.container}>
      {!aceitaCorrida ? (
        <>
          <Text style={styles.text}>Você deseja aceitar a corrida?</Text>
          <Button title="Aceitar Corrida" onPress={aceitarCorrida} />
        </>
      ) : (
        <>
          <Text style={styles.text}>Corrida aceita! Aguarde...</Text>
          <Button title="Iniciar Viagem" onPress={iniciarViagem} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default AceitarCorridaScreen;