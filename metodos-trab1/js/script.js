function secante(coe, max, precisao, chute1, chute2) {
  //coe é uma array os coeficientes do polinomio
  var valor = new Array();
  valor[1] = chute1;
  valor[2] = chute2;
  var string = "chute inicial 1  x = " + valor[1] + " -> f(x) = " + montar(coe, valor[1]) + "<br>";
  string += "chute inicial 2 x = " + valor[2] + " -> f(x) = " + montar(coe, valor[2]) + "<br>";
  max += 3;
  for (var i = 3; i < max && modulo(montar(coe, valor[i - 1])) > precisao; i++) {
    valor[i] = valor[i - 1] - (montar(coe, valor[i - 1])) * ((valor[i - 1] - valor[i - 2]) / (montar(coe, valor[i - 1]) - montar(coe, valor[i - 2])));
    string += "x" + (i - 2) + " = " + valor[i] + " -> f(x) = " + montar(coe, valor[i]) + "<br>";
  }
  document.getElementById('resultado-secante').innerHTML = string;
}

function falsaPosicao(coe, max, precisao, a, b) {
  //coe é uma array os coeficientes do polinomio
  var valor = new Array();
  var string = "";
  max += 1;
  var i = 1;
  do {
    valor[i] = a - (montar(coe, a) * (b - a)) / (montar(coe, b) - montar(coe, a));
    string += "(a,b) = (" + a + "," + b + ") --> x" + i + " = " + valor[i] + " -> f(x) = " + montar(coe, valor[i]) + "<br>";
    if (montar(coe, a) * montar(coe, valor[i]) < 0) {
      b = valor[i];
    } else {
      a = valor[i];
    }
    i++;
  } while (i < max && modulo(montar(coe, valor[i - 1])) > precisao);
  document.getElementById('resultado-fp').innerHTML = string;
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
