// Divisível por 3 => Fizz
// Divisível por 5 => Buzz
// Divisível por 3 e 5 => FizzBuzz
// Não Divisível por 3 e 5 => entrada
// Não é um número => 'Não é um número'

for (let i = 1; i <= 100; i++) {
    if ( i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    } else if ( i % 3 === 0){
        console.log('Fizz');
    } else if ( i % 5 === 0){
        console.log('Buzz')
    } else{
        console.log(i);
    }
}

/*
const resultado =  fizzBuzz(11);
console.log(resultado);

function fizzBuzz(entrada) {
    if (typeof entrada != 'number')
        return 'Não é um número';
    if ((entrada % 3) === 0 && (entrada % 5 === 0))
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';
    
    return entrada;
}
*/

