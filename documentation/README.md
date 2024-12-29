# Proyecto Final

## Descripción

Este proyecto es una aplicación integral que abarca varios módulos aprendidos en el curso, incluidos Git, Docker, HTML, CSS, JavaScript, Node.js, bases de datos (PostgreSQL), Express, y React. El proyecto se centra en la gestión de una tienda de videojuegos, incluyendo funcionalidades de backend, frontend y base de datos.

## Estructura del Proyecto

```plaintext
proyectofinal/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── config.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── database/
│   ├── pgadmin/
│   ├── postgres/
│   ├── northwind.sql
│   ├── docker-compose.yaml
│   └── init.sql
├── documentation/
│   ├── cuestionario.md
│   ├── consultas.md
│   ├── modelado.md
│   └── README.md
└── assets/
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

3. Inicia el servidor de desarrollo:

```
npm start
```

### Configurar la Base de Datos

1. Inicia Docker Compose:

```
docker-compose up -d
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
