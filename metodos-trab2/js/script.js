function trapezio(a,b,n) {
  //coe é uma array com os coeficientes do polinomio
  //max é o numero maximo de iterações
  //chute1 e chute2 sao os chutes iniciais do metodos (x1 e x2)
  //array que guarda os valor de x a cada iteração
  var h = b-a/n;
  var areas = new Array();
  var string = "";
  var soma = 0;
  for (var i = 0,atual = a; i < n; i++,atual+=h) {
    // formular da secante
    // xn = xn-1 -  ( f(xn-1)*((xn-1) - (xn-2)) / f (xn-1) - f(xn-2))
    areas[i] = (montar(atual)+montar(atual +h))* h/2;
    soma+=areas[i];
    string += "Area do trapézio A"+i+"= "+ areas[i]+"</br>";

  }
  // escreve na tela o resultados de cada iteração do metodo da secante na tela
  document.getElementById('resultado-secante').innerHTML = string+"</br> area total:"+soma;
}


function montar(x) {
  //retorn o valor f(x) do polinomio dado
  return (1 * Math.pow(x, -3)) - (4*Math.pow(x,-2))+(3*Math.pow(x,-1/3))+5;
}

function modulo(valor) {
  // faz o modulo de um valor
  if (valor < 0) {
    return -1 * valor;
  }
  return valor;
}
