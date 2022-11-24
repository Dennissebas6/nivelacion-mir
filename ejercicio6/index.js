var pedro = {
    nombre: "Pedro",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"],


}
{
    pedro.altura=1.80;
}
{
    delete pedro.activo;
}

var llaves = Object.keys(pedro);
for (var i=0; i < llaves.length; i++) {
  var llave = llaves[i];
  console.log(`${item} : ${pedro[llave]}`);

}
