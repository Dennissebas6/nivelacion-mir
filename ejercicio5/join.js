function join(contenido) {
    var result= ' ';
for (var i=0; i<contenido.length; i++) {
    result += contenido[i] + ' ';
    }
    return result;
}
console.log(join(['hola', 'mundo'])); // 'hola mundo'
console.log(join(['Make', 'It', 'Real'])); // 'Make It Real'
console.log(join([])); // ''