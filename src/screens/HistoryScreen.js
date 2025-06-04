// src/screens/HistoryScreen.js
import React, { useState, useCallback } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { getData } from "../services/storage";

const HistoryScreen = () => {
  const [history, setHistory] = useState([]);

  // useFocusEffect atualiza os dados toda vez que a tela entra em foco
  useFocusEffect(
    useCallback(() => {
      const loadHistory = async () => {
        const data = await getData();
        setHistory(data.reverse()); // Mostra os mais recentes primeiro
      };
      loadHistory();
    }, [])
  );

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemDate}>{item.timestamp}</Text>
      <Text>
        Umidade: {item.umidade}% | Inclinação: {item.inclinacao}°
      </Text>
      <Text style={{ fontWeight: "bold" }}>Risco: {item.risco}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {history.length === 0 ? (
        <Text style={styles.emptyText}>Nenhum registro encontrado.</Text>
      ) : (
        <FlatList
          data={history}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  item: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginVertical: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eee",
  },
  itemDate: {
    fontSize: 12,
    color: "#666",
    marginBottom: 5,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 18,
  },
});

export default HistoryScreen;
