const express = require('express');
const app = express();
app.get(['/', '/index2.html'], (req, res) => {
    res.sendFile(__dirname + '/index2.html');
});
app.get('/recuperar-datos', (req, res) => {
    const nom = req.query.nombre;
    const cla = req.query.clave;
    const pagina = `<html>
                    <head><title>Pagina Dinamica</title></head>
<body>
                      <p>Bienvenide ${nom}!</p>
<p>Su clave es: ${cla}</p>
                      <p><a href="index.html">Volver</a></p>
                    </body>
                  </html>`;
    res.send(pagina);
});
app.get('*', (req, res, next) => {
    let err = new Error();
    err.statusCode = 404;
    next(err);
});
app.use((err, req, res, next) => {
    const msg = (err.statusCode == 404 ? 'Page not found' : err.message);
    const pagina = `<html>
                    <head><title>Pagina Dinamica</title></head>
<body><p>Error ${err.statusCode}: ${msg}<p></body>
                  </html>`;
    res.status(err.statusCode).send(pagina);
});
app.listen(8080, () => {
    console.log('Servidor web iniciado...');
});
