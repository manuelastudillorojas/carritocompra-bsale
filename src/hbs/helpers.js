const hbs = require('hbs');


hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');

});

hbs.registerHelper('imagenExiste', (url) => {

    if (url === '' || url === null) {
        return 'assets/imagenes/perrito-triste.jpg';
    } else {
        return url
    }


});

hbs.registerHelper('formatoNumero', (precio) => {

    if (precio >= 0) {

        m = new Intl.NumberFormat('de-DE').format(precio);

    } else {

        m = new Intl.NumberFormat('de-DE').format(precio);

    }
    return m;


});