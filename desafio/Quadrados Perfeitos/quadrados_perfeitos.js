// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let lines = gets().split("\n"); 
let n = parseInt(lines.shift()); 

const dp = new Array(n + 1).fill(Infinity); 
dp[0] = 0; 

//TODO: Com base no valor total, retorne o menor número de quadrados perfeitos.

for (let i = 1; i < dp.length; i++) {
 if (i * i <= n) {
  dp[i] = i * i;
 } else {
  i = dp.length - 1;
 }
}
     
countTotal = 1000;
 for (let i = dp.length - 1; i > 0 && i <= n; i--) {
   
  if ((i > 0) && (dp[i] > 0)) {
   res = n;
   count = 0;

   for (let j = i; j > 0; j--) {
    while (res > 0) {
     if (res >= dp[j]) {
       res = res - dp[j];
       count++;
     } else {
       j--;
     }
    }
   }         

   if (countTotal > count) {
    countTotal = count;
   }

  }  
 }
  
print(countTotal);
