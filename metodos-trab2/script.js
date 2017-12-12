function trapezio(a,b,n) {
  var h = (b-a)/n;
  var areas = new Array();
  var string = "h = "+h+"</br>";
  var soma = 0;
  for (var i = 0,atual = a; i < n; i++,atual+=h) {
    areas[i] = parseFloat(montar(atual));
    soma+=areas[i];
    string += "Area do trapézio A"+i+"= "+ areas[i]+"</br>";

  }
  // escreve na tela o resultados de cada iteração do metodo da secante na tela
  document.getElementById('resultado-trapezio').innerHTML = string+"</br> area total:"+soma;
}
function simpson(a,b,n) {
  var h = (b-a)/n;
  var f = 0 ;
  var string = "h = "+h+"</br>";
  var soma = montar(a)+montar(b);
  for (var i=0,atual = a; atual < b; i++,atual+=h) {
    f = montar(atual);
    if (i%2 == 0) {
      soma += 2*f;
    }
    else{
      soma += 4*f;
    }
    string+="f"+i+" = "+ f+"</br>";
  }
  soma = soma* h/3;
  // escreve na tela o resultados de cada iteração do metodo da secante na tela
  document.getElementById('resultado-simpson').innerHTML = string+"</br> area total:"+soma;
}

function montar(x) {
  //retorn o valor f(x) do polinomio dado
  // return parseFloat( (1 * Math.pow(x, -3)) - (4*Math.pow(x,-2))+(3*Math.pow(x,-1/3))+5);
  return (Math.pow(2.718281,x)*(Math.pow(x,2)));
}

function modulo(valor) {
  // faz o modulo de um valor
  if (valor < 0) {
    return -1 * valor;
  }
  return valor;
}
