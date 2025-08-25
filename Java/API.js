export function calcularProbabilidade(player, obstacle) {
  const distance = obstacle.x - player.x;
  const velocidadeObstaculo = 5;
  const collision = distance / velocidadeObstaculo;
  const climb = 10 / player.gravity / 2;

  let p = 0;
  if (distance > 0 && distance < 200) {
    const diff = Math.abs(collision - climb);
    p = 1 - (diff / climb);
  }

  return Math.min(Math.max(p, 0), 1);
}

export function medirQubit(probabilidade) {
  return Math.random() < probabilidade ? 1 : 0;
}

export function circunferencia(raio) {
  return 2 * Math.PI * raio;
}