const lista = [1,2,3,4,5,6]

const novaLista = lista.map(function (item, index) {
    return item * 5 + index;

})

console.log(novaLista)

const soma =  lista.reduce(function (total, proximoItem) {

    return total + proximoItem

})

console.log(soma)

const find =  lista.find(function (item) {

    return item === 6;

})

console.log(find)

data = [
    {
        name: 'Butters',
        age: 3,
        type: 'dog'
    },
    {
        name: 'Lizzy',
        age: 6,
        type: 'dog'
    },
    {
        name: 'Red',
        age: 1,
        type: 'cat'
    },
    {
        name: 'Joey',
        age: 3,
        type: 'dog'
    },
];

let dogs = data.filter((animal) => {
    return animal.type === 'dog';
})

console.log(dogs)

var calcAge = dogs.reduce((sum, animal) => {
    return sum + animal.age;
}, 0);
console.log(calcAge);

console.log("*********************** Exemplo completo de Reduce ***********************")

let initialValue = 10
data.reduce( function( prevVal, elem, index, array ) {
    console.log("prevVal :",prevVal)
    console.log("elem :",elem)
    console.log("index :",index)
    console.log("array :",array)
}, initialValue );