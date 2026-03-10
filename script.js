
//ej 1

function formatearNombre(nombre)
{
    
    let resultado;
    const primera = nombre[0].toUpperCase();
    const resto = nombre.slice(1).toLowerCase();
    resultado = primera + resto;
    console.log(resultado);
}

formatearNombre(nombre);

function contarLetras(texto)
{
    let cantLetras=0;
    for(let i = 1; i <= texto.length; i++)
    {
        if (texto[i] != " ")
        {
            cantLetras++;
        }
    }
        
}
    console.log(cantLetras);


    function numeroMayor(a,b,c)
    {
        if (a > b && a > c)
        {
            alert ('num '+ a +" es mayor a los otros dos")
        }else if (b > a && b > c)
        {
            alert ('num '+ b +" es mayor a los otros dos") 
        }
        else
        {
            alert ('num '+ c +" es mayor a los otros dos") 
        }
        
    }
    console.log(a,b,c)


