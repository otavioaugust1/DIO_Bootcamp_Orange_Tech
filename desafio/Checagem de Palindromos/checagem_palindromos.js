// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let resultado = gets();

//TODO:Retorne TRUE ou FALSE, caso a "palavra" seja ou não um Palíndromo.

function checaPalindromo(entrada){

  var novaString = ""
  for(var i = entrada.length -1; i >= 0; i--){
    novaString = novaString + entrada[i]
  }


  if (novaString === entrada){
  return 'TRUE'
  }


  else{
    return 'FALSE'
  }

}
print(checaPalindromo(resultado));