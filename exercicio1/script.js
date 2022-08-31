/*# Exercício 1

Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem:
    
    ```
    Estas são as comidas favoritas de nomeDoUsuario
    - Comida1
    - Comida2
    - Comida3
    ```
    
Você deve usar apenas um `console.log()` para isso"*/

const nomeUsuario = prompt("Qual seu nome?")
const comidaFavorita1 = prompt("Qual sua comida favorita? Top 1") 
const comidaFavorita2 = prompt("Qual sua comida favorita? Top 2") 
const comidaFavorita3 = prompt("Qual sua comida favorita? Top 3") 

console.log(`Estas sao as comidas favoritas de ${nomeUsuario} \n${comidaFavorita1} \n${comidaFavorita2} \n${comidaFavorita3}`)