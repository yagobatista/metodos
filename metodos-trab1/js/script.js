function secante(coe, max) {
  //coe array
  coe[0] = 1;
  coe[1] = 4;
  coe[2] = 5;
  coe[3] = 7;
  coe[4] = 3;
  coe[5] = 4;
  valor[0] = 0;
  valor[1] = 1;
  for (var i = 2; i < max; i++) {
    valor[i]
  }
}

function montar(coe, x) {
  var resultado;
  for (var i = 0; i < coe.length; i++) {
    resultado += coe[i] * math.pow(x, i);
  }
  return resultado;
}
