let resultado;

function llamarAPI(){
    fetch("https://pokeapi.co/api/v2/pokedex/1/")
    .then(function cogerRespuesta(respuesta){
        return respuesta.json();
    })
    .then(function cogerData(data){
        resultado = data.pokemon_entries;
        print(resultado);
    })
}


function print(resultado){

    for (let i = 0; i < resultado.length; i++){
         document.getElementById("print").innerHTML += 
        `<div id="persona">
        <p>${resultado[i]["pokemon_species"]["name"]}</p>
        </div>
        `
    }



   
}
