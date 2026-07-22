# Informe de migración — Cielito Lindo

## Estructura original

- Páginas: `index.html`, `login.html`, `admin.html` y `404.html`.
- Estilos: `css/styles.css` y `css/admin.css`.
- Lógica: autenticación, reservas/calendario, galería/reseñas, página pública y administración.
- Recursos: ocho imágenes JPEG originales en `img/`.
- Infraestructura: Vercel Serverless Function para servir la configuración de Firebase desde variables de entorno.

## Secciones y comportamiento detectados

Página pública: loader, navbar, hero, sobre nosotros, galería/lightbox, servicios, disponibilidad/reservas, reseñas, mapa, contacto, footer y modal de acceso.

Comportamientos: tema claro/oscuro, menú móvil, scroll suave, parallax, animaciones de aparición, autenticación por correo/Google, calendario con fechas ocupadas, cálculo de precio, reservas, contacto y reseñas.

Panel: estadísticas, reservas, bloqueos, edición de precio/descripcion, galería, carga a Firebase Storage y moderación de reseñas.

## Firebase

Se conservan Auth, Firestore y Storage. Colecciones detectadas: `users`, `bookings`, `cabins/cielito-lindo`, `reviews` y `contactMessages`.

Las claves no están en el ZIP; se preparó `.env.local.example` con las variables `NEXT_PUBLIC_FIREBASE_*` necesarias.

## Componentes creados

`Navbar`, `Hero`, `About`, `Gallery`, `Services`, `Booking`, `Contact`, `Footer` y utilidades de efectos de cliente. Se creó además la ruta `app/admin` y los módulos profesionales para Firebase.

## Plan de continuidad

1. Instalar dependencias y ejecutar la compilación.
2. Conectar cada operación del flujo de reservas con el módulo Firestore tipado.
3. Completar los controles del panel con protección por rol administrador.
4. Hacer comparación visual en escritorio, tableta y móvil contra el sitio original.
