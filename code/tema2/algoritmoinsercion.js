// Función de inserción para ordenar un arreglo
function insertionSort(arr) {
  const length = arr.length;

  for (let i = 1; i < length; i++) {
    const key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

// Función para mostrar el menú y realizar las operaciones
function menu() {
  const array = [];
  let continuar = true;

  while (continuar) {
    const opcion = prompt(
      "Seleccione una opción:\n" +
        "1. Insertar elemento\n" +
        "2. Ordenar el arreglo\n" +
        "3. Mostrar el arreglo\n" +
        "4. Salir"
    );

    switch (opcion) {
      case "1":
        const elemento = prompt("Ingrese un elemento:");
        array.push(parseInt(elemento));
        break;
      case "2":
        const sortedArray = insertionSort(array);
        alert("Arreglo ordenado: " + sortedArray.join(", "));
        break;
      case "3":
        alert("Arreglo actual: " + array.join(", "));
        break;
      case "4":
        case "8":
            window.close() //Se utiliza para cerrar la ventana
            return;
          default:
            alert("Opción inválida. Intenta nuevamente.");
            break;
    }
  }
}

// Ejecutar el menú
menu();