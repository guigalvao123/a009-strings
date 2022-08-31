/*A partir da frase a seguir, faça o que se pede
```
Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
```
a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);OK
b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;OK
c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.OK
**EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”*/

const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres:\"BOAS VINDAS, mas não deixe o gato sair\"."
console.log(frase)
const cores = frase.replace("verde","rosa").replace("azul","laranja")
console.log(cores)
const verificacaoVerde = cores.includes("verde")
console.log(verificacaoVerde)
const verificacaoLanraja = cores.includes("laranja")
console.log(verificacaoLanraja)
const maiúsculo = "mas não deixe o gato sair".toUpperCase()
console.log(cores.replace("mas não deixe o gato sair",maiúsculo))