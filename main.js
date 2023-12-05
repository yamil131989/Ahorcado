// AHORCADO

//comienzo de juego
class Usuario{
    constructor (nom_usuario){
        this.nom_usuario = prompt("Ingrese su nombre de usuario "),
        this.gano = false
        this.puntaje = 0
    }
}


//reglas

let palabra_seleccionada 
let ayuda
let random 
let max 
let palabra_juego 
let vida = 10
let puntaje = 0


//creamos un usuario
let userX = new Usuario()
comenzar()




console.log("El puntaje de " + userX.nom_usuario +" es un total de "+ userX.puntaje)



//GENERAR PALABRA
//Generamos un indice de palabras llamado random
function getRandomInt(max) {
  random = Math.floor(Math.random() * max + 1);
  return random
}

//generamos una palabra en base a ese random creado anteriormente

function generarPalabra(random){
    switch (random) { 
        case 1:
            palabra_seleccionada = "RINOCERONTE"
            ayuda = "Familia de mamíferos placentarios del suborden ceratomorfos perteneciente al orden de los perisodáctilos o.O"        
            break
        case 2:
            palabra_seleccionada = "CASCO"
            ayuda = "Previene el contacto directo entre el cráneo y el objeto que hace impacto"        
            break
        case 3:
            palabra_seleccionada = "TEXTURA"
            ayuda = "Elementos básicos de la expresión plástica, consiste en la apariencia de una superficie o plano"      
            break
        case 4:
            palabra_seleccionada = "DINOSAURIO"
            ayuda = "Lagarto Terrible"
            break
        case 5:
            palabra_seleccionada = "RULO19"
            ayuda = "Valor de tipo constante en este curso"
            break
        case 6:
            palabra_seleccionada = "JAVASCRIPT"
            ayuda = "Lenguaje de programación interpretado, dialecto del estándar ECMAScript"
            break
        case 7:
            palabra_seleccionada = "CODERHOUSE"
            ayuda = "Primera Digital School de Argentina"
            break
        case 8:
            palabra_seleccionada = "TENTACULO"
            ayuda = "Organo alargado, flexible y móvil de algunas especies de animales, generalmente invertebrados"
            break
        case 9:
            palabra_seleccionada = "KAKAROTO"
            ayuda = 'El "mejor" padre del mundo .. jaja'
            break
        case 10:
            palabra_seleccionada = "INTERNET"
            ayuda = "conjunto descentralizado de redes de comunicaciones interconectadas, que utilizan la familia de protocolos TCP/IP"
            break
    }
    palabra_adivinar = palabra_seleccionada
    return palabra_seleccionada
    
}



function adivinar(palabra_juego, palabra_seleccionada,usuario){
    //let vida = 5
    console.log(ayuda)
    let flag = true
    let palabra_temporal
    let noesta = 0
    let siesta = 0
    while (flag) {
        let letra = prompt("Ingresa letra ").toUpperCase()
        for (let i=0; i< palabra_juego.length;i++) {
            if (palabra_seleccionada[i] == letra) {
                palabra_juego[i] = letra
                siesta++ //intentos correctos
                console.log(palabra_juego)
                palabra_temporal = palabra_juego.join("") //creamos un string para validar si es = a la palabra_seleccionada 
                if (palabra_temporal == palabra_seleccionada) {
                    alert("Ganaste!!!", usuario.nom_usuario)
                    usuario.gano = true
                    usuario.puntaje+=10                    
                    flag=false
                    if (confirm("Resetear?")){                                                                
                        //location.reload() //resetea todo
                        comenzar()
                    } else {
                        console.log("Correctos ",siesta)
                    }                    
                }
                       
           }
           else {
            continue
           } 
        }
              
    }            
    return usuario 
}
    
/* obtiene la palabra seleccionada y crea parabra_juego siendo la que se va a adivinar
//Palabra juego = P _ _ _ _ _ A 
Palabra seleccionada = PALABRA
*/

function empezarJuego(palabra_seleccionada){
    palabra_juego = palabra_seleccionada.split('')    
    for (let i = 0; i < palabra_juego.length; i++) {
        if((i==0) || (i==palabra_juego.length-1)){            
        } else {
            palabra_juego[i]='_'            
        }                 
    }
    console.log(palabra_juego)
    return palabra_juego
}



function comenzar(){
    generarPalabra(getRandomInt(10))  //genera una palabra aleatoria   
    empezarJuego(palabra_seleccionada) 
    adivinar(palabra_juego, palabra_seleccionada,userX)
}
