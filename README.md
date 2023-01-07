# salmos-diarios

## ► Table of Contents

- [Instalação ?](#instalação)
- [API](#API)

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

## API

### Salmos
<details>
  <summary>
    <b>Get Salmo Diário</b> - <i>Retorna um salmo de forma aleatória em formato texto</i>
  </summary>
  <br/>
  
  <b>Endpoint: (texto)</b> `GET https://oiup8kr3zi.execute-api.us-east-1.amazonaws.com/dev/salmo`
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
  
<b>Endpoint: (JSON)</b> `GET - https://oiup8kr3zi.execute-api.us-east-1.amazonaws.com/dev/salmo/json`
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
    <b>Get Salmo Diário por capítulo</b> - <i>Retorna um salmo pelo capítulo informado em formato texto</i>
  </summary>
  <br/>
  
  <b>Endpoint:(texto)</b> `GET https://oiup8kr3zi.execute-api.us-east-1.amazonaws.com/dev/api/salmo/{capitulo}`
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
  
  <b>Endpoint:(JSON)</b> `GET https://oiup8kr3zi.execute-api.us-east-1.amazonaws.com/dev/api/salmo/{capitulo}/json`
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
    <b>Get Salmo Diário por capítulo e verso</b> - <i>Retorna um salmo pelo capítulo informado e o verso em formato texto</i>
  </summary>
  <br/>
  
  <b>Endpoint:(texto)</b> `GET https://oiup8kr3zi.execute-api.us-east-1.amazonaws.com/dev/api/salmo/{capitulo}/{verso}`
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

  
  <b>Endpoint:(JSON)</b> `GET https://oiup8kr3zi.execute-api.us-east-1.amazonaws.com/dev/api/salmo/{capitulo}/{verso}/json`
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
    <b>Salvar favorito</b> - <i>Salva um salmo como favorito</i>
  </summary>
  <br/>
  
  <b>Endpoint:(texto)</b> `POST - https://oiup8kr3zi.execute-api.us-east-1.amazonaws.com/dev/api/salmo`
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
    <b>Listar Favoritos</b> - <i>Lista os salmos favoritos</i>
  </summary>
  <br/>
  
  <b>Endpoint:(texto)</b> `GET - https://oiup8kr3zi.execute-api.us-east-1.amazonaws.com/dev/api/salmo/favorito/{telefone}  `
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
    <b>Apagar favorito</b> - <i>Apaga um salmo favorito</i>
  </summary>
  <br/>
  
  <b>Endpoint:(texto)</b> `DETELE - https://oiup8kr3zi.execute-api.us-east-1.amazonaws.com/dev/api/salmo`
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

OBS: Foi utilizado o número do celular somente para fins do uso de uma chave para demostração para o uso de banco de dados
