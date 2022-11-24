function max(contenido) {
    var mx=0;
    var posicion=0;
for (var i=1; i<=contenido.length; i++) {
    if (contenido[i] > mx) {
        mx = contenido[i];
    
    

}
}
for (var i=1; i<=contenido.length; i++) {
    if (contenido[i]==mx) {
        posicion=i
    }
}
return posicion;
}
console.log(max([1, 2, 3]));
console.log(max([10, 9, 8, 7, 6, 5, 4]));