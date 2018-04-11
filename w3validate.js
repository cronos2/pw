const w3cjs = require('w3cjs');

const documents = [
    'actividades',
    'actividad-detail',
    'foro',
    'hilo-detail',
    'horario',
    'index',
    'index2',
    'localizacion',
    'login',
    'logout',
    'nuevo-hilo',
    'promociones',
    'registro',
    'tecnico-detail',
    'tecnicos'
];

documents.forEach(file => {
    w3cjs.validate({
        file: 'dist/' + file + '.html',
        output: 'json',
        callback: (err, res) => console.log(err || res)
    });
});
