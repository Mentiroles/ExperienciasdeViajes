### Experiencias de viajes

## Entidades

users:

- id
- photo
- nickName
- email
- password
- created_at

locations:

- id
- country

recomendaciones:

- id
- title
- category
- locationId
- lean_in
- userId
- description
- created_at

recommendationPhotos:

- id
- recommendationId
- URL

comentarios:

- id
- message
- recommendationId
- userId

recommendationsLikes:

- id
- recommendationId
- userId

## Endpoints

- POST Registrarse ✔️
- POST Loggearse ✔️
- POST gestion de perfil(añadir foto) ✔️
- PATCH editar perfil ✔️
- POST crear recomendaciones(usuarios publicos) ✔️
- PUT Likes y dislikes (usuarios publicos) ✔️
- PATCH editar experiencia propia por id(usarios publicos) ✔️
- DELETE borrar experiencia propia por id(usarios publicos) ✔️
- GET mostrarlas todas las recomendaciones ✔️
- GET buscar por categoria o lugar ✔️
- GET mostrar la experiencia en detalle ✔️
- GET ordenas las recomendaciones por likes ✔️

## Correcciones

- Requisitos que no se cumplen:

El login no valida la contraseña (!!!!) (requisito de la propia gestión de usuarios.) ✔️

- Errores que dan problemas:

Todas las rutas de app.js mal ("../ExperienciasdeViajespara chopear/src/(...)"?? ¿¿Qué ha pasado??), el servidor no arranca. ✔️

De nuevo, problemas con las rutas en recommendations.js y reco-validations.js ("../../../../ExperienciasdeViajes/src/(...)" ). NUNCA se debe salir de la raíz del proyecto. ✔️

- Problemas de seguridad/ux:

Los errores no tienen mensaje (no dan información del problema). ✔️

Error sin gestionar al intentar loguearse con un user que no existe (sigue intentando el login y sale error de js por no poder leer el id). ✔️

Los campos para las fotos permiten subir cualquier tipo de archivo. ✔️

Se puede cambiar la contraseña (con token) sin poner la anterior. ✔️

No se pueden borrar comentarios.

"isLikedByCurrentUser" siempre da false, ya que al no pasar por auth no hay usuario en la request.

- Otros problemillas/posibles mejoras:

Estaría bien que el readme incluyese una descripción del proyecto e instrucciones para arrancarlo.

Cuando un usuario "cambia" su foto (sube otra), no se elimina la anterior, generando basura.

Para evitar problemas, el endpoint de crear recomendación debería recibir directamente el id del lugar, no el nombre. Lo mismo la query de la búsqueda.

Lo suyo sería un endpoint específico para buscar por id.

Si se intenta dar like dos veces al mismo post sale error "sin gestionar" (lo atrapa el middleware pero es error de js).

Al intentar borrar un like sale siempre "Recommendation deleted successfully", incluso si no tenía like.
