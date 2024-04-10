/*
let page1 = [
    "https://cdn.wccftech.com/wp-content/uploads/2022/12/WCCFstarwarsjedisurvivor2.jpg",
    "https://lumiere-a.akamaihd.net/v1/images/6047825fea89c20001bc7f2a-image_c06b80fa.jpeg",
    "https://lumiere-a.akamaihd.net/v1/images/62139e93abf9e400018e966b-image_7ce9bdaf.jpeg",
    "https://pm1.aminoapps.com/6308/e4339a201e2c5524f6002d9287261edfbc449a91_00.jpg"
]

let page2 = [
]


let page3 = [
    "https://static.wikia.nocookie.net/esstarwars/images/a/a6/Nautolan_Fem_Sith_SWGTCG.jpg"
]


let page4 = [
]
*/

function llamarAPI() {

  for (let i = 0; i < 4; i++) {
    switch (i) {
      case 0:
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=41.5667&lon=2.0167&appid=c97b2c3fbe5d6fbd8c41aecd158d723b")
          .then(function cogerRespuesta(respuesta) {
            return respuesta.json();
          })
          .then(function cogerData(data) {
            print(data, 0);
          });
        break;
      case 1:
        fetch("https://swapi.dev/api/species?page=2")
          .then(function cogerRespuesta(respuesta) {
            return respuesta.json();
          })
          .then(function cogerData(data) {
            print(data, 1);
          });
        break;
      case 2:
        fetch("https://swapi.dev/api/species?page=3")
          .then(function cogerRespuesta(respuesta) {
            return respuesta.json();
          })
          .then(function cogerData(data) {
            print(data, 2);
          });
        break;
      case 3:
        fetch("https://swapi.dev/api/species?page=4")
          .then(function cogerRespuesta(respuesta) {
            return respuesta.json();
          })
          .then(function cogerData(data) {
            print(data, 3);
          });
        break;
    }
  }
}

function print(data, indice) {

    switch (indice){
        case 0:
            for (let i = 0; i < data.results.length; i++) {
                document.getElementById("print").innerHTML += `<div id="persona">
                    <h1>${data.results[i].name}</h1>
                    <img width="500px" height="500px" src="${page1[i]}" alt="sin foto">
                    <p>${data.results[i].classification}</p>
                    </div>
                `;
            }
            break;
        case 1:
            for (let i = 0; i < data.results.length; i++) {
                document.getElementById("print").innerHTML += `<div id="persona">
                    <h1>${data.results[i].name}</h1>
                    <img width="500px" height="500px" src="${page2[i]}" alt="sin foto">
                    <p>${data.results[i].classification}</p>
                    </div>
                `;
            }
            break;
        case 2:
            for (let i = 0; i < data.results.length; i++) {
                document.getElementById("print").innerHTML += `<div id="persona">
                    <h1>${data.results[i].name}</h1>
                    <img width="500px" height="500px" src="${page3[i]}" alt="sin foto">
                    <p>${data.results[i].classification}</p>
                    </div>
                `;
            }
            break;
        case 3:
            for (let i = 0; i < data.results.length; i++) {
                document.getElementById("print").innerHTML += `<div id="persona">
                    <h1>${data.results[i].name}</h1>
                    <img width="500px" height="500px" src="${page4[i]}" alt="sin foto">
                    <p>${data.results[i].classification}</p>
                    </div>
                `;
            }
            break;
        }
  }
