console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

//listaDeDestinos.push(`Curitiba`, `Amazonas`);

const idadeComprador = 19;
console.log("Lista de destinos posíveis:");
console.log(listaDeDestinos);

if(idadeComprador >= 18){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(2, 1); //splice Remove itens do Array(3,1) indice do Array e a quantidade)..
};


