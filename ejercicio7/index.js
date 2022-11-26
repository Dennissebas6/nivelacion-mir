
var receta = {
    nombre: "Sandwich",
    ingredientes: [],
};
receta.ingredientes.push({nombre:"Pan", cantidad: 2});
receta.ingredientes.push({nombre:"Queso", cantidad:1});
console.log("El primer ingrediente es: " +receta.ingredientes[0].nombre);
var cantidad=0;
    for (var i=0; i < receta.ingredientes.length; i++) {
        cantidad+=receta.ingredientes[i].cantidad;
        
}
console.log("La cantidad de ingredientes es: " , cantidad)
