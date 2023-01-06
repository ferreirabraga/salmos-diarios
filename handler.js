'use strict';

const { defaultAuthProviders } = require('mongodb-core');
var request = require('request');

// module.exports.hello = async (event) => {
//   var capitulo = Math.floor(Math.random() * 150) + 1;
//   return {
//     statusCode: 200,
//     body: JSON.stringify({
//       capitulo: capitulo,
//       // input: event,
//     }, null, 2),
//   };

//   // Use this code if you don't use the http event with the LAMBDA-PROXY integration
//   // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
// };

module.exports.porVerso = (event, context) => {

  var isJson = false;

  //verfica se o retorno deve ser no formato JSON
  isJson = event.path.includes('json');
  let path = event.path.split('/');
  var capitulo = path[2]; 
  var verso = path[3]; 
  

  return buscaSalmoPorVersao(capitulo, verso, isJson).then(
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

module.exports.porCapitulo = (event, context) => {

  var isJson = false;

  //verfica se o retorno deve ser no formato JSON
  isJson = event.path.includes('json');
  let path = event.path.split('/');
  var capitulo = path[2]; 

  return buscaSalmo(capitulo, isJson).then(
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

module.exports.dodia = (event, context) => {

  var capitulo = Math.floor(Math.random() * 150) + 1;
  var isJson = false;

  //verfica se o retorno deve ser no formato JSON
  isJson = event.path.includes('json');
  let bodyP = JSON.parse(event.body);

  return buscaSalmo(capitulo, isJson).then(
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

function buscaSalmoPorVersao(capitulo, verso, isJson) {
  return new Promise(function (resolve, reject) {
    let dados = "";
    request('https://www.abibliadigital.com.br/api/verses/acf/sl/'+capitulo+"/"+verso, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode); 
        console.log('body:', body);
        var resposta = JSON.parse(body);
        if(resposta.msg == undefined){
          dados = montaResposta(resposta, isJson);
        }else{
          dados = {};
          dados.msg = "Verso "+verso+" inexistente para o capitulo "+capitulo;
        }
        
        resolve(dados);
    });
  });
};

function buscaSalmo(capitulo, isJson) {
  return new Promise(function (resolve, reject) {
    let dados = "";
    
    request('https://www.abibliadigital.com.br/api/verses/acf/sl/'+capitulo, function (error, response, body) {
        //somente log
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode); 
        console.log('body:', body);
        //recupera retorno da requisição
        dados = montaResposta(JSON.parse(body), isJson);
        resolve(dados);
    });
  });
};

function montaResposta(body, isJson) {
  
  let versos = "";
  let contaVersos = 1;

  //verifica se o retorno é json
  if(!isJson){
    if(body.verses != undefined){
      body.verses.forEach(element => {
        versos += (contaVersos++)+")"+element.text+" ";
      });
    }else{
      versos = body.text;
    }
  }else{
    versos = {};
    if(body.chapter.number == undefined){
      versos.capitulo = body.chapter;
      versos.verso = body.number;
    }else{
      versos.capitulo = body.chapter.number;
    }
    
    if(body.verses != undefined){
      versos.versos = body.verses;
    }else{
      versos.texto = body.text;
    }
    
  }
  return versos;
};



