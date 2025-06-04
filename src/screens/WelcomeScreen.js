// src/screens/WelcomeScreen.js
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monitor de Riscos de Deslizamentos 🏞️</Text>
      <Text style={styles.subtitle}>
        Este aplicativo simula o monitoramento de sensores para prever riscos e
        proteger comunidades.
      </Text>
      <Button
        title="Iniciar Monitoramento"
        onPress={() => navigation.navigate("DataInput")}
        color="#3498db"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
    color: "#555",
  },
});

export default WelcomeScreen;
