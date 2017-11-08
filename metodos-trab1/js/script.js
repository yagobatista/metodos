function secante(coe, max, precisao) {
  //coe é uma array os coeficientes do polinomio
  var valor = new Array();
  valor[1] = 0;
  valor[2] = 1;
  var string = "chute inicial 1  x = " + valor[1] + " -> f(x) = " + montar(coe, valor[1]) + "<br>";
  string += "chute inicial 2 x = " + valor[2] + " -> f(x) = " + montar(coe, valor[2]) + "<br>";
  max += 3;
  for (var i = 3; i < max && modulo(montar(coe, valor[i - 1])) > precisao; i++) {
    valor[i] = valor[i - 1] - (montar(coe, valor[i - 1])) * ((valor[i - 1] - valor[i - 2]) / (montar(coe, valor[i - 1]) - montar(coe, valor[i - 2])));
    string += "x" + (i - 2) + " =" + valor[i] + " -> f(x) = " + montar(coe, valor[i]) + "<br>";
  }
  document.getElementById('resultado-secante').innerHTML = string;
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
