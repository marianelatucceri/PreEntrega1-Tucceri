//Función 1
function saludar(){     
    let nombre = prompt("Ingresa tu nombre")    //Variable
    let apellido = prompt("Ingresa tu apellido")
    
    //Condicionales Compuestas
    if ((nombre !="") && (apellido !="")) {              
         alert ("Bienvenida " + nombre + " " + apellido + " a Bellíssima")
     } else {
         alert("Por favor, ingresa tu nombre y apellido.")
     }
    
}
saludar()

//Función 2
function listado(){     

let listado = alert("A continuación podrás ver los servicios y valores actualizados, abonando en efectivo.")
}
listado()


//Arrays con Objetos
let servicios = [     

    {nombre: "esmaltado semipermanente", precio: 4000},

    {nombre: "kapping", precio: 5500},

    {nombre: "softgel", precio: 7000},

    {nombre: "retirado", precio: 1500},

    {nombre: "diseño", precio: 1000}, 

]


//Ciclo For
for (let i=0; i<servicios.length; i++) {    
    alert("El " + servicios[i].nombre + " tiene un valor de $" + servicios[i].precio)
}


//COMBOS
alert("También tenemos unas promos increíbles!".toUpperCase())

//Función 3
function combo1Sumar(semipermanente, retirado) {
   let combo1 = semipermanente + retirado
   alert("Combo 1: semipermanente + retirado $" + combo1)
}
combo1Sumar(3500, 1200)  

//Función 4
function combo2Sumar(kappin, diseño) {
    let combo2 = kappin + diseño
    alert("Combo 2: kapping + diseño $" + combo2)
 }
 combo2Sumar(5000, 900)   

//Función 5
function combo3Sumar(softgel, diseño) {
    let combo3 = softgel + diseño
    alert("Combo 3: softgel + diseño $" + combo3)
}
 combo3Sumar(6500, 900)    


//Función 6
function contactar(){
    let contacto = prompt("Si querés reservar un turno, por favor deja tu número de teléfono y a la brevedad nos comunicaremos.")
    if (contacto != " "){
        alert("Muchas Gracias!")
    }
}
contactar()




