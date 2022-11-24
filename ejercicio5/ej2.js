
function max(contenido) {
    var mx=0;
for (var i=0; i<contenido.length; i++) {
    for (var j=1; j<contenido.length; j++) {
    if(contenido[i]>contenido[j]) {
        mx=contenido[i]
    }

}
}
return mx;
}
console.log(max([1,3,2]));
