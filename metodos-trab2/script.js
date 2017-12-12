function trapezio(a,b,n) {
  var h = (b-a)/n;
  var areas = new Array();
  var string = "h = "+h+"</br>";
  var soma = 0;
  for (var i = 0,atual = a; i < n; i++,atual+=h) {
    areas[i] = (montar(atual)+montar(atual+h))*h/2;
    soma+=areas[i];
    string += "Area do trapézio A"+i+"= "+ areas[i]+"</br>";

  }
  // escreve na tela o resultados da area de cada trapézio
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
  // escreve na tela o resultados de cada f(xn) e a soma total do metodo
  document.getElementById('resultado-simpson').innerHTML = string+"</br> Area total:"+soma;
}
function quadraturaGauss(a,b,n){
  // escreve na tela o resultados de gauss
  document.getElementById('resultado-gauss').innerHTML = "teste "+a+b+n;
}
function montar(x) {
  //monta a equação
  return Math.pow(2.718281,x)*(Math.pow(x,2));
}

function modulo(valor) {
  // faz o modulo de um valor
  if (valor < 0) {
    return -1 * valor;
  }
  return valor;
}
