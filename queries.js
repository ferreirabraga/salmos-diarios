'use strict';

var MongoClient = require('mongodb').MongoClient;
var constantsDb = require('./constantes');

module.exports = {
    insereDadosTabela: function (dados, nomeTabela) {
        return new Promise(function (resolve, reject) {
            MongoClient.connect(process.env.DB, function (err, db) {
                if (err) throw err;
                var dbo = db.db(constantsDb.DATABASE);
                // var myobj = { name: "Company Inc", address: "Highway 37" };
                dbo.collection(nomeTabela).insertOne(dados, function (err, result) {
                    if (err) {
                        // util.mostraLog("Erro inserido na tabela ", err);
                        throw err;
                    }
                    // util.mostraLog("1 documento inserido na tabela ", nomeTabela);
                    db.close();
                    resolve(result);
                });
            });
        });
    }
    ,
    deletaDados : function(dadosDelete, nomeTabela){
      return new Promise(function(resolve, reject) {
        MongoClient.connect(process.env.DB, function(err, db) {
              if (err) throw err;
              var dbo = db.db(constantsDb.DATABASE);
              dbo.collection(nomeTabela).deleteOne(dadosDelete, function(err, result) {
                if (err) throw err;
                db.close();
                resolve(result); 
              });
          });
        });
    },
}