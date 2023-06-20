//https://dojopuzzles.com/problems/partida-de-tenis/ resolvendo o desafio

export class TennisGame{
class TennisGame {
  private pontuacao = { jogador1: 0, jogador2: 0 };

  marcarPonto(jogador: number): void {
    if (jogador === 1) {
      this.pontuacao.jogador1 += 15;
    } else if (jogador === 2) {
      this.pontuacao.jogador2 += 15;
    }
  }

  vencedorDoGame(): string | null {
    if (this.pontuacao.jogador1 === 40 && this.pontuacao.jogador2 < 40) {
      return 'Jogador 1';
    } else if (this.pontuacao.jogador2 === 40 && this.pontuacao.jogador1 < 40) {
      return 'Jogador 2';
    } else if (this.pontuacao.jogador1 >= 40 && this.pontuacao.jogador2 >= 40 && this.pontuacao.jogador1 === this.pontuacao.jogador2) {
      return 'Empate';
    } else if (this.pontuacao.jogador1 > 40 && this.pontuacao.jogador2 === this.pontuacao.jogador1 + 30) {
      return 'Jogador 2';
    } else if (this.pontuacao.jogador2 > 40 && this.pontuacao.jogador1 === this.pontuacao.jogador2 + 30) {
      return 'Jogador 1';
    } else {
      return null;
    }
  }
}
}

//npm init -y
//npm i -D jest
//npm test
