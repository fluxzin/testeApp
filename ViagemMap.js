import React, { useEffect, useState } from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { View, StyleSheet, Text } from 'react-native';

const ViagemMap = ({ route }) => {
  const { origem, destino, carroSelecionado } = route.params;
  const [caminho, setCaminho] = useState([]);

  useEffect(() => {
    // Aqui, você pode chamar uma API para obter o caminho com base nas coordenadas de origem e destino
    // Exemplo fictício
    const obterCaminho = async () => {
      try {
        // Substitua este trecho de código com a chamada real da API
        const response = await fetch('https://api-exemplo.com/obter-caminho', {
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
          const caminhoObtido = await response.json();
          setCaminho(caminhoObtido);
        } else {
          console.error('Erro ao obter caminho');
        }
      } catch (error) {
        console.error('Erro de rede:', error);
      }
    };

    obterCaminho();
  }, [origem, destino]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: origem.latitude,
          longitude: origem.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {/* Marcador de origem */}
        <Marker coordinate={origem} title="Origem" />

        {/* Marcador de destino */}
        <Marker coordinate={destino} title="Destino" />

        {/* Caminho */}
        <Polyline
          coordinates={caminho}
          strokeWidth={4}
          strokeColor="#3498db"
        />

        {/* Marcador do carro selecionado */}
        <Marker coordinate={carroSelecionado.localizacao} title={carroSelecionado.nome} pinColor="#2ecc71" />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default ViagemMap;