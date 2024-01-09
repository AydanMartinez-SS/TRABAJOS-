// Pedir al usuario que ingrese la cantidad de datos que quiere ingresar
var n = prompt("Ingrese cuantos datos va a ingresar:");

// Crear un array para almacenar los datos ingresados por el usuario
var datos = [];
for (var i = 0; i < n; i++) {
    var dato = prompt("Ingrese el dato:");
    datos.push(parseFloat(dato));
}

// Calcular el promedio de los datos
var suma = datos.reduce((a, b) => a + b, 0);
var promedio = suma / n;

// Contar cuantos datos son mayores que el promedio
var mayoresAlPromedio = 0;
for (var j = 0; j < datos.length; j++) {
    if (datos[j] > promedio) {
        mayoresAlPromedio++;
    }
}

// Mostrar el resultado
alert("El promedio de los datos es " + promedio + ". De los datos ingresados, " + mayoresAlPromedio + " son mayores que el promedio.");