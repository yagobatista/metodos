function secante(max, precisao) {
  //coe array
  var coe = new Array();
  coe[0] = 3;
  coe[1] = -9;
  coe[2] = 0;
  coe[3] = 1;
  coe[4] = 0;
  coe[5] = 0;
  var valor = new Array();
  valor[1] = 0;
  valor[2] = 1;
  var string = "x1 = " + valor[1] + " -> f(x) = " + montar(coe, valor[1]) + "<br>";
  string += "x2 = " + valor[2] + " -> f(x) = " + montar(coe, valor[2]) + "<br>";
  max += 2;
  for (var i = 3; i <= max && modulo(montar(coe, valor[i - 1])) > precisao; i++) {
    valor[i] = valor[i - 1] - (montar(coe, valor[i - 1])) * ((valor[i - 1] - valor[i - 2]) / (montar(coe, valor[i - 1]) - montar(coe, valor[i - 2])));
    string += "x" + i + " =" + valor[i] + " -> f(x) = " + montar(coe, valor[i]) + "<br>";
  }
  document.getElementById('resultado').innerHTML = string;
}

function montar(coe, x) {
  var resultado = 0;
  for (var i = 0; i < coe.length; i++) {
    resultado = resultado + coe[i] * Math.pow(x, i);
  }
  return resultado;
}

function modulo(valor) {
  if (valor < 0) {
    return -1 * valor;
  }
  return valor;
}
