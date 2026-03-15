
//ej 1

function formatearNombre(nombre)
{
    
    const primera = nombre[0].toUpperCase();
    const resto = nombre.slice(1).toLowerCase();
    return primera + resto;
   
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
        return cantLetras;
}
    


    function numeroMayor(a,b,c)
    {
        if (a > b && a > c)
        {
            alert ('num '+ a +" es mayor a los otros dos")
            return a;
        }else if (b > a && b > c)
        {
            alert ('num '+ b +" es mayor a los otros dos") 
            return b;
        }
        else
        {
            alert ('num '+ c +" es mayor a los otros dos")
            return c;
        }
        
    }
    console.log(a,b,c)

  function validarPassword(password)
    {
        let cantidadLetras;
        cantidadLetras=password.length;
        let caracter = password.split("") 
        let NumeroExiste = false;

        for(let i = 0; i < cantidadLetras; i++)
        {
            if(!isNaN(caracter[i]))
            {
                NumeroExiste=true;
            }

        }

        if(NumeroExiste && cantidadLetras>=8)
            {return true}
            else {return false}

    }

//parte2

    function sumarArray(numeros)
    {
        let suma = 0;

        for (let i = 0; i < numeros.length ; i++)
        {
            suma+= numeros[i];
        }
        
        return suma;
    }

    function mayorNumero(numeros)
        {
            let numeroMayor = numeros[0];

            for(let i = 1; i < numeros.length; i++)
            {
                if(numeros[i]>numeroMayor)
                    {
                        numeroMayor = numeros[i];
                    }
            }
             return numeroMayor;
        }
    

    function obtenerPares(numeros)
    {
        let numerosPares = [];

        for(let i = 0; i < numeros.length; i++)
        {
            if(numeros[i] % 2 === 0)
            {
                numerosPares.push(numeros[i]);
            }
        }
        return numerosPares;
    }

// parte 3

const usuario = {
 nombre: "Ana",
 edad: 20,
 activo: false
};

function descripcionUsuario(usuario)
{
    return `${usuario.nombre} tiene ${usuario.edad} años`;
}

// const usuario = {
//  nombre: "Ana",
//  edad: 20,
//  activo: false
// };

//NO ME SALE EL EJERCICIO CHOTO FLOR RESOLVÉ

function activarUsuario(usuario)
{
    usuario.activo = true;
    return usuario;
}


const productos = [

{nombre:"Mouse", precio:10},

{nombre:"Teclado", precio:25},

{nombre:"Monitor", precio:200}

];

function precioTotal(productos)
{
    let total = 0;

    for(let i = 0; i < productos.length; i++)
    {
        total += productos[i].precio;
    }
    return total;
}


const usuarios = [
 {nombre:"Ana", edad:17},
 {nombre:"Juan", edad:25},
 {nombre:"Pedro", edad:30}
];

//ej 11
const nombres = usuarios.map(usuario => usuario.nombre);

console.log(nombres);


//ej 12
const mayores = usuarios.filter(usuario => usuario.edad >= 18);

console.log(mayores);


//ej 13
const totalEdades = usuarios.reduce((acum, usuario) => acum + usuario.edad, 0);

console.log(totalEdades);
