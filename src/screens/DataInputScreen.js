// src/screens/DataInputScreen.js
import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {saveData} from '../services/storage';

const DataInputScreen = ({navigation}) => {
  const [umidade, setUmidade] = useState('');
  const [inclinacao, setInclinacao] = useState('');

  const handleSave = async () => {
    if (!umidade || !inclinacao) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const umidadeNum = parseFloat(umidade);
    const inclinacaoNum = parseFloat(inclinacao);

    // Lógica simples de risco
    let nivelRisco = 'Baixo';
    if (umidadeNum > 70 && inclinacaoNum > 15) {
      nivelRisco = 'Alto';
    } else if (umidadeNum > 50 && inclinacaoNum > 10) {
      nivelRisco = 'Médio';
    }

    const newRecord = {
      id: new Date().getTime().toString(),
      timestamp: new Date().toLocaleString('pt-BR'),
      umidade: umidadeNum,
      inclinacao: inclinacaoNum,
      risco: nivelRisco,
    };

    //await saveData(newRecord);

    Alert.alert('Sucesso', 'Dados salvos com sucesso!');
    setUmidade('');
    setInclinacao('');

    // Navega para a tela de risco, passando o registro atual
    navigation.navigate('RiskView', {currentRecord: newRecord});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Umidade do Solo (%)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={umidade}
        onChangeText={setUmidade}
        placeholder="Ex: 65"
      />
      <Text style={styles.label}>Inclinação da Encosta (°)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={inclinacao}
        onChangeText={setInclinacao}
        placeholder="Ex: 12"
      />
      <Button
        title="Analisar e Salvar Dados"
        onPress={handleSave}
        color="#27ae60"
      />
      <View style={{marginTop: 20}}>
        <Button
          title="Ver Histórico"
          onPress={() => navigation.navigate('History')}
          color="#8e44ad"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: '#fff'},
  label: {fontSize: 18, marginBottom: 5, color: '#333'},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    fontSize: 16,
  },
});

export default DataInputScreen;
