

//con shift + alt + F - prettier hace el trabajo sucio y asegura los ;
var nombre = 'Owi';


//generamos una array 
var articulos = 
    [
        {nombre : "aspiradora",precio:320},
        {nombre : "x-box",precio:520},
        {nombre : "micro",precio:150},
        {nombre : "secadora",precio:440},
        {nombre : "pc",precio:1320},
    ];
// todos estos tiene un objetivo, es buscar dentro del array algo 
// todos porque le mandamos a buscar dentro de esa opcion de array 

// Filtrar 
// los metodos vienen despues de parentecis o sino seria propiedades
/*
el filter valora si es verdero o falso 
crea un nuevo aarray 
no cambia el array es

dentro del metodo filter se genera una funcion.  */

/* los array se consider como objetos en estructura  */
//typeo();

//var articulosMenosCuatrocientos = articulo.filter();

var articulosMenosCuatrocientos = articulos.filter(function(articulo))
    {
        return articulo.precio<400;
    }


// Map saca el nombre de los articulos
var articulosNombres= articulo.map(function(articulo))
        {
            return articulo.nombre;
        };        

// no se estropea el array padre y genera un nuevo array.array
// no estropea el original y crea uno nuevo 

// find - nos encuentra el objeto y nos devuelve el objeto
var buscarPc = articulo.find(function(articulo))
    {
        return articulo.nombre=="pc";
    }

// FOREACH - este no crea ningun nuevo array y tampoco modifica  el array original
// es la diferencia con los de arriba.

articulo.forEach(function(articulo))
    {
        console.log(articulo.nombre);
    }

// SOME genera un booleano y no toca el array el original
// los que nos devuelve es un "true" o un "false"
var articulosBaratos = articulo.some(function(articulo))
    {
        // consideramos barato si es menor o igual a 180
        return articulo.precio<=180;
        // hay algo que valide esto "si" va a salir true
    }


    /*FUNCIONES */
// ya saben que las funciones son esos trosos de codigos que son reutilizables
// las ultimas versiones de javascript nos permiten un desgloze 

var persona01 = 
    {
        nombre: "Pepe",
        edad : 54,
        altura : 1.76,
    };

//tenemos una funcion que interactua con un objeto
// la variable "persona" sola la quieres utilizar como variable local dentro de la funcion 

function lanzaPantalla(persona)
    {
        document.write(persona.nombre.toUpperCase() + "<br>");
        console.log(persona.nombre.toUpperCase());
    }

//¿que problema ven?
//el problema que pasa en vez de persona01, pero solo lanzaria lanza pantalal con persona01
// caso contrario multiplica las posibilidades
/*function lanzaPantalla()
    {
        document.write(persona01.nombre.toUpperCase() + "<br>");
        //<br> es un intro- un salto de linea. Console.log no entiende eso. Pero si domcument.write
        console.log(persona01.nombre.toUpperCase());
    }
*/

var persona02 = 
    {
        nombre: "Juan",
        edad : 33,
        altura : 1.77,
    };

// no podes tener dos funcioens que sean igual en todo el proyecto
// en vez de utilizar "persona" vamos a estar interactuando con la propiedad qeu tienen los objetos
// cuando ponemos estas llaves {nombrs} ya le decimos que queremos interactuar con un objeto que tiene como parametro nombre 
// ya no aparece persona

function lanzaPantalla({nombre})
    {
        document.write(nombre.toUpperCase() + "<br>");
        console.log(persona.nombre.toUpperCase());
    }
//llamada de la funcion
//lanzaPantalla

// edad no es una funcion ¿que esta pasando?
//el error nos da en toUpperCase. como hacer toUpperCase  de algo que no existe ?
function lanzaPantallNew({edad})
    {
        document.write(edad.toUpperCase() + "<br>");
    }
//¿cual era el error?
// el toUpperCase pone todo el estring en mayusculas y como es un numero
// el poner todo en mayuscula me sale mal porque no me sale con numero

// undefined - no esta definido
// que no esta definido no significa que lo voy a crear. Para crearlo necesitamos un New o otro



// ***************************ç

var persona03 = 
    {
        nombre: "Miguel",
        edad : 19,
        altura : 1.36,
    };

function lanzarPantallaNew02(persona)
    {  
        
        var persona_1 = persona.nombre; //me voy al objeto persona, le saco el parametro nombre y se lo asigno a persona_1
        //esto de arriba, es lomismo que si estoy haciendo esto de abajo
        var {nombre}=persona;  // esto conseguimos al encerrar el atributo en llaves
        //estamos buscando entre llaves. Buscamos acceder a un atributo que se llama nombre
    }
// llamada de la funcion 
lanzaPantallaNew02(persona03);
//no es recomendable tener el mismo variable de nombre de global y local
// no se perjudican pero no es recomendable





//cuando pasamos un objeto como parametro de una funcion esto implica 
// que puede sufrir modificaciones. La variable no cambia tambien

//como se comporta JavaScript al pasar un Objeto, como un parametro.

//---------------variables
//crear un objetos
var persona =
    {
        edad : 44
    }

// funcion que modifica el Scope Global 
//Funcion
function modificarEdad(persona)
    {
        persona.edad +=1;
        // lo que estamos haciendo en la parte de arriba
        //modifica el valor del atributo 'edad' del objeto 'persona'
        // lo que hacemos dentro del SCOPE. esta modificando el SCOPE Global
        //probar en consola 
    }




for (var i=0; i<10; i++)
    {
        modificarEdad(persona);
        //document.write(persona.edad +"<br>");
    }
document.write("<br><br>");




// funcion que no modifica el Scope Global 
//sino es lo que buscamos, es que nos devuelva un objeto 
function personaMasVieja(persona)
    {
        return 
            {
                // operador de propagación : entrega una copia del objeto anterior
                ...persona,   //esto se llama spread operator, copia del objeto. Crea una copia de persona
                edad : (persona.edad+=1)      // esto lo que hace es sobreescribir el atribo edad ,pero no con el original, NO EL SCOPE global 
            }
    }

for (var i=0; i<10; i++)
    {
        personaMasVieja(persona);
        //document.write(persona.edad +"<br>");
    }




/*
    otro tema
    tema de variables - hay gente que no pone var.
    yo creo que es importante por lo que van a ver ahora
*/

// espacio de memoria

//puedes variar este contenido. Datos variables "var"
var nombre ='owi';

//no puedes variar este contenido
const Nombre_del_alumno = "Owi";

//cuando tenemos un dato que ni por casualidad queremos que cambie. Utilizamos constante





/*
    ----------------------------------
        Memoria RAM
        -tODO lo que hagamos  de : 
        - directorios de Memoria
        - La memoria ROM no se toca. Siempre que hablamos de memoria hablamos de RAM
    --------------------------------
        */

//Comparar variables TRUE
var nombre1 = "Elon Musk";
// hay un piso que vive Toni y en otra cajita o piso vive Elon Musk 
var nombre1 = "Elon Musk";

// ¿nombre 1 es igual a nombre2?
nombre01 == nombre02
//True


//comparar objetos
var prueba01 = 
    {
        nombre :'Pepe',
    };

var prueba02 = 
    {
        nombre :'Pepe',
    };

    prueba01==prueba02;
    //false
// los objetos no estan comparando el contenido sino es el espacio de Memoria
// el esapcio en memoria para prueba 1 no es el mismo que el espacio de memoria de prueba 2

//************************ *

var prueba01 = 
    {
        nombre : "pepe",
    };

var prueba02 = 
    {
        ...prueba01,
    };
//sigue siendo falso, porque ocupan distinto espacios los contenidos





//vamos a apuntar a la misma direccion de memoria. 
var prueba01 = 
    {
        nombre : "pepe",
    };

//ocurra una asignacion.  Y por eso ya nos da TRUE
var prueba02 = prueba01;


// En una comparacion entre objetos nunca va a mirar adentro. 




/*
    otro tema 
    "return"
*/
// tema "ñ" - es mejor no usar 
// ¿se puede poner acentos? si 
// javascript te permite pero imaginate esto si perdes una coma imaginate estar 
// pendiente de un acento 



/*Codigo Junior */
//objetos

var carlos = 
    {
        nombre : 'Carlos',
        apellido : 'Torres',
        profesion : 'Arquitecto',
        dni : '6536784321',
        edad : '43',
        hijos : false,
        español: true,
        trabajo_activo : false,
        carnet_coche : true, 
        linkedin: true
    }

// vamos a averiguar "si una persona es mayor de edad"
function mayor_edad(persona)
    {
        if(persona.edad >= 18)
            {
                document.write(`${persona.nombre} es mayor de edad`);
            }
        else
            {
                document.write(`${persona.nombre} no es mayor de edad`);
            }
    }

//esta bien esto ?
// No hay bastante fallos 
// vamos a mejorarlo


// ******************** MEJORANDO nuestro codigo 
// porque el número 18, "una persona de otro pais no lo va a entender"

// 'Magic Number' - tu te has sacado ese numero de la manga
// Los magic number NO SON UNA BUENA PRACTICA

// Que deberiamos hacer?
// necesitariamos una constante que diga mayoria de edad en españa


/*Codigo Senior */
// Y POR ESO LE PONEmos 18, no porque sea un magic number
const MAYORIA_EDAD_ESPANYA = 18;

var carlos = 
    {
        nombre : 'Carlos',
        apellido : 'Torres',
        profesion : 'Arquitecto',
        dni : '6536784321',
        edad : '43',
        hijos : false,
        español: true,
        trabajo_activo : false,
        carnet_coche : true, 
        linkedin: true
    }

// Funcion logica de la mayoria de edad
function mayorEdad(persona)
    {
        return persona.edad >= MAYORIA_EDAD_ESPANYA;
    }

//Funcion imprimir 
function imprimir(persona)
    {
        if (mayorEdad(persona)) //si la funcion "mayorEdad" hace un return "true" entra al if
            {
                document.write(`${persona.nombre} es mayor de edad`);
            }
        else
            {
                document.write(`${persona.nombre} no es mayor de edad`);
            } 
        }

// funcion principal
function personaEsmayoEdad(persona)
        {
            imprimir(persona);
        }

//el trabajo modular es muchisisimo mejor que el error de arriba
