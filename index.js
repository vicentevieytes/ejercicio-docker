const fs = require('fs');
const express = require('express')

const app = express();
const PORT = 3000;

app.use(express.json());

app.post(('/api'), (req, res) => {
    const contenido = 'Mapeo de volumenes correcto\n';

    fs.writeFileSync('output.txt', contenido, (err) => {
        if (err) throw err;
        console.log('Archivo generado correctamente.');
    });
    res.send('Archivo guardado')
})

app.listen(PORT, () => {
    console.log('Escuchando puerto:', PORT);
})
