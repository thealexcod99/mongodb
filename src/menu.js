const menu = require('simple-menu');
const readline = require('readline-sync')
const client = require('./db/conexion')
const findDocuments = require('./db/findAll')

const db = client.db("dbGeografica");

menu.reset();
 
menu.addText('Menú principal');
menu.addBreak('-', 60);
 
menu.addOption('Listar todos los datos', function() {
  console.log('Listar todos los datos');
  findDocuments(db, (err, docs) => {
    if (err) console.log(err)
    else console.log(docs)
  })
});
menu.addOption('Listar ciudades según pais', function() {
    const nameCountry = readline.question("Introduce pais: ");
    console.log(`Introducido ${name}`)
  });
 
menu.addBreak('-', 60);
menu.addQuit();
 
menu.init('What would you like to do?');