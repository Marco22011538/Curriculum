/**
 * Calcula el factorial de un número utilizando un bucle for.
 * @param numero El número del cual se desea calcular el factorial.
 * @param  returns El factorial del número.
 */

function factorialFor (numero) {
    let resultado = 1
    // Verifica si el número es 0 o 1, en cuyo caso el factorial es 1
    if (numero ==1 || numero==0){
        return resultado
    } else { 
        // Calcula el factorial utilizando un bucle for
        for ( i= 2; i <=numero; i ++){
        resultado = resultado * i
        } 
    }
    return  resultado
}

function factorialRecursion (numero) {
  if (numero == 0  || numero == 1){
       return 1
  } 
  else {
            // Calcula el factorial utilizando recursión llamando a la función factorialRecursion nuevamente
       return numero * factorialRecursion (numero - 1)
  }
}
// Función para agregar el menu
function mostrarMenu(){
    var option = prompt(
                      "Selecciona una opción \n" +
                      "1. Calcular factorial con FOR \n" +
                      "2. Calcular factorial con Recursión\n" +
                      "3.- Salir"
                      )

    switch (option) {
          case "1":
                   var numero = prompt("Introduce un numero")
                   var res = factorialFor(numero)
                   alert("El factorial es: " + res) 
                   mostrarMenu()
                break;
          case "2":
                   var numero = prompt("Introduce un numero")
                   var res = factorialRecursion(numero)
                   alert("El factorial es: " + res) 
                   mostrarMenu()
                break;
         case "3":
                  window.close();
                  return;

          default:
                alert("Opcion invalida")
                break;
    }     
}
mostrarMenu()