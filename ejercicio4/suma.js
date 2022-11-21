function suma( numero ) {
    let resultado = 0;
    for ( let i = 1; i <= numero; i++) {
        resultado += i;
    }
    return resultado;
}
console.log(suma(4));
console.log(suma(10));
console.log(suma(15));
