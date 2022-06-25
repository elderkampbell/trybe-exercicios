//Exercicio 1: Variaveis

//[✔️] 1- Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
//[✔️] 2- Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
//[✔️] 3- Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.
//[✔️] 4- Utilize o console.log() para imprimir as constantes e variáveis que você criou.
//[✔️] 5- Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
//[✔️] 6- Altere o valor atribuído à constante birthCity. Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔

/* const myName = 'Elder'
const birthCity = 'Timbauba'
let birthYear = 2000
  console.log(myName, birthCity, birthYear)

birthYear = 2030
  console.log(birthYear)

//Não se pode alterar o valor de uma constante
birthCity = 'João Pessoa'
  console.log(birthCity) */


//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/


//Exercicio 2: Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas

//[✔️] 1- Crie uma constante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.
//[✔️] 2- Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
//[✔️] 3- Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.

/*   const base = 5;
  let height = 8;
  
  const area = base * height;
  perimiter = base * 2 + height *2;
  
  console.log(area);
  console.log(perimiter) */


//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/


//Exercicio 3: Condições If e Else

//[✔️] 1- Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100; 
//[✔️] 2- Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
//    • Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
//    • Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
//    • Se a nota for menor que 60, imprima "Você foi reprovada(o)"
//[✔️] 3- Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
//[✔️] 4- Altere o valor da nota para verificar se as condições que você implementou funcionam;

/* const nota = "61"
if (nota >= 80) 
{console.log("Parabéns, você foi aprovada(o)!")}

else if (nota < 80 && nota >= 60) 
{console.log("Você está na nossa lista de espera")}

else if (nota < 60)
{console.log("Você foi reprovada(o)")}

else
{console.log("Valor Invalido")} */


//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/


//Exercicio 4: Operadores lógicos

//[✔️] 1- Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.
//[✔️] 2- Crie uma variável chamada "message" que, inicialmente, é uma string vazia.
//[✔️] 3- Implemente condicionais para que:
//    • Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".
//    • Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".
//    • Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".
//    • Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
//    • Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".
//[✔️] 4- Agora imprima a variável message fora das suas condições.

/* const currentHour = 14
let message = ""

if (currentHour >= 22)
{message = "Não deveríamos comer nada, é hora de dormir"}

else if (currentHour >= 18)
{message = "Rango da noite, vamos jantar :D"}

else if (currentHour >= 14 && currentHour <= 18)
{message = "Vamos fazer um bolo pro café da tarde?"}

else if ( currentHour >= 11 && currentHour <= 14)
{message = "Hora do almoço!!!"}

else if (currentHour >= 4 && currentHour <= 11)
{message = "Hmmm, cheiro de café recém passado"}

console.log(message) */


