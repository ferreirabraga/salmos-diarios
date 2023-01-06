
console.log("ambiente:"+process.env.DB)
console.log("banco:"+process.env.SCHEMA)
const DATABASE = process.env.SCHEMA;
const TABELA_SALMOS = 'salmos-ja-lidos';

// const SCOPES = ['cadastrarAnimalAbrigo','alterarAnimalAbrigo','deletarAnimalAbrigo', 'alteraAnimalFoto',
// 'cadastrarAdotanteAnimal', 'alterarAdotanteAnimal', 'deletarAdotanteAnimal','deleteAnimalFoto',
// 'ping','consultaPets', 'consultarAdotanteAnimal', 'upload',
// 'alteraAnimalParaDoacao', 'registraAnimalPerdido','registraAnimalComoEntrado', 'registraAnimalComoEntradoForaLista',
// 'geraQrcodeDoacao', 'assinaQrcodeDoacao','consultaDadosDocumentoAdocao',
// 'cadastrarParceiro', 'consultaDadosQrcodeDoacao','atualizarListaVacina','buscaAnimal'];

const JWT_EXPIRATION_TIME = '10080m';// 30d 30 dias / 5m --> 5 minutos

module.exports = {
    DATABASE, 
    TABELA_SALMOS,
    JWT_EXPIRATION_TIME
  };
  