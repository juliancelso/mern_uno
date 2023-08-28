const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/saludar', (req, res) => {
    let nombre = req.body.nom;
    let pagina = '<!doctypehtml><html>';
    pagina += '<head><title>Pagina Dinamica</title></head><body>';
    pagina += 'Hola ' + nombre + "!";
    pagina += '</body></html>';
    res.send(pagina);
})
var server = app.listen(8080, () => {
    console.log('Servidor web iniciado');
});