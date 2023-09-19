// Importa el módulo 'request' para realizar solicitudes HTTP.
const request = require("request");

// Importa el módulo 'cheerio' para analizar y manipular documentos HTML.
const cheerio = require("cheerio");

// Realiza una solicitud HTTP GET a la URL "http://localhost:3000/".
// Cuando la solicitud se complete, el resultado se pasará a la función de devolución de llamada.
request("http://localhost:3000/", (err, response, h1) => {
    // Comprueba si hay errores durante la solicitud.
    if (err) {
        console.log(err); // Si hay un error, muestra el error en la consola y retorna.
        return;
    }

    // Utiliza 'cheerio' para cargar el contenido HTML recibido en la respuesta.
    const $ = cheerio.load(h1);

    // Busca el primer elemento 'h1' en el documento HTML y obtiene su texto.
    const firstText = $("h1").text();

    // Muestra el texto del primer elemento 'h1' en la consola.
    console.log("Primer texto en el HTML:", firstText.trim());
});
