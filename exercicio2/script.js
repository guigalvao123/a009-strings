const minhaStringComEspaco = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const minhaStringSemEspaco = "Eu não sou supersticioso, mas sou um pouco ________.";
/*# Exercício 2
Observe a string abaixo.
```jsx
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
```
A partir dela, execute os passos abaixo:

a) Remova o excesso de espaços no final da string;
b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;
c) Substitua os traços `________` por “sticioso”.*/

const tamanhoComEspaco = minhaStringComEspaco.length
console.log(tamanhoComEspaco)
const tamanhoSemEspaco = minhaStringSemEspaco.length
console.log(tamanhoSemEspaco)
const semTraco = minhaStringSemEspaco.replace("________","sticioso")
console.log(semTraco)