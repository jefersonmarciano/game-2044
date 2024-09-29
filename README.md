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

- Use as teclas de seta (↑ ↓ ← →) para mover as peças no tabuleiro.
- Quando duas peças com o mesmo número se tocam, elas se fundem em uma nova peça com a soma dos valores.
- O objetivo é criar uma peça com o valor 2048.
- O jogo termina quando não há mais movimentos possíveis no tabuleiro.

Divirta-se jogando 2048!

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias ou correções.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.