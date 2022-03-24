//var cartas = [
//  (nome: "Fusca TSI"),
//  (atributos: { cilindrada: 1984, potencia: 200, velocidade: 225 }),
//  (nome: "Uno da Firma"),
//  (atributos: { cilindrada: 999, potencia: 65, velocidade: 440 }),
//  (nome: "Tiguan TSI"),
//  (atributos: { cilindrada: 1984, potencia: 220, velocidade: 223 }),
//  (nome: "Saveiro Rebaixada"),
//  (atributos: { cilindrada: 3000, potencia: 400, velocidade: 177 }),
// (nome: "Golf Sapão"),
//  (atributos: { cilindrada: 1599, potencia: 116, velocidade: 195 }),
//  (nome: "Veloster"),
//  (atributos: { cilindrada: 1591, potencia: 140, velocidade: 250 })
//];

var carta1 = {
  nome: "Fusca TSI",
  imagem:
    "https://reginaldodecampinas.com.br/wp-content/uploads/2021/09/FUSCA-TSI-2014-2.jpg",
  atributos: {
    cilindrada: 1984,
    potencia: 200,
    velocidade: 225
  }
};

var carta2 = {
  nome: "Uno da Firma",
  imagem:
    "https://www.virgulistas.com.br/wp-content/uploads/2018/01/capa-21.jpg",
  atributos: {
    cilindrada: 999,
    potencia: 65,
    velocidade: 440
  }
};

var carta3 = {
  nome: "Tiguan TSI",
  imagem:
    "https://www.autoo.com.br/fotos/2018/4/1280_960/volkswagen_tiguan-allspace_2019_1_13042018_9352_1280_960.jpg",
  atributos: {
    cilindrada: 1984,
    potencia: 220,
    velocidade: 223
  }
};

var carta4 = {
  nome: "Saveiro Rebaixada",
  imagem: "https://pbs.twimg.com/media/E1qcC6GWUAMNMd6.jpg",
  atributos: {
    cilindrada: 3000,
    potencia: 400,
    velocidade: 177
  }
};

var carta5 = {
  nome: "Golf Sapão",
  imagem:
    "https://i.pinimg.com/474x/82/c5/4f/82c54f1a8fe4b0d05650e020fd3355de.jpg",
  atributos: {
    cilindrada: 1599,
    potencia: 116,
    velocidade: 195
  }
};

var carta6 = {
  nome: "Veloster",
  imagem: "https://img.olx.com.br/images/33/332289616452271.jpg",
  atributos: {
    cilindrada: 1591,
    potencia: 140,
    velocidade: 250
  }
};

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6];
var cartaMaquina = 0;
var cartaJogador = 0;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 4);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 4);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 4);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);
  console.log(cartaMaquina);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirOpcoes();
  exibirCartaJogador();
}

//function exibirOpcoes() {
//  var opcoes = document.getElementById("opcoes");
//  var opcoesTexto = "";

//  for (var atributo in cartaJogador.atributos) {
//    opcoesTexto +=
//      "<input type='radio' name='atributos' value='" +
//      atributo +
//      "'>" +
//      atributo;
//  }
//  opcoes.innerHTML = opcoesTexto;
//}

//function obtemAtributoSelecionado() {
//  var radioAtributos = document.getElementsByName("atributo");

//  for (var i = 0; i < radioAtributos.length; i++) {
//   if (radioAtributos[i].checked == true) {
//     return radioAtributos[i].value;
//   }
//  }
//}

//function jogar() {
//var atributoSelecionado = obtemAtributoSelecionado();
//  var elementoResultado = document.getElementById("resultado");
//  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
//  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

//  if (valorCartaJogador > valorCartaMaquina) {
//    elementoResultado.innerHTML = "Você venceu!";
//  } else if (valorCartaMaquina > valorCartaJogador) {
//    elementoResultado.innerHTML = "Você perdeu!";
//  } else {
//    elementoResultado.innerHTML = "Empatou!";
// }
//}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo;
  }
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Você venceu!";
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = "Você perdeu!, a carta da maquina é maior";
  } else {
    elementoResultado.innerHTML = "Empatou";
  }
  console.log(cartaMaquina);
  exibirCartaMaquina();
  document.getElementById("btnJogar").disabled = true;
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
