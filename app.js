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
    atributos: {
      cilindrada: 1984,
      potencia: 200,
      velocidade: 225
    }
  };
  
  var carta2 = {
    nome: "Uno da Firma",
    atributos: {
      cilindrada: 999,
      potencia: 65,
      velocidade: 440
    }
  };
  
  var carta3 = {
    nome: "Tiguan TSI",
    atributos: {
      cilindrada: 1984,
      potencia: 220,
      velocidade: 223
    }
  };
  
  var carta4 = {
    nome: "Saveiro Rebaixada",
    atributos: {
      cilindrada: 3000,
      potencia: 400,
      velocidade: 177
    }
  };
  
  var carta5 = {
    nome: "Golf Sapão",
    atributos: {
      cilindrada: 1599,
      potencia: 116,
      velocidade: 195
    }
  };
  
  var carta6 = {
    nome: "Veloster",
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
    opcoes.innerHTML = opcoesTexto;
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
  }
  