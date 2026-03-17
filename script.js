
//ej 1

function formatearNombre()
{
    let nombre= "CAMILA";
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


    function sumarArray(numeros)
    {
        let suma = 0;

        for (let i = 0; i < numeros.length ; i++)
        {
            suma+= numeros[i];
        }
        
        return suma;
    }

    function ej6(numeros)
        {
            let numeroMayor;
            for(let i=0; i<numeros.length;i++)
            {
                if(numeros[i]>numeroMayor)
            }
            console.log(numeroMayor);
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
   //PARTE3
         const usuario = {nombre: "Ana", edad: 20, activo:false}
        

         function descripcionUsuario(usuario)
        {
            return usuario.nombre+ "tiene" +usuario.edad+ "años" ;

        }
        console.log (descripcionUsuario(usuario));


        function ej9activarUsuario(usuario)
        {
            usuario.activo = true;
            return usuario.activo;
        }
                const productos = [
                {nombre: "Mouse", precio:10},
                {nombre: "Teclado", precio:25},
                {nombre: "Monitor", precio:200}
                ] 
        function ej10PrecioTotal(productos)
        {
            let total=0;
            for(let i=0; i<productos.length ;i++)
            {
                total+= productos[i].precio;
            }
            return total;

        }
        console.log(ej10PrecioTotal(productos));
        //ej11
                const usuarios = [
                {nombre:"Ana", edad:17},
                {nombre:"Juan", edad:25},
                {nombre:"Pedro", edad:30}
                ];
                const nombres = usuarios.map(usuario => usuario.nombre);

                console.log(nombres);
        //ej 12
        const mayores = usuarios.filter(usuario => usuario.edad >= 18);

        console.log(mayores);


        //ej 13
        const totalEdades = usuarios.reduce((acum, usuario) => acum + usuario.edad, 0);

        console.log(totalEdades);
        //ej14
        const producto = {
        nombre:"Notebook",
        precio:1000 }
        function mostrarUsuario(nombre, precio)
        {
            Console.log("Nombre: " + nombre);
            Console.log( "Precio: "+ precio);
        }
        //ej15
        const productoStock = {... producto, stock:5  }
        function agregarStock(productoStock)
        {
            return productoStock;
        }
        //ej16
         function buscarProducto(productos, nombre) {
         return productos.find(p => p.nombre === nombre);
         }  
        // ej17
        function productosMayoresA50(productos) {
         return productos.filter(producto => producto.precio > 50);
         } 
         //ej18  
         function promedio(numeros) {
        const suma = numeros.reduce((acum, num) => acum + num, 0);
        return suma / numeros.length;
        }

        //desafio final API
        const Usuarios = [
        {id:1, nombre:"Ana", edad:20},
        {id:2, nombre:"Juan", edad:15},
        {id:3, nombre:"Pedro", edad:30}
        ];
        //ej1
        function obtenerUsuarios() {
            return usuarios;
        }

        console.log(obtenerUsuarios());
        //ej2
        function obtenerUsuarioPorId(id) {
        return usuarios.find(usuario => usuario.id === id);
        }
        //ej3
        function obtenerMayores() {
        return usuarios.filter(usuario => usuario.edad >= 18);
        }

        //ej4
        function crearUsuario(nombre, edad) {
        const nuevoUsuario = {
        id: usuarios.length + 1,
        nombre: nombre,
        edad: edad
        };

        usuarios.push(nuevoUsuario);
        return nuevoUsuario;
        }
        
