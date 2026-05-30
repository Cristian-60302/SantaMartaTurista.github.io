# Caribe Colombiano Vivo

Proyecto academico de turismo sobre el Caribe colombiano. La pagina fue ajustada para funcionar como guia comunitaria, no como agencia de viajes.

## Funciones principales

- Destinos del Caribe colombiano: Santa Marta, Cartagena, La Guajira, Palomino, San Andres, Barranquilla, Mompox y Providencia.
- Fotos reales enlazadas desde Wikimedia Commons.
- Inicio de sesion conectado a `https://motosmart-api-vercel-github-io.vercel.app/api`.
- Bitacora para marcar lugares visitados.
- Resenas de usuarios guardadas en `localStorage`.
<<<<<<< HEAD
=======
- Guias turisticos disponibles con calificacion por usuario.
- Mapa interactivo de actividades con Leaflet y OpenStreetMap.
- Planes sugeridos y entidades/operadores de referencia.
>>>>>>> 48d2867 (Actualizar pagina turismo Caribe colombiano)
- Esquema SQL en `database/neon-schema.sql` para una futura conexion con Neon mediante backend/API.

## API de autenticacion

El formulario intenta primero:

- `POST /api/login` con `{ email, password }`
- `POST /api/register` con `{ name, nombre, email, password }` si el login falla porque el usuario no existe o no esta autenticado

Si la API no responde por red o CORS, el sitio usa un fallback local en `localStorage` para que la bitacora siga funcionando durante la presentacion.

## Nota sobre Neon

GitHub Pages es estatico y no debe conectarse directamente a Neon porque expondria usuario, contrasena y cadena de conexion. Para usar Neon en produccion se necesita una API intermedia que reciba login, visitas y resenas, y luego consulte la base de datos.
<<<<<<< HEAD
=======

El esquema tambien incluye tablas para `guides`, `guide_ratings`, `providers`, `activities` y `plans`, pensadas para que el mapa y las calificaciones pasen de `localStorage` a base de datos.
>>>>>>> 48d2867 (Actualizar pagina turismo Caribe colombiano)
