// App.js
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from './src/screens/WelcomeScreen';
import DataInputScreen from './src/screens/DataInputScreen';
import RiskViewScreen from './src/screens/RiskViewScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import MitigationScreen from './src/screens/MitigationScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: {backgroundColor: '#2c3e50'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
        }}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{title: 'Bem-Vindo'}}
        />
        <Stack.Screen
          name="DataInput"
          component={DataInputScreen}
          options={{title: 'Inserir Dados'}}
        />
        <Stack.Screen
          name="RiskView"
          component={RiskViewScreen}
          options={{title: 'Visualização de Riscos'}}
        />
        <Stack.Screen
          name="History"
          component={HistoryScreen}
          options={{title: 'Histórico'}}
        />
        <Stack.Screen
          name="Mitigation"
          component={MitigationScreen}
          options={{title: 'Ações de Mitigação'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
