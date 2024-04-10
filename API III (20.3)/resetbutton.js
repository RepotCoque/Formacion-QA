document.getElementById("restartButton").addEventListener("click", function() {
    // Hacer una solicitud a la API para reiniciarla
    fetch("https://randomuser.me/api/", {
        method: 'POST'
        // Puedes agregar más opciones según sea necesario, como headers o body
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Manejar la respuesta si es necesario
        console.log('API reiniciada exitosamente');
    })
    .catch(error => {
        console.error('Hubo un problema reiniciando la API:', error);
    });
});
