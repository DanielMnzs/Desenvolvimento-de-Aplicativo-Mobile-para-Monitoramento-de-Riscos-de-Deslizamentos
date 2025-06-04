// src/screens/MitigationScreen.js
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const MitigationScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Ações de Mitigação e Prevenção 🛡️</Text>

      <Text style={styles.subtitle}>Em caso de Alerta de Risco ALTO:</Text>
      <Text style={styles.text}>
        • **Evacuação imediata:** Saia do local o mais rápido possível e procure
        um abrigo seguro.
      </Text>
      <Text style={styles.text}>
        • **Não use elevadores:** Utilize as escadas.
      </Text>
      <Text style={styles.text}>
        • **Ajude pessoas com dificuldade de locomoção:** Auxilie idosos,
        crianças e pessoas com deficiência.
      </Text>
      <Text style={styles.text}>
        • **Contate a Defesa Civil:** Ligue para o número 199.
      </Text>

      <Text style={styles.subtitle}>Medidas Preventivas Gerais:</Text>
      <Text style={styles.text}>
        • **Não desmate encostas:** A vegetação ajuda a proteger o solo.
      </Text>
      <Text style={styles.text}>
        • **Evite cortes e aterros irregulares:** Eles podem enfraquecer o
        terreno.
      </Text>
      <Text style={styles.text}>
        • **Conserte vazamentos:** A infiltração de água no solo aumenta o
        risco.
      </Text>
      <Text style={styles.text}>
        • **Não jogue lixo em encostas:** O acúmulo de detritos pode causar
        instabilidade.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "white" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#c0392b",
  },
  text: { fontSize: 16, lineHeight: 24, marginBottom: 10 },
});

export default MitigationScreen;
