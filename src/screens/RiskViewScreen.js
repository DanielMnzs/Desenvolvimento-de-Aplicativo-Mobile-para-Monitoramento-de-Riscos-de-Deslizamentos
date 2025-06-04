// src/screens/RiskViewScreen.js
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const getRiskStyle = (risco) => {
  switch (risco) {
    case "Alto":
      return { color: "#e74c3c", emoji: "🚨" };
    case "Médio":
      return { color: "#f39c12", emoji: "⚠️" };
    default:
      return { color: "#2ecc71", emoji: "✅" };
  }
};

const RiskViewScreen = ({ route, navigation }) => {
  const { currentRecord } = route.params;
  const { color, emoji } = getRiskStyle(currentRecord.risco);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Análise de Risco Atual</Text>
      <Text style={[styles.riskLevel, { color }]}>
        {currentRecord.risco.toUpperCase()} {emoji}
      </Text>
      <View style={styles.details}>
        <Text style={styles.detailText}>
          💧 Umidade do Solo: {currentRecord.umidade}%
        </Text>
        <Text style={styles.detailText}>
          📐 Inclinação: {currentRecord.inclinacao}°
        </Text>
        <Text style={styles.detailText}>
          🗓️ Data: {currentRecord.timestamp}
        </Text>
      </View>

      {currentRecord.risco !== "Baixo" && (
        <Button
          title="Ver Ações de Mitigação"
          onPress={() => navigation.navigate("Mitigation")}
          color="#e67e22"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  riskLevel: { fontSize: 36, fontWeight: "bold", marginBottom: 30 },
  details: { marginBottom: 40, alignItems: "flex-start" },
  detailText: { fontSize: 18, marginBottom: 10 },
});

export default RiskViewScreen;
