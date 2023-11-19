import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ViagemScreen = () => {
    const navigation = useNavigation();
  
    const irParaCarrosDisponiveis = () => {
      navigation.navigate('CarrosDisponiveis', {
        origem: { latitude: 0, longitude: 0 },
        destino: { latitude: 1, longitude: 1 },
      });
    };  

  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');

  const solicitarViagem = async () => {
    try {
      const response = await fetch('https://api-transporte-exemplo.com/solicitar-viagem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          origem,
          destino,
        }),
      });

      if (response.ok) {
        // Aqui você pode processar a resposta da API se necessário
        console.log('Viagem solicitada com sucesso!');
      } else {
        console.error('Erro ao solicitar a viagem');
      }
    } catch (error) {
      console.error('Erro de rede:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Origem:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a origem"
        value={origem}
        onChangeText={(text) => setOrigem(text)}
      />

      <Text style={styles.label}>Destino:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o destino"
        value={destino}
        onChangeText={(text) => setDestino(text)}
      />

      <Button title="Solicitar Viagem" onPress={irParaCarrosDisponiveis} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default ViagemScreen;