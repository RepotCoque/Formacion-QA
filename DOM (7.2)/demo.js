let metros = {
    4000: {
        constructor: "Caf",
        trenes: 20,
        composición: 5,
        velocidadMaxima: 90,
        capaciadadMaxima: 1111,
        línea: "L1",
        construccion: 1990,
        ancho: "internacional",
        img: "https://4.bp.blogspot.com/-BSPawxOyXjE/WCNpvNMrCPI/AAAAAAAAIwE/M1dUqbng__kwt7HYgp52bd2vHCWRyZe_ACLcB/s400/2000_07.jpg"
    },
    6000: {
        constructor: "Caf",
        trenes: 26,
        composición: 5,
        velocidadMaxima: 80,
        capaciadadMaxima: 1111,
        línea: "L1",
        construccion: 2020,
        ancho: "internacional",
        img: "https://pbs.twimg.com/media/Epw_YY2XEAEf7HJ.jpg"
    },
    7000: {
        constructor: "Alstom",
        trenes: 26,
        composición: 5,
        velocidadMaxima: 80,
        capaciadadMaxima: 1234,
        línea: "L3",
        construccion: 2023,
        ancho: "ibérico",
        img: "https://www.vialibre-ffe.com/images/image/38564_tmb.png"
    },
    8000: {
        constructor: "Alstom",
        trenes: 24,
        composición: 5,
        velocidadMaxima: 80,
        capaciadadMaxima: 1488,
        línea: "L1",
        construccion: 2023,
        ancho: "internacional",
        img: "https://www.vialibre-ffe.com/images/image/38564_tmb.png"
    }
}

function clicar(){
 // GRABAR LO QUE EL USUARIO HA ESCRITO. 
 let datoUsuario = document.getElementById("search").value;

 if (datoUsuario == "4000" || datoUsuario == "6000" || datoUsuario == "7000" || datoUsuario == "8000") {

    document.getElementById("print").innerHTML += 
    `
    <div class="ficha">
    <h3>Serie ${datoUsuario}</h3>
    <img src="${metros[datoUsuario].img}" alt="foto no encontrada">
    <p>Año construcción: ${metros[datoUsuario].construccion}</p>
    <p>Velocidad: ${metros[datoUsuario].velocidadMaxima}</p>
    </div>
    `
    } else {

        document.getElementById("print").innerHTML += 
        `
        <div class="ficha">
        <h3>Serie ${datoUsuario}</h3>
        <h3>Búsqueda errónea</h3>
        </div>
        `
    }

}

function enter(e){
    if(e.keyCode == 13){
         clicar();
    }
}

function reset(){
    //Recarga la pagina al completo para borrar las tablas
    location.reload();
}