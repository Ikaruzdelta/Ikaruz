var valores = [5, 8, 9, 10, 38, 22];

function busca(num) {
  for (i = 0; i < 6; i++) {
    if (num == valores[i]) return i;
  }
  return -1; //Se não encontrar
}

// Código para busca rápida

function buscaBin(num) { 
  let inicio, fim;
  inicio = 0;
  fim = 9;

  while (inicio < fim) {
    meio = parseInt(inicio + fim) / 2;
    if (num == valores[meio]) {
      return meio;
    } else {
      if (num > valores[meio]) {
        inicio = meio + 1;
      } else {
        fim = meio - 1;
      }
    }
  }
  return -1;
}
