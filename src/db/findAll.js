// const client = require('./conexion')
// const db = client.db("dbGeografica");
const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('geografica');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
     // assert.equal(err, null);
      console.log("Found the following records");
      console.log(`Nº documentos: ${docs.length}`)
      callback(docs);
    });
 }
 module.exports=findDocuments
//  findDocuments(db, (err, docs) => {
//      if (err) console.log(err)
//      else console.log(docs)
//  })