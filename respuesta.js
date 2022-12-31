  const tipoDeSuscripcion = "Basic";

  if (tipoDeSuscripcion == "Free") {
    console.log ("Solo puedes tomar los cursos gratis");
  } 
  else if  (tipoDeSuscripcion == "Basic") {
    console.log ("Puede tomar casi todos los cursos de Platzi por un mes");
  }
  else if (tipoDeSuscripcion == "Expert") {
    console.log ("Puedes tomar casi todos los cursos durante un año");
  }
  else if  (tipoDeSuscripcion == "ExpertDuo") {
    console.log ("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
  } 
    


// Ciclos 


for ( let i = 0; i < 5; i++) {
    console.log ("El valor de i es: " + i);
}


// comvertir for a while

let i = 0;

while (i < 5) {
    console.log ("El valor de i es: " + i);
    i++;
}

for (let i= 10; i >= 2; i--) { 
    console.log ("El valor de i es: " + i);
}

let e = 10;

while (e >= 2) {
    console.log ("El valor de e: " + e);
    e--;
}

// preguta 

let respuesta = prompt("Cuánto es 2 + 2");

if (respuesta == "4") {
    console.log ("Respuesta correcta, felicidades");
}
else {
    console.log ("Respuesta incorrecta, ve a la primaria 😑")
}

// suma con mensaje de felicitacion usando alert

let respuesta1 = prompt("Cuánto es 2 + 2");

if (respuesta1 == "4") {
    alert ("Respuesta correcta, felicidades");
}
else {
    alert ("Respuesta incorrecta, ve a la primaria 😑")
}

// si esta mal la respuesta, reiniciar. si esta bien felicitar. 

while (respuesta != "4") {
    let pregunta = prompt("Cuánto es 2 + 2")
    respuesta = pregunta
    
    if ( respuesta == "4")
    alert ("Respuesta correcta");
}

/// arrays

const arrays = ['Jared', 'Oscar', 'Erick'];

/// funcion que se pueda recibir cualquier rray como parametro e imprimir su primer elemento

function imprimirElemto (elemento) {
  console.log (elemento[0])
}

/// funcion que pueda recibir cualquiera array como parametro e imprima todos sus elementos uno por uno

function imprimirElemtoPorElemento (elemento) {
  for (let i = 0; i < elemento.length; i++)
  console.log (elemento[i])
}

/// listas

const obj = {
 nombre: 'Jared',
 edad: 16,
 comidasFavoritas: ['Enchiladas', 'Hamburgesas', 'Menudo'],
}


/// crea una fucion que pueda recibir cualquier objeto como paramentro e imprima todos sus elementos uno por uno

function imprimirElemtoPorElemento (obj) {
  const arr = Object.values(obj)
for (let i = 0; i < arr.length; i++)
console.log (arr[i])
}

/// Bonus

const tipoDeSuscripcion1 = {
  free: "Solo puedes tomar los cursos gratis",
  basic: "Puede tomar casi todos los cursos de Platzi por un mes",
  expert: "Puedes tomar casi todos los cursos durante un año",
  expertduo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}

function conseguirTipoDeSuscripcion (suscripcion) {
     
  if (tipoDeSuscripcion[suscripcion]){
      console.log (tipoDeSuscripcion[suscripcion]);
    return;
    
  }
    console.warn ("es suscripcion no existe")
}