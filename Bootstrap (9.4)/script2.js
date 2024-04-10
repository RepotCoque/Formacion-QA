function cambiarColor() {
    var body = document.body;

    // Verificar la clase actual del body
    if (body.classList.contains('color1')) {
        // Si tiene la clase 'color1', cambiar a 'color2'
        body.classList.remove('color1');
        body.classList.add('color2');
        header.classList.remove('color1');
        header.classList.add('color2');
        button.classList.remove('color1');
        button.classList.add('color2');
    } else {
        // Si tiene la clase 'color2', cambiar a 'color1'
        body.classList.remove('color2');
        body.classList.add('color1');
        header.classList.remove('color2');
        header.classList.add('color1');
        button.classList.remove('color2');
        button.classList.add('color1');
    }
}