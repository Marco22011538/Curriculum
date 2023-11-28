function factoral(numero){//
    resultado=1;
    
    if (numero==1 || numero ==0){
        return resultado
    }else{
        
        for(i=2;i<=numero;i++){
            resultado=resultado*i;
        }
    }
    return resultado
}

function mostrarMenu(){
    var option = prompt(
                        "SELECCIONA UNA OPCIÓN :\n"+
                        "1.- CALCULAR FACTORIAL CON FOR \n "+
                        "2.-CALSILA FACTORIAL CON RECUSIÓN"
                        )
switch(Option){
    case "1":
        var numero = prompt("introduce un numero: ")
        var res=factorialFor(numero)
        alert("el factorial es: "+ res)
        break;
    case "2":
        var numero = prompt("introduce un numero: ")
        var res=factorialRecursivo(numero)
        alert("el factorial es: "+ res)
        break;
    case "3":
        window.close();
        return;
    default:
        alert("Opcion invalidad, seleccione otra opcion.");
        mostrarMenu();
        break
}
}
mostrarMenu();