let resultado, titleName, firstName, lastName, fullName, streetName, city, state, country, postcode, fullDirection, photo, userName, gender, latitude, longitude, extcords, offset, description, timezone, dob, comphone;

function llamarAPI(){
    fetch("https://randomuser.me/api/")
    .then(function cogerRespuesta(respuesta){
        return respuesta.json();
    })
    .then(function cogerData(data){
        resultado = data.results;
        titleName = resultado[0].name.title;
        firstName = resultado[0].name.first;
        lastName = resultado[0].name.last;
        fullName = `${titleName} ${firstName} ${lastName}`;
        mail = resultado[0].email;
        streetName = resultado[0].location.street.name;
        streetNumber = resultado[0].location.street.number;
        city = resultado[0].location.city;
        state = resultado[0].location.state;
        country = resultado[0].location.country;
        postcode = resultado[0].location.postcode;
        fullDirection = `${streetName} ${streetNumber} ${city} ${state} ${country} ${postcode}`
        photo = resultado[0].picture.large;
        userName = resultado[0].login.username;

        
        gender = resultado[0].gender;
        latitude = resultado[0].location.coordinates.latitude;
        longitude = resultado[0].location.coordinates.longitude;
        extcords = `${latitude} ${longitude}`
        offset = resultado[0].location.timezone.offset;
        description = resultado[0].location.timezone.description;
        timezone = `${offset} ${description}`
        phone = resultado[0].phone;
        cell = resultado[0].cell;
        comphone = `${phone} - ${cell}`/**/
        
        print();
        print1();
        

    })
}

function print(){
    document.getElementById("print").innerHTML += 
    `<div id="persona">
    <img src="${photo}" alt="foto">
    <h1>${fullName}</h1>
    <h3>Nombre de usuario: ${userName}</h3>
    <p>Mail: ${mail}</p>
    <p>Dirección completa: ${fullDirection}</p>
    </div>
    `
}

function print1(){
    document.getElementById("print").innerHTML += 
    `<div id="persona">
    <h1>Datos Extra:</h1>
    <p>Genero: ${gender}</p>
    <p>Cordenadas: ${extcords}</p> 
    <p>Zona Horaria: ${timezone}</p>
    <p>Numeros de telefono: ${comphone}</p>
    </div>
    `
}