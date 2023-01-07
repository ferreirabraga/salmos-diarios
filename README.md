# salmos-diarios

## ► Table of Contents

- [Instalação ?](#instalação)
- [API](#API)

## Instalação

### Passos

- git clone https://github.com/ferreirabraga/salmos-diarios.gi
- cd salmo-diarios
- npm install
- node --inspect /home/rafael/.nvm/versions/node/{suaVersaoDoNode}/bin/serverless offline -s dev

Exemplo:
  node --inspect /home/rafael/.nvm/versions/node/v12.14.0/bin/serverless offline -s dev

```

## API

### Salmos
<details>
  <summary>
    <b>Get Salmo Diário</b> - <i>Retorna um salmo de forma aleatória em formato texto</i>
  </summary>
  <br/>
  
  <b>Endpoint:</b> `GET https://oiup8kr3zi.execute-api.us-east-1.amazonaws.com/dev/salmo`
  <br /><br />

  ```
1) Disse o SENHOR ao meu Senhor: Assenta-te à minha mão direita, até que ponha os teus inimigos por escabelo dos teus pés.
2) O Senhor enviará o cetro da tua fortaleza desde Sião, dizendo: Domina no meio dos teus inimigos.
3) O teu povo será mui voluntário no dia do teu poder; nos ornamentos de santidade, desde a madre da alva, tu tens o orvalho da tua mocidade.
4) Jurou o Senhor, e não se arrependerá: tu és um sacerdote eterno, segundo a ordem de Melquisedeque.
5) O Senhor, à tua direita, ferirá os reis no dia da sua ira.
6) Julgará entre os gentios; tudo encherá de corpos mortos; ferirá os cabeças de muitos países.
7)Beberá do ribeiro no caminho, por isso exaltará a cabeça.
  ```
</details>

<details>
  <summary>
    <b>Get Salmo Diário</b> - <i>Retorna um salmo de forma aleatória em formato JSON</i>
  </summary>
  <br/>
  
  <b>Endpoint:</b> `GET - https://oiup8kr3zi.execute-api.us-east-1.amazonaws.com/dev/salmo/json`
  <br /><br />
  
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
  
  <b>Endpoint:</b> `GET https://oiup8kr3zi.execute-api.us-east-1.amazonaws.com/dev/api/salmo/{capitulo}`
  <br /><br />

  ```
1) Disse o SENHOR ao meu Senhor: Assenta-te à minha mão direita, até que ponha os teus inimigos por escabelo dos teus pés.
2) O Senhor enviará o cetro da tua fortaleza desde Sião, dizendo: Domina no meio dos teus inimigos.
3) O teu povo será mui voluntário no dia do teu poder; nos ornamentos de santidade, desde a madre da alva, tu tens o orvalho da tua mocidade.
4) Jurou o Senhor, e não se arrependerá: tu és um sacerdote eterno, segundo a ordem de Melquisedeque.
5) O Senhor, à tua direita, ferirá os reis no dia da sua ira.
6) Julgará entre os gentios; tudo encherá de corpos mortos; ferirá os cabeças de muitos países.
7)Beberá do ribeiro no caminho, por isso exaltará a cabeça.
  ```
</details>

<details>
  <summary>
    <b>Get Salmo Diário por capítulo</b> - <i>Retorna um salmo pelo capítulo informado em formato JSON</i>
  </summary>
  <br/>
  
  <b>Endpoint:</b> `GET https://oiup8kr3zi.execute-api.us-east-1.amazonaws.com/dev/api/salmo/{capitulo}/json`
  <br /><br />
  
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
  
  <b>Endpoint:</b> `GET https://oiup8kr3zi.execute-api.us-east-1.amazonaws.com/dev/api/salmo/{capitulo}/{verso}`
  <br /><br />

  ```
1) Disse o SENHOR ao meu Senhor: Assenta-te à minha mão direita, até que ponha os teus inimigos por escabelo dos teus pés.
2) O Senhor enviará o cetro da tua fortaleza desde Sião, dizendo: Domina no meio dos teus inimigos.
3) O teu povo será mui voluntário no dia do teu poder; nos ornamentos de santidade, desde a madre da alva, tu tens o orvalho da tua mocidade.
4) Jurou o Senhor, e não se arrependerá: tu és um sacerdote eterno, segundo a ordem de Melquisedeque.
5) O Senhor, à tua direita, ferirá os reis no dia da sua ira.
6) Julgará entre os gentios; tudo encherá de corpos mortos; ferirá os cabeças de muitos países.
7)Beberá do ribeiro no caminho, por isso exaltará a cabeça.
  ```
</details>

<details>
  <summary>
    <b>Get Salmo Diário por capítulo e verso</b> - <i>Retorna um salmo pelo capítulo informado e o verso em formato JSON</i>
  </summary>
  <br/>
  
  <b>Endpoint:</b> `GET https://oiup8kr3zi.execute-api.us-east-1.amazonaws.com/dev/api/salmo/{capitulo}/{verso}/json`
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
    <b>Get Salmo Diário por capítulo e verso</b> - <i>Retorna um salmo pelo capítulo informado e o verso em formato texto</i>
  </summary>
  <br/>
  
  <b>Endpoint:</b> `GET https://oiup8kr3zi.execute-api.us-east-1.amazonaws.com/dev/api/salmo/{capitulo}/{verso}`
  <br /><br />

  ```
1) Disse o SENHOR ao meu Senhor: Assenta-te à minha mão direita, até que ponha os teus inimigos por escabelo dos teus pés.
2) O Senhor enviará o cetro da tua fortaleza desde Sião, dizendo: Domina no meio dos teus inimigos.
3) O teu povo será mui voluntário no dia do teu poder; nos ornamentos de santidade, desde a madre da alva, tu tens o orvalho da tua mocidade.
4) Jurou o Senhor, e não se arrependerá: tu és um sacerdote eterno, segundo a ordem de Melquisedeque.
5) O Senhor, à tua direita, ferirá os reis no dia da sua ira.
6) Julgará entre os gentios; tudo encherá de corpos mortos; ferirá os cabeças de muitos países.
7)Beberá do ribeiro no caminho, por isso exaltará a cabeça.
  ```
</details>

<details>
  <summary>
    <b>POST salva como gostei </b> - <i>Retorna um salmo pelo capítulo informado e o verso em formato JSON</i>
  </summary>
  <br/>
  
  <b>Endpoint:</b> `GET https://oiup8kr3zi.execute-api.us-east-1.amazonaws.com/dev/api/salmo/{capitulo}/{verso}/json`
  <br /><br />
  
  ```
  {
    "capitulo": 110,
    "verso": 2,
    "texto": "O Senhor enviará o cetro da tua fortaleza desde Sião, dizendo: Domina no meio dos teus inimigos."
  }
  ```
</details>
