# salmos-diarios

## ► Table of Contents

- [Instalação](#instalação)
- [AWS](#AWS)
- [API](#API)
- [Info](#INFO)
- [Troubleshooting](#troubleshooting)
- [Video Tutorial](#video)
## Instalação

### Passos

- git clone https://github.com/ferreirabraga/salmos-diarios.gi
- cd salmo-diarios
- npm install

### Execução
Abra um terminal entre na pasta do projeto que você clonou e execute o comando

```
Exemplo:
  serverless offline -s dev

```
Será mostrada as urls da API

```
   |   GET    | http://localhost:3000/dev/api/salmo                                        │
   │   POST   | http://localhost:3000/2015-03-31/functions/dia/invocations                 │
   │   GET    | http://localhost:3000/dev/api/salmo/json                                   │
   │   POST   | http://localhost:3000/2015-03-31/functions/diaJson/invocations             │
   │   GET    | http://localhost:3000/dev/api/salmo/{capitulo}                             │
   │   POST   | http://localhost:3000/2015-03-31/functions/capitulo/invocations            │
   │   GET    | http://localhost:3000/dev/api/salmo/{capitulo}/json                        │
   │   POST   | http://localhost:3000/2015-03-31/functions/capituloJson/invocations        │
   │   GET    | http://localhost:3000/dev/api/salmo/{capitulo}/{verso}                     │
   │   POST   | http://localhost:3000/2015-03-31/functions/verso/invocations               │
   │   GET    | http://localhost:3000/dev/api/salmo/{capitulo}/{verso}/json                │
   │   POST   | http://localhost:3000/2015-03-31/functions/versoJson/invocations           │
   │   POST   | http://localhost:3000/dev/api/salmo/favoritos                              │
   │   POST   | http://localhost:3000/2015-03-31/functions/favorito/invocations            │
   │   DELETE | http://localhost:3000/dev/api/salmo/favoritos                              │
   │   POST   | http://localhost:3000/2015-03-31/functions/favoritoRemover/invocations     │
   │   GET    | http://localhost:3000/dev/api/salmo/favoritos/{telefone}                   │ 

```
## AWS
### Enviado o projeto para AWS

1) Gerando credenciais:

Para enviar o projeto para a AWS você precisa gerar suas credenciais:
```
AWS_SECRET_ACCESS_KEY

AWS_ACCESS_KEY_ID
```
Siga o passo a passo nesse link para gerar suas credenciais
```
https://www.msp360.com/resources/blog/how-to-find-your-aws-access-key-id-and-secret-access-key/
```
2) Enviando o projeto para AWS

Execute o comando abaixo, onde XXXXX são as credenciais geradas no passo anterior

```
export AWS_SECRET_ACCESS_KEY=XXXXX
export AWS_ACCESS_KEY_ID=XXXXX
```
Agora para executar o deploy, execute o comando abaixo:
```
 serverless deploy --stage dev
```

## API

### Salmos
<details>
  <summary>
    <b>Get Salmo Diário</b> - <i>Retorna um salmo de forma aleatória em formato texto</i> (acesso a API externa)
  </summary>
  <br/>
  
  <b>Endpoint: (texto)</b> `GET https://o8uad25osg.execute-api.us-east-1.amazonaws.com/dev/api/salmo`
  <br /><br />
  Retorno:<br />
  ```
1) Disse o SENHOR ao meu Senhor: Assenta-te à minha mão direita, até que ponha os teus inimigos por escabelo dos teus pés.
2) O Senhor enviará o cetro da tua fortaleza desde Sião, dizendo: Domina no meio dos teus inimigos.
3) O teu povo será mui voluntário no dia do teu poder; nos ornamentos de santidade, desde a madre da alva, tu tens o orvalho da tua mocidade.
4) Jurou o Senhor, e não se arrependerá: tu és um sacerdote eterno, segundo a ordem de Melquisedeque.
5) O Senhor, à tua direita, ferirá os reis no dia da sua ira.
6) Julgará entre os gentios; tudo encherá de corpos mortos; ferirá os cabeças de muitos países.
7)Beberá do ribeiro no caminho, por isso exaltará a cabeça.
  ```
  
<b>Endpoint: (JSON)</b> `GET - https://o8uad25osg.execute-api.us-east-1.amazonaws.com/dev/api/salmo/json`
  <br /><br />
  Retorno:<br />
  ```
  {
  "capitulo": 110,
  "versos": [
    {
      "number": 1,
      "text": "Disse o SENHOR ao meu Senhor: Assenta-te à minha mão direita, até que ponha os teus inimigos por escabelo dos teus pés."
    },
    {
      "number": 2,
      "text": "O Senhor enviará o cetro da tua fortaleza desde Sião, dizendo: Domina no meio dos teus inimigos."
    },
    {
      "number": 3,
      "text": "O teu povo será mui voluntário no dia do teu poder; nos ornamentos de santidade, desde a madre da alva, tu tens o orvalho da tua mocidade."
    },
    {
      "number": 4,
      "text": "Jurou o Senhor, e não se arrependerá: tu és um sacerdote eterno, segundo a ordem de Melquisedeque."
    },
    {
      "number": 5,
      "text": "O Senhor, à tua direita, ferirá os reis no dia da sua ira."
    },
    {
      "number": 6,
      "text": "Julgará entre os gentios; tudo encherá de corpos mortos; ferirá os cabeças de muitos países."
    },
    {
      "number": 7,
      "text": "Beberá do ribeiro no caminho, por isso exaltará a cabeça."
    }
  ]
}
  ```
  
</details>


<details>
  <summary>
    <b>Get Salmo Diário por capítulo</b> - <i>Retorna um salmo pelo capítulo informado em formato texto</i> (acesso a API externa)
  </summary>
  <br/>
  
  <b>Endpoint:(texto)</b> `GET https://o8uad25osg.execute-api.us-east-1.amazonaws.com/dev/api/salmo/{capitulo}`
  <br /><br />
  Retorno:<br />
  ```
1) Disse o SENHOR ao meu Senhor: Assenta-te à minha mão direita, até que ponha os teus inimigos por escabelo dos teus pés.
2) O Senhor enviará o cetro da tua fortaleza desde Sião, dizendo: Domina no meio dos teus inimigos.
3) O teu povo será mui voluntário no dia do teu poder; nos ornamentos de santidade, desde a madre da alva, tu tens o orvalho da tua mocidade.
4) Jurou o Senhor, e não se arrependerá: tu és um sacerdote eterno, segundo a ordem de Melquisedeque.
5) O Senhor, à tua direita, ferirá os reis no dia da sua ira.
6) Julgará entre os gentios; tudo encherá de corpos mortos; ferirá os cabeças de muitos países.
7)Beberá do ribeiro no caminho, por isso exaltará a cabeça.
  ```
  
  <b>Endpoint:(JSON)</b> `GET https://o8uad25osg.execute-api.us-east-1.amazonaws.com/dev/api/salmo/{capitulo}/json`
  <br /><br />
  Retorno:<br />
  ```
  {
  "capitulo": 110,
  "versos": [
    {
      "number": 1,
      "text": "Disse o SENHOR ao meu Senhor: Assenta-te à minha mão direita, até que ponha os teus inimigos por escabelo dos teus pés."
    },
    {
      "number": 2,
      "text": "O Senhor enviará o cetro da tua fortaleza desde Sião, dizendo: Domina no meio dos teus inimigos."
    },
    {
      "number": 3,
      "text": "O teu povo será mui voluntário no dia do teu poder; nos ornamentos de santidade, desde a madre da alva, tu tens o orvalho da tua mocidade."
    },
    {
      "number": 4,
      "text": "Jurou o Senhor, e não se arrependerá: tu és um sacerdote eterno, segundo a ordem de Melquisedeque."
    },
    {
      "number": 5,
      "text": "O Senhor, à tua direita, ferirá os reis no dia da sua ira."
    },
    {
      "number": 6,
      "text": "Julgará entre os gentios; tudo encherá de corpos mortos; ferirá os cabeças de muitos países."
    },
    {
      "number": 7,
      "text": "Beberá do ribeiro no caminho, por isso exaltará a cabeça."
    }
  ]
}
  ```
</details>

<details>
  <summary>
    <b>Get Salmo Diário por capítulo e verso</b> - <i>Retorna um salmo pelo capítulo informado e o verso em formato texto</i> (acesso a API externa)
  </summary>
  <br/>
  
  <b>Endpoint:(texto)</b> `GET https://o8uad25osg.execute-api.us-east-1.amazonaws.com/dev/api/salmo/{capitulo}/{verso}`
  <br /><br />
  Retorno:<br />
  ```
1) Disse o SENHOR ao meu Senhor: Assenta-te à minha mão direita, até que ponha os teus inimigos por escabelo dos teus pés.
2) O Senhor enviará o cetro da tua fortaleza desde Sião, dizendo: Domina no meio dos teus inimigos.
3) O teu povo será mui voluntário no dia do teu poder; nos ornamentos de santidade, desde a madre da alva, tu tens o orvalho da tua mocidade.
4) Jurou o Senhor, e não se arrependerá: tu és um sacerdote eterno, segundo a ordem de Melquisedeque.
5) O Senhor, à tua direita, ferirá os reis no dia da sua ira.
6) Julgará entre os gentios; tudo encherá de corpos mortos; ferirá os cabeças de muitos países.
7)Beberá do ribeiro no caminho, por isso exaltará a cabeça.
  ```

  
  <b>Endpoint:(JSON)</b> `GET https://o8uad25osg.execute-api.us-east-1.amazonaws.com/dev/api/salmo/{capitulo}/{verso}/json`
  <br /><br />
  
  ```
  {
    "capitulo": 110,
    "verso": 2,
    "texto": "O Senhor enviará o cetro da tua fortaleza desde Sião, dizendo: Domina no meio dos teus inimigos."
  }
  ```
</details>


 <details>
  <summary>
    <b>Salvar favorito</b> - <i>Salva um salmo como favorito</i> (uso de banco de dados Mongo)
  </summary>
  <br/>
  
  <b>Endpoint:(texto)</b> `POST - https://o8uad25osg.execute-api.us-east-1.amazonaws.com/dev/api/salmo`
  <br /><br />
  Requisição:<br />
  ```
{
  "telefone":"{insiraSeuTelefone}",
  "capitulo":"30",
  "verso":"1",
  "texto":"Teste"
}
  ```
  Retorno sucesso:<br />
  ```
{
    "codigo": 1,
    "mensagem": "Salmos cadastrado com sucesso."
}
  ```
  Retorno erro:<br />
  ```
{
    "codigo": 0,
    "mensagem": "Salmos já cadastrado anteriormente."
}
  ```

</details>

 <details>
  <summary>
    <b>Listar Favoritos</b> - <i>Lista os salmos favoritos</i>  (uso de banco de dados Mongo)
  </summary>
  <br/>
  
  <b>Endpoint:(texto)</b> `GET - https://o8uad25osg.execute-api.us-east-1.amazonaws.com/dev/api/salmo/favorito/{telefone}  `
  <br /><br />
  
  
  Retorno sucesso:<br />
  ```

    "codigo": 1,
    "dados": [
        {
            "_id": "63b8e08fc18dfa165995891c",
            "telefone": "5561981526669",
            "capitulo:": "30",
            "verso": "1",
            "texto": "Teste"
        },
        {
            "_id": "63b9846fa77ef30008cd6f8a",
            "telefone": "5561981526669",
            "capitulo:": "1",
            "verso": "1",
            "texto": "Teste 1"
        }
    ]
}
  ```
  Retorno erro:<br />
  ```
{
    "codigo": 0,
    "mensagem": "Não existem salmos para esse telefone informado."
}
  ```

</details>

<details>
  <summary>
    <b>Apagar favorito</b> - <i>Apaga um salmo favorito</i> (uso de banco de dados Mongo)
  </summary>
  <br/>
  
  <b>Endpoint:(texto)</b> `DETELE - https://o8uad25osg.execute-api.us-east-1.amazonaws.com/dev/api/salmo`
  <br /><br />
  Requisição:<br />
   ```
  {
    "telefone":"{insiraSeuTelefone}",
    "capitulo":"30",
    "verso":"1"
  }
  ```
  Retorno sucesso:<br />
  
   ```
{
    "codigo": 1,
    "mensagem": "Salmo excluído com sucesso."
}
  ```
  Retorno erro:<br />
   ```
{
    "codigo": 0,
    "mensagem": "Salmo não cadastrado com favorito."
}
 ```

</details>

## Info
OBS: Foi utilizado o número do celular como chave de somente para fins de demostração de utilização de banco de dados.

OBS1: O database-salmos-diarios foi criado na plataforma https://www.mongodb.com/ para uso educionais e foi criado uma coleção favoritos para salvar os salmos favoritos do usuário.

## troubleshooting
1) Erro que ocorreu depois de tentar rodar a url que executa o MongoDB.
```
 MongoError: failed to connect to server [mongodb:27017] on first connect
```
<b> Solução</b>
Esse erro ocorreu por causa de configuração não realizada no Atlas https://cloud.mongodb.com/

Veja solução em https://stackoverflow.com/questions/41318354/mongodb-failed-to-connect-to-server-on-first-connect

2) Cannot find module 'mongodb'

```
AWS Lambda error "Cannot find module 'mongodb'"
```
<b> Solução</b>
1) Criar uma pasta com o nome nodeJS na sua máquina local
2) Adicione as libs da pasta node_modules relacioandas com o Mongo
3) Zip essa pasta
4) Acesse sua conta da AWS e pesquisa por Lambda->Functions
   - pesquise no filtro a palabra gostei
   - vai aparecer 3 opções 1) fiap-dev-gostei
                           2) fiap-dev-gosteiListar
                           3) fiap-dev-gosteiDeletar

5) Selecione uma da lambdas, role a pagina procure por Layers e clique em Add a layer
6) Clique no link create a new layer
7) Cadastre um nome, uma descrição, selecione a opção upload a .zip file, clique no botão UPLOAD e depois clique em create.
   <i>Quando for adicionar o layer para o segundo Lambda selecione a opção custom layer</i>
   
## video
### Veja o vídeo mostrando a instalação e o deploy da aplicação
<a href="https://youtu.be/mIo1KAmkCRs" target="_blank">Projeto Serveless MBA BB</a>
