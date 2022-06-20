console.log("Trabalhando com Array");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`, `Amazonas`); // Adciona um iten a lista(Array) dinamicamente..
//console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //splice Remove itens do Array(3,1) indice do Array e a quantidade)..

console.log(listaDeDestinos);
//console.log(listaDeDestinos[1]); //Mostra um unico item da minha lista na ordem do indice..