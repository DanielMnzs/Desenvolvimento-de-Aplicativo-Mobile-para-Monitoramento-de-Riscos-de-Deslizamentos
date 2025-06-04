Aplicativo de Monitoramento de Riscos de Deslizamentos
Este repositório contém o código-fonte do projeto desenvolvido para a disciplina de Advanced Programming And Mobile Dev. O aplicativo simula uma rede de sensores inteligentes para o monitoramento e prevenção de riscos de deslizamentos de terra.

🎯 Objetivo do Projeto
O objetivo principal é desenvolver uma ferramenta mobile utilizando React Native que seja capaz de monitorar indicadores cruciais como umidade do solo e inclinação de encostas. Inspirado em sistemas de alerta precoce (Early Warning Systems) como o Alerta Rio, o aplicativo processa esses dados para prever riscos e emitir alertas, visando ser uma solução simples, prática e de alto impacto social.

✨ Funcionalidades Principais
O aplicativo é estruturado em 5 telas principais que guiam a experiência do usuário:

Tela de Boas-vindas: Uma tela inicial que apresenta a proposta do aplicativo e convida o usuário a começar.
Tela de Inserção de Dados: Permite ao usuário simular a entrada de dados dos sensores, inserindo valores para umidade e inclinação.
Tela de Visualização de Riscos: Exibe o resultado da análise, classificando o risco como Baixo, Médio ou Alto, com um destaque visual correspondente.
Tela de Histórico de Monitoramento: Apresenta uma lista com todos os registros de medições já salvos no dispositivo, permitindo a consulta do histórico.
Tela de Ações de Mitigação: Oferece informações importantes e ações preventivas a serem tomadas em cada nível de risco, com foco na segurança do usuário.
🛠️ Tecnologias Utilizadas
React Native: Framework para o desenvolvimento multiplataforma do aplicativo.
React Navigation: Biblioteca para o gerenciamento de rotas e da navegação entre as telas.
AsyncStorage: Solução para o armazenamento de dados local e persistente no dispositivo (histórico de medições).
🚀 Como Executar o Projeto
Para clonar e executar este projeto localmente, certifique-se de ter o ambiente de desenvolvimento React Native configurado para "React Native CLI Quickstart", incluindo Node.js, JDK 17 e Android Studio.

Clone este repositório:

Bash

git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
Navegue até a pasta do projeto:

Bash

cd nome-da-pasta-do-projeto
Instale as dependências:

Bash

npm install
Inicie o emulador Android:

Abra o Android Studio.
Vá até o Virtual Device Manager e inicie um emulador.
Execute o aplicativo:

Bash

npx react-native run-android
O aplicativo será compilado e instalado no emulador que está em execução.

👥 Integrantes
Nome Completo: [SEU NOME COMPLETO AQUI]

RM: [SEU RM AQUI]
Nome Completo: [NOME COMPLETO DO COLEGA AQUI]

RM: [RM DO COLEGA AQUI]
