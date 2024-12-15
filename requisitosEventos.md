# API Eventos

## Recuperación de todos los eventos

URL: /events/getAll
MÉTODO: GET

Respuesta:

- Un array con todos los eventos de la tabla
```js
[
  {
    "_id": "6755ff6707e481a8c498e335",
    "nombre": "clasico",
    "descripcion": "partido de baloncesto",
    "fecha": "2024-12-25T00:00:00.000Z",
    "ubicacion": "Madrid",
    "tipoDeporte": "baloncesto",
    "createdAt": "2024-12-08T20:19:51.834Z",
    "updatedAt": "2024-12-08T20:19:51.834Z",
    "__v": 0
  },
  {
    "_id": "6755ff887aa7c6435229431f",
    "nombre": "clasico",
    "descripcion": "partido de baloncesto",
    "fecha": "2024-12-25T00:00:00.000Z",
    "ubicacion": "Madrid",
    "tipoDeporte": "baloncesto",
    "createdAt": "2024-12-08T20:20:24.183Z",
    "updatedAt": "2024-12-08T20:20:24.183Z",
    "__v": 0
  },
  {
    "_id": "6756013047edfe636aafe755",
    "nombre": "clasico",
    "descripcion": "partido de baloncesto",
    "fecha": "2024-12-22T00:00:00.000Z",
    "ubicacion": "Madrid",
    "tipoDeporte": "baloncesto",
    "createdAt": "2024-12-08T20:27:28.781Z",
    "updatedAt": "2024-12-08T20:27:28.781Z",
    "__v": 0
  },
  {
    "_id": "675ef36b09efbfc41aa042cc",
    "nombre": "campeonato de inglaterra",
    "descripcion": "carrera de F1",
    "fecha": "2024-12-25T00:00:00.000Z",
    "ubicacion": "londres",
    "tipoDeporte": "F1",
    "organizador": "6755deb9b8f058daceb879a5",
    "createdAt": "2024-12-15T15:19:07.076Z",
    "updatedAt": "2024-12-15T15:19:07.076Z",
    "__v": 0
  },
  {
    "_id": "675f029d7334107fcea2c1ce",
    "nombre": "campeonato de francia",
    "descripcion": "carrera de F1",
    "fecha": "2024-12-26T00:00:00.000Z",
    "ubicacion": "paris",
    "tipoDeporte": "F1",
    "organizador": "675ed91e7419768b5c2f54cd",
    "createdAt": "2024-12-15T16:23:57.739Z",
    "updatedAt": "2024-12-15T16:23:57.739Z",
    "__v": 0
  }
]
```

## Recuperación de todos los eventos que van a tener lugar ordenados por fecha

URL: /events/upcoming
MÉTODO: GET

Respuesta:

- Un array con todos los eventos que van a tener lugar ordenados por fecha

```js
[
  {
    "_id": "6756013047edfe636aafe755",
    "nombre": "clasico",
    "descripcion": "partido de baloncesto",
    "fecha": "2024-12-22T00:00:00.000Z",
    "ubicacion": "Madrid",
    "tipoDeporte": "baloncesto",
    "createdAt": "2024-12-08T20:27:28.781Z",
    "updatedAt": "2024-12-08T20:27:28.781Z",
    "__v": 0
  },
  {
    "_id": "6755ff6707e481a8c498e335",
    "nombre": "clasico",
    "descripcion": "partido de baloncesto",
    "fecha": "2024-12-25T00:00:00.000Z",
    "ubicacion": "Madrid",
    "tipoDeporte": "baloncesto",
    "createdAt": "2024-12-08T20:19:51.834Z",
    "updatedAt": "2024-12-08T20:19:51.834Z",
    "__v": 0
  },
  {
    "_id": "6755ff887aa7c6435229431f",
    "nombre": "clasico",
    "descripcion": "partido de baloncesto",
    "fecha": "2024-12-25T00:00:00.000Z",
    "ubicacion": "Madrid",
    "tipoDeporte": "baloncesto",
    "createdAt": "2024-12-08T20:20:24.183Z",
    "updatedAt": "2024-12-08T20:20:24.183Z",
    "__v": 0
  },
  {
    "_id": "675ef36b09efbfc41aa042cc",
    "nombre": "campeonato de inglaterra",
    "descripcion": "carrera de F1",
    "fecha": "2024-12-25T00:00:00.000Z",
    "ubicacion": "londres",
    "tipoDeporte": "F1",
    "organizador": "6755deb9b8f058daceb879a5",
    "createdAt": "2024-12-15T15:19:07.076Z",
    "updatedAt": "2024-12-15T15:19:07.076Z",
    "__v": 0
  },
  {
    "_id": "675f029d7334107fcea2c1ce",
    "nombre": "campeonato de francia",
    "descripcion": "carrera de F1",
    "fecha": "2024-12-26T00:00:00.000Z",
    "ubicacion": "paris",
    "tipoDeporte": "F1",
    "organizador": "675ed91e7419768b5c2f54cd",
    "createdAt": "2024-12-15T16:23:57.739Z",
    "updatedAt": "2024-12-15T16:23:57.739Z",
    "__v": 0
  }
]
```

## Recuperación de todos los eventos filtrado por el tipo de deporte elegido

URL: /events
MÉTODO: GET


Respuesta:

- Un array con todos los eventos filtrado por el tipo de deporte elegido 

```js
[
  {
    "_id": "675ef36b09efbfc41aa042cc",
    "nombre": "campeonato de inglaterra",
    "descripcion": "carrera de F1",
    "fecha": "2024-12-25T00:00:00.000Z",
    "ubicacion": "londres",
    "tipoDeporte": "F1",
    "organizador": "6755deb9b8f058daceb879a5",
    "createdAt": "2024-12-15T15:19:07.076Z",
    "updatedAt": "2024-12-15T15:19:07.076Z",
    "__v": 0
  },
  {
    "_id": "675f029d7334107fcea2c1ce",
    "nombre": "campeonato de francia",
    "descripcion": "carrera de F1",
    "fecha": "2024-12-26T00:00:00.000Z",
    "ubicacion": "paris",
    "tipoDeporte": "F1",
    "organizador": "675ed91e7419768b5c2f54cd",
    "createdAt": "2024-12-15T16:23:57.739Z",
    "updatedAt": "2024-12-15T16:23:57.739Z",
    "__v": 0
  }
]

```

## Recuperación de los eventos por su ID

URL: /events/:eventId
MÉTODO: GET


Respuesta:

-El evento buscado

```js
{
  "_id": "675ef36b09efbfc41aa042cc",
  "nombre": "campeonato de inglaterra",
  "descripcion": "carrera de F1",
  "fecha": "2024-12-25T00:00:00.000Z",
  "ubicacion": "londres",
  "tipoDeporte": "F1",
  "organizador": "6755deb9b8f058daceb879a5",
  "createdAt": "2024-12-15T15:19:07.076Z",
  "updatedAt": "2024-12-15T15:19:07.076Z",
  "__v": 0
}
```
## Creación de Eventos

URL: /events/CreateEvent
MÉTODO: POST
BODY: nombre, descripción, fecha, ubicación, tipoDeporte


Respuesta:

- el evento creado con todos sus datos

```js
{
  "_id": "675ef36b09efbfc41aa042cc",
  "nombre": "campeonato de inglaterra",
  "descripcion": "carrera de F1",
  "fecha": "2024-12-25T00:00:00.000Z",
  "ubicacion": "londres",
  "tipoDeporte": "F1",
  "organizador": "6755deb9b8f058daceb879a5",
  "createdAt": "2024-12-15T15:19:07.076Z",
  "updatedAt": "2024-12-15T15:19:07.076Z",
  "__v": 0
}

```
## Actualización de Eventos

URL: /events/:eventId
MÉTODO: PUT
BODY: nombre, descripción, fecha, ubicación, tipoDeporte con los cambios que se quieran aplicar


Respuesta:

- el evento creado con los nuevos datos

```js
{
  "_id": "675f029d7334107fcea2c1ce",
  "nombre": "campeonato de francia",
  "descripcion": "carrera de F1",
  "fecha": "2024-12-26T00:00:00.000Z",
  "ubicacion": "paris",
  "tipoDeporte": "F1",
  "organizador": "675ed91e7419768b5c2f54cd",
  "createdAt": "2024-12-15T16:23:57.739Z",
  "updatedAt": "2024-12-15T16:23:57.739Z",
  "__v": 0
}

```
## Actualización de Eventos

URL: /events/:eventId
MÉTODO: DELETE

Respuesta:

- el evento eliminado 

```js
{
  "_id": "6755ff6707e481a8c498e335",
  "nombre": "clasico",
  "descripcion": "partido de baloncesto",
  "fecha": "2024-12-25T00:00:00.000Z",
  "ubicacion": "Madrid",
  "tipoDeporte": "baloncesto",
  "createdAt": "2024-12-08T20:19:51.834Z",
  "updatedAt": "2024-12-08T20:19:51.834Z",
  "__v": 0
}
```