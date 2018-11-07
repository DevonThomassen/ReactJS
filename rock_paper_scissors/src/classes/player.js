class Player {
  constructor(n) {
    this.name = n;
  }
}
let playerName = prompt('Choose your player name?');
if (playerName === null || playerName === '') playerName = 'Player 1';
let player1 = new Player(playerName.substring(0, 20));
let bot = new Player('Bot');

export default [player1, bot];