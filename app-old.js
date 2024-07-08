const { log } = require('console');
const http = require('http');
http.createServer((req, res) => {
    // console.log(req);
    // res.writeHead(200,{'Content-Type': 'application/json'});

    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, { 'Content-Type': 'application/json' });

    res.write('Hola mundo');

    


    // const persona = {
    //     id: 1,
    //     nombre: 'Fernando'
    // }
    // // res.write(JSON.stringify(persona));
    res.end();
})
    .listen(8080);

console.log('Escuchandoel puerto', 8080);