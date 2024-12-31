# Proyecto Final - Tienda de Videojuegos

## Descripción

Este proyecto es una aplicación web para la gestión de una tienda de videojuegos, desarrollada como proyecto final del curso. Integra diversas tecnologías y conceptos, incluyendo Git, Docker, HTML, CSS, JavaScript, Node.js, Express, Sequelize (ORM), PostgreSQL como base de datos y React para el frontend. Se centra en proporcionar una API RESTful para la gestión de clientes y, en un futuro, se extenderá a la gestión de videojuegos, pedidos, etc.

## Funcionalidades Actuales

- **Backend (API REST):**
  - Conexión a base de datos PostgreSQL mediante Sequelize.
  - Ruta GET `/api/clientes` para obtener todos los clientes de la base de datos en formato JSON.
  - Manejo de errores robusto para las peticiones a la API.
- **Frontend:** (A completar con la información del frontend cuando esté más avanzado)
  - Estructura básica con React.

## Estructura del Proyecto

La estructura del proyecto se organiza de la siguiente manera:

```
proyectofinal/
├── backend/
│   ├── models/           # Definición de los modelos Sequelize (ej. Cliente.js)
│   ├── routes/           # Definición de las rutas de la API (ej. clientes.js)
│   ├── index.js          # Punto de entrada del backend
│   └── models/index.js    # Configuración de Sequelize y conexión a la base de datos
├── frontend/          # Código del frontend (React)
│   └── ...              # (A completar con la estructura real del frontend)
├── database/
│   ├── postgres/         # Configuración de PostgreSQL para Docker
│   ├── docker-compose.yaml # Archivo de configuración de Docker Compose
│   └── init.sql          # Script SQL para inicializar la base de datos (si aplica)
├── documentation/       # Documentación del proyecto
│   ├── cuestionario.md
│   ├── consultas.md
│   ├── modelado.md
│   └── README.md
└── assets/              # Recursos estáticos (imágenes, etc.)
└── tiendaVideojuegos.png
```

## Requisitos

1. Dependencias Globales

   - Node.js
   - Docker
   - npm

2. Dependencias del Proyecto
   Backend:

   - express
   - sequelize
   - pg
   - pg-hstore

   Frontend:

   - react
   - react-dom
   - axios

## Instalación

### Configurar el Backend

1. Navega al directorio backend/:

```
cd backend
```

2. Instala las dependencias:

```
npm install
```

3. Configura el servidor y sincroniza los modelos:

```
node index.js
```

### Configura el Frontend

1. Navega al directorio frontend/:

```
cd frontend
```

2. Instala las dependencias:

```
npm install
```

3. Inicia el servidor de desarrollo: No hace falta si lo inicias con docker-compose

```
npm start
```

### Configurar la Base de Datos

1. Inicia Docker Compose:

```
docker-compose up --build -d
```

2. Accede al contenedor PostgreSQL:

```
docker exec -it postgres_container bash
```

3. Carga la base de datos

```
psql -U postgres -d tiendavideojuegos -f /path/to/init.sql
```

## Uso

### Backend

- El servidor backend se ejecuta en http://localhost:3000/.
- Puntos de acceso API disponibles en /clientes, /videojuegos, /pedidos, etc.

### Frontend

- El servidor frontend se ejecuta en http://localhost:3000/.

### Documentación

- Cuestionario
- Contenido del archivo cuestionario.md sobre diferencias entre bases de datos relacionales y SQL, claves primarias y relaciones entre tablas.

- Consultas
  Contenido del archivo consultas.md sobre consultas SQL realizadas sobre la base de datos Northwind.

- Modelado
  Contenido del archivo modelado.md sobre el modelado de la base de datos, incluyendo diagrama ER y consultas.

### Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para proponer cambios.

### Licencia

Este proyecto está licenciado bajo la MIT License.
