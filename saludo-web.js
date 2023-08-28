const http = require('http');
const fs = require("fs");
const url = require("url");
http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    if (path == "/" || path == "/index.html") {
        fs.readFile("./index.html", (error, pagina1) => {
            let codigo = 200;
            if (error) {
                codigo = 404;
                pagina1 = `<html>
                             <head><title>Pagina Dinamica</title></head>
<body><p>Error 404: Page not found<p></body>
                           </html>`;
            }
            res.writeHead(codigo, {"Content-Type": "text/html"});
            res.write(pagina1);
            return res.end();
        });
    } else if (path == "/recuperar-datos") {
        const formulario = url.parse(req.url, true).query;
        const pagina2 = `<html>
                           <head><title>Pagina Dinamica</title></head>
<body>
                             <p>Bienvenide ${formulario["nombre"]}!</p>
<p>Su clave es: ${formulario["clave"]}</p>
                             <p><a href="index.html">Volver</a></p>
                           </body>
                         </html>`;
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(pagina2);
        res.end();
    } else {
        const pagina3 = `<html>
                           <head><title>Pagina Dinamica</title></head>
<body><p>Error 404: Page not found<p></body>
                         </html>`;
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write(pagina3);
        res.end();
      }
}).listen(8080);
console.log("Servidor web iniciado...");