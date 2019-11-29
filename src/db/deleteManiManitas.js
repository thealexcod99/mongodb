

const removeDocuments = function(db, pais, callback) {
    // Get the documents collection
    const collection = db.collection('geografia');
    // Delete document where a is 3
    collection.deleteMany({ pais : 3 }, function(err, result) {
      //assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Removed the document with the field a equal to 3");
      callback(err, result);
    });    
  }
  module.exports=removeDocuments;