# 2048 React

## Sobre o Jogo

2048 é um jogo de puzzle numérico jogado em uma grade 4x4. O objetivo é deslizar peças numeradas pela grade para combinar peças do mesmo valor, criando uma peça com o número 2048. O jogo continua além desse ponto, permitindo que os jogadores alcancem pontuações ainda mais altas.

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **React**: Uma biblioteca JavaScript para construir interfaces de usuário.
- **Vite**: Um build tool e dev server que oferece uma experiência de desenvolvimento mais rápida para projetos web modernos.
- **JavaScript (ES6+)**: Utilizado para a lógica do jogo e manipulação do DOM.
- **CSS3**: Para estilização e layout responsivo.
- **HTML5**: Estruturação do conteúdo da aplicação.
- **LocalStorage**: Utilizado para armazenar o recorde do jogador localmente no navegador.

## Funcionalidades

- Tabuleiro de jogo 4x4 interativo
- Movimentação das peças usando as teclas de seta
- Cálculo e exibição da pontuação atual
- Armazenamento e exibição do recorde do jogador
- Detecção de fim de jogo
- Botão de reinício do jogo

## Funcionalidades Adicionais

Além das funcionalidades básicas do jogo 2048, este projeto inclui algumas características extras:

- **Bomba**: Uma habilidade especial que é desbloqueada quando o jogador atinge um tile de valor 128 ou superior. A bomba permite ao jogador remover um grupo de tiles do tabuleiro.

- **Power-ups**: 
  - **Congelar**: Impede que novas peças apareçam por algumas jogadas.
  - **Remover**: Permite remover uma peça específica do tabuleiro.

- **Animações**: Inclui animações para a explosão da bomba, melhorando a experiência visual do jogo.

- **Responsividade**: O jogo é responsivo e pode ser jogado tanto em desktops quanto em dispositivos móveis.

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

- `src/App.jsx`: Componente principal que gerencia o estado do jogo e a lógica principal.
- `src/components/`: Pasta contendo componentes React reutilizáveis (como Board e GameOver).
- `src/utils/gameLogic.js`: Arquivo contendo a lógica do jogo, incluindo movimentação das peças e verificação de fim de jogo.
- `src/styles/`: Pasta contendo arquivos CSS para estilização do jogo.

## Desafios Técnicos

Durante o desenvolvimento, alguns desafios técnicos foram enfrentados e superados:

1. Implementação da lógica de movimento das peças, garantindo que as peças se movam e se combinem corretamente.
2. Criação de power-ups e habilidades especiais, como a bomba, sem quebrar o equilíbrio do jogo.
3. Desenvolvimento de uma interface responsiva que funcione bem em diferentes tamanhos de tela.
4. Implementação de animações suaves para melhorar a experiência do usuário.


## Como Executar o Projeto

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone este repositório:
   ```
   git clone https://github.com/jefersonmarciano/game-2044.git
   ```
3. Navegue até a pasta do projeto:
   ```
   cd 2048-react
   ```
4. Instale as dependências:
   ```
   npm install
   ```
5. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```
6. Abra seu navegador e acesse `http://localhost:5173` (ou a porta indicada no terminal).

## Como Jogar

- Use as teclas de seta (↑ ↓ ← →) para mover as peças no tabuleiro (em desktop).
- Em dispositivos móveis, deslize o dedo na direção desejada para mover as peças.
- Quando duas peças com o mesmo número se tocam, elas se fundem em uma nova peça com a soma dos valores.
- O objetivo é criar uma peça com o valor 2048.
- O jogo termina quando não há mais movimentos possíveis no tabuleiro.

Divirta-se jogando 2048!

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias ou correções.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.