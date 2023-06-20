import TennisGame from "./TennisGame.Ts";

describe('Partida iniciada', () => {
test('Ambos os jogadores começam com zero pontos', () => {
const jogo = new TennisGame();
expect(jogo.getPontuacao()).toEqual({ jogador1: 0, jogador2: 0 });
});

test('Jogador marca 15 pontos corretamente', () => {
const jogo = new TennisGame();
jogo.marcarPonto(1);
expect(jogo.getPontuacao()).toEqual({ jogador1: 15, jogador2: 0 });
});

test('Jogador marca 30 pontos corretamente', () => {
const jogo = new TennisGame();
jogo.marcarPonto(1);
jogo.marcarPonto(1);
expect(jogo.getPontuacao()).toEqual({ jogador1: 30, jogador2: 0 });
});

test('Jogador marca 40 pontos corretamente', () => {
const jogo = new TennisGame();
jogo.marcarPonto(1);
jogo.marcarPonto(1);
jogo.marcarPonto(1);
expect(jogo.getPontuacao()).toEqual({ jogador1: 40, jogador2: 0 });
});

test('Jogador vence o game ao alcançar 40 pontos', () => {
const jogo = new TennisGame();
jogo.marcarPonto(1);
jogo.marcarPonto(1);
jogo.marcarPonto(1);
jogo.marcarPonto(1); // Jogador 1 alcança 40 pontos
expect(jogo.vencedorDoGame()).toEqual('Jogador 1');
});

test('Ocorre empate (deuce) quando ambos os jogadores alcançam 40 pontos', () => {
const jogo = new TennisGame();
jogo.marcarPonto(1);
jogo.marcarPonto(1);
jogo.marcarPonto(1);
jogo.marcarPonto(2); // Jogador 2 alcança 40 pontos
expect(jogo.getPontuacao()).toEqual({ jogador1: 40, jogador2: 40 });
expect(jogo.vencedorDoGame()).toEqual('Empate');
});

test('Jogador 1 em vantagem e ganha o game corretamente', () => {
const jogo = new TennisGame();
jogo.marcarPonto(1);
jogo.marcarPonto(1);
jogo.marcarPonto(1);
jogo.marcarPonto(2);
jogo.marcarPonto(2);
jogo.marcarPonto(2);
jogo.marcarPonto(1);
jogo.marcarPonto(1);
expect(jogo.vencedorDoGame()).toBe('Jogador 1');
});
}
)
