'use strict';

const { defaultAuthProviders } = require('mongodb-core');
var constantes = require('./constantes');
var request = require('request');
var MongoClient = require('mongodb').MongoClient;
var queriesDB = require('./queries');

module.exports.adicionar = async (event) => {
  
  console.log(" deu certo");
  let bodyP = JSON.parse(event.body);

  return adicionar(bodyP).then(
    function (value) {
      return ({
        statusCode: 200,
        body: JSON.stringify(value)
      })
    }).catch(err => ({
      statusCode: err.statusCode || 500,
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({ message: err.message })
    }));

};

function adicionar(dados) {
  let resposta = {};
  return new Promise(function (resolve, reject) {
      
      let queryInsert = { "telefone": dados.telefone, "capitulo:": dados.capitulo, "verso":dados.verso,"texto":dados.texto };
      MongoClient.connect(process.env.DB, function (err, db) {
          if (err) throw err;
          let database = db.db(constantes.DATABASE);
          let query = { "telefone": dados.telefone, "capitulo:": dados.capitulo, "verso":dados.verso };
          
          database.collection(constantes.TABELA_SALMOS)
              .find(query)
              .toArray((err, results) => {
                  if (err) throw err;
                  if (results.length > 0) {
                      
                      resposta.codigo = 0;
                      resposta.mensagem ="Salmos já cadastrado anteriormente.";

                      db.close();
                      resolve(resposta);
                  } else {
                     
                      queriesDB.insereDadosTabela(queryInsert, constantes.TABELA_SALMOS)
                          .then(function (value) {
                              
                              resposta.codigo = 1;
                              resposta.mensagem = "Salmo salvo com sucesso";
                              db.close();
                              resolve(resposta);
                          })
                          .catch(function (err) {
                              
                              resposta.codigo = 0;
                              resposta.mensagem = "Erro ao inserir salmo.";
                              db.close();
                              resolve(resposta);
                          });
                         
                  }
                
              });
      });
  });
}

module.exports.remover = async (event) => {
  
  console.log(" deu certo");
  let bodyP = JSON.parse(event.body);

  return remover(bodyP).then(
    function (value) {
      return ({
        statusCode: 200,
        body: JSON.stringify(value)
      })
    }).catch(err => ({
      statusCode: err.statusCode || 500,
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({ message: err.message })
    }));

};

function remover(dados) {
  let resposta = {};

  return new Promise(function (resolve, reject) {
      
      let queryDelete = { "telefone": dados.telefone, "capitulo:": dados.capitulo, "verso":dados.verso };
      MongoClient.connect(process.env.DB, function (err, db) {
        if (err) throw err;
        let database = db.db(constantes.DATABASE);
        let query = { "telefone": dados.telefone, "capitulo:": dados.capitulo, "verso":dados.verso };
        

        queriesDB.deletaDados(queryDelete, constantes.TABELA_SALMOS)
        .then(function (value) {
            
            resposta.codigo = 1;
            resposta.mensagem = "Salmo excluído com sucesso";
            db.close();
             resolve(resposta);
        })
        .catch(function (err) {
            
            resposta.codigo = 0;
            resposta.mensagem = "Erro ao exlcuir salmo.";
            db.close();
            resolve(resposta);
        });
        
      })
  });
}

module.exports.listar = async (event) => {
  
  let path = event.path.split('favoritos/');
  var telefone = path[1]; 

  return listar(telefone).then(
    function (value) {
      return ({
        statusCode: 200,
        body: JSON.stringify(value)
      })
    }).catch(err => ({
      statusCode: err.statusCode || 500,
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({ message: err.message })
    }));

};

function listar(telefone) {
  let resposta = {};
  return new Promise(function (resolve, reject) {
  
    MongoClient.connect(process.env.DB, function (err, db) {
        if (err) throw err;
        let database = db.db(constantes.DATABASE);
        
        let query = {"telefone":telefone}
        
        database.collection(constantes.TABELA_SALMOS)
          .find(query)
          .toArray((err, results) => {
            if (err) throw err;
            if (results.length > 0) {
            
              db.close();
              resolve(results);          
            } else {
              resposta.codigo = 0;
              resposta.mensagem = "Número de telefone sem salmos salvos.";
              db.close();
              resolve(resposta);
            }
            
          });
      })
  });
}