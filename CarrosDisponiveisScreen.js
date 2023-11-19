import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const CarrosDisponiveisScreen = ({ route, navigation }) => {
  const { origem, destino } = route.params;
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    const obterCarrosDisponiveis = async () => {
      try {
        const response = await fetch('https://api-exemplo.com/obter-carros', {
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
          const carrosDisponiveis = await response.json();
          setCarros(carrosDisponiveis);
        } else {
          console.error('Erro ao obter carros disponíveis');
        }
      } catch (error) {
        console.error('Erro de rede:', error);
      }
    };

    obterCarrosDisponiveis();
  }, [origem, destino]);

  const data = [
    {
      id: "carro 1",
      nome: "carro 1",
      imagemUrl: "https://links.papareact.com/3pn",
    },
    {
      id: "carro 2",
      nome: "carro 2",
      imagemUrl: "https://links.papareact.com/5w8",
    },
    {
      id: "carro 3",
      nome: "carro 3",
      imagemUrl: "https://links.papareact.com/7pf",
    }
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('AceitarCorridaScreen', { origem, destino, carroSelecionado: item })}
    >
      <Image source={{ uri: item.imagemUrl }} style={styles.carroImagem} />
      <Text style={styles.itemText}>{item.nome}</Text>
    </TouchableOpacity>
  );
  

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    backgroundColor: '#3498db',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  carroImagem: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  itemText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CarrosDisponiveisScreen;