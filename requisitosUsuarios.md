# API Users

## Registrar a un nuevo usuario

URL: /users/register
MÉTODO: POST
BODY: nombre, contraseña y role (este último no obligatorio, por defecto es user)

Respuesta:

- Responde con los datos del usuario registrado y la contraseña encriptada

```json
{
  "username": "Ester Ferrera",
  "password": "$2a$10$BPy4FcrhhzuWMXnYtkLhtuYreNPb0HGUg57/.ff67iyQ3yJxvkUSu",
  "role": "admin",
  "_id": "675f42db93277630b7083c6c",
  "createdAt": "2024-12-15T20:58:03.613Z",
  "updatedAt": "2024-12-15T20:58:03.613Z",
  "__v": 0
}
```

## Hacer el login del usuario

URL: /users/login
MÉTODO: POST
BODY: nombre y contraseña

Respuesta:

- Respondo con un mensaje de que todo ha ido bien y su token

```js
{
  "message": "usuario y contraseña correctos",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjc1ZjQyZGI5MzI3NzYzMGI3MDgzYzZjIiwidXNlcm5hbWUiOiJFc3RlciBGZXJyZXJhIiwiaWF0IjoxNzM0Mjk2Mzg3LCJleHAiOjE3MzQyOTk5ODd9.cO54S0UJP_zvaAkqeoaU4uyq7w0jFWSicLhmUUw7ojc"
}
```
## Ver los datos del perfil de un usuario

URL: /users/profile
MÉTODO: GET

Respuesta:

- Responde los datos del usuario

```js
{
  "_id": "675f42db93277630b7083c6c",
  "username": "Ester Ferrera",
  "password": "$2a$10$BPy4FcrhhzuWMXnYtkLhtuYreNPb0HGUg57/.ff67iyQ3yJxvkUSu",
  "role": "admin",
  "createdAt": "2024-12-15T20:58:03.613Z",
  "updatedAt": "2024-12-15T20:58:03.613Z",
  "__v": 0
}
```
