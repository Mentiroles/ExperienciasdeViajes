
## Entidades

- user:
  - id
  - profile picture
  -name
  - email
  - password
  - created_at
  - type



- recomendaciones:
  - id
  - title
  - category
  - place
  - lean-in
  - user
  - text
  - image (opcional)
  - likes
  - created_at


## Endpoints

 POST Registrarse de forma anonima o publica(CONTROLADORES, quizas varios)
 GET login
 PATCH gestion de perfil(añadir foto)
POST  crear recomendaciones(usuarios publicos)
PUT votarlas(usiarios publicos)
PATCH editar experiencia propia (por id(usarios publicos)
 DELETE borrar experiencia propia (por id(usarios publicos)
 GET mostrarlas todas las recomendaciones
 GET buscar por categoria o lugar
 GET mostrar la experiencia en detalle
 GET ordenas las recomendaciones por likes
