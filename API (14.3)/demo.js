let fetchPersonajes = "https://rickandmortyapi.com/api/character"; 
let pregunta = parseInt(prompt("dime qué pagina quieres mostrar")); // 5

fetch(fetchPersonajes + "?page=" + pregunta) // PIDES LA INFORMACIÓN A LA API
.then(function cogerRespuesta(respuesta) {  // TE DEVUELVE ESA INFORMACIÓN (EN LA VARIABLE RESPUESTA)
    return respuesta.json(); // TRANSFORMO ESA INFORMACIÓN PARA PODERLA PROCESAR
})
.then(function cogerData(data){ // YA TENGO LA INFORMACIÓN PROCESADA
    imprimirFicha(data);
})

// ahora imprime la info...
// ahora, créame un botoón...
function imprimirFicha(data){
    for (let i = 0; i < data.results.length; i++){
        document.getElementById("print").innerHTML += 
        `
        <div class="ficha">
        <h1>${data.results[i].name}</h1>
        <img src="${data.results[i].image}">
        <p>${data.results[i].species}</p>
        <p>${data.results[i].gender}</p>
        </div>  
        `
    }
}


// https://rickandmortyapi.com/api/character

// Lo que hacemos con el .then es que hacemos que espere hasta que 
//se complete para poder seguir, ya que si no se pone un .then seguira leyendo codigo y dara muchos errores