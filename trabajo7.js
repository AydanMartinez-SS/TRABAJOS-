function esCuadradoConsecutivo(arr) {
    // Verificar si el arreglo contiene numeros consecutivos desde 1 hasta n^2
    let n = arr.length;
    let total = n * n;
    let numeros = new Set(arr.flat());
    if (numeros.size !== total) {
      return false;
    }
    for (let i = 1; i <= total; i++) {
      if (!numeros.has(i)) {
        return false;
      }
    }
    return true;
  }
  
  function esCuadradoMagico(arr) {
    // Verificar si el arreglo es un cuadrado magico
    let n = arr.length;
    let sumaEsperada = n * (n * n + 1) / 2;
    let sumaDiagonal1 = 0;
    let sumaDiagonal2 = 0;
    for (let i = 0; i < n; i++) {
      let sumaFila = 0;
      let sumaColumna = 0;
      for (let j = 0; j < n; j++) {
        sumaFila += arr[i][j];
        sumaColumna += arr[j][i];
        if (i === j) {
          sumaDiagonal1 += arr[i][j];
        }
        if (i + j === n - 1) {
          sumaDiagonal2 += arr[i][j];
        }
      }
      if (sumaFila !== sumaEsperada || sumaColumna !== sumaEsperada) {
        return false;
      }
    }
    return sumaDiagonal1 === sumaEsperada && sumaDiagonal2 === sumaEsperada;
  }
  
  // Leer el arreglo y calcular si es consecutivo y si es un cuadrado magico
  let n = prompt("Inserta el tamaño n del arreglo cuadrado:");
  let arreglo = [];
  for (let i = 0; i < n; i++) {
    let fila = prompt("Inserta los " + n + " numeros para la fila " + (i+1) + " separados por comas:").split(",").map(Number);
    arreglo.push(fila);
  }
  
  let consecutivo = esCuadradoConsecutivo(arreglo);
  let magico = esCuadradoMagico(arreglo);
  
  console.log("El arreglo " + (consecutivo ? "si" : "no") + " tiene numeros consecutivos desde 1 hasta n^2");
  console.log("El arreglo" + (magico ? "es" : "no es") + "un cuadrado magico");