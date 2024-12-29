# Cuestionario del Proyecto Final de Databases

## 1. Explicar la diferencia entre Base de datos Relacional y SQL

Una base de datos relacional es un tipo de base de datos que organiza los datos en tablas que están relacionadas entre sí a través de claves (primary key y foreign key). Las bases de datos relacionales siguen un modelo estructurado y utilizan relaciones para conectar datos entre diferentes tablas, como por ejemplo PostgreSQL.

SQL, es el lenguaje de programación utilizado para gestionar y manipular bases de datos relacionales. SQL (Structured Query Language) permite realizar consultas, insertar, actualizar y eliminar datos, así como definir y modificar la estructura de las tablas.

## 2. ¿Por qué es necesario para la tablas definir una primary key?

Es fundamental porque asegura que cada fila (registro) se pueda identificar de manera única. La primary key actúa como un identificador único para cada registro en la tabla, lo que facilita la búsqueda, actualización y eliminación de datos específicos. Además, una primary key ayuda a establecer relaciones entre diferentes tablas, garantizando la integridad referencial y permitiendo la creación de claves foráneas (foreign keys) que conectan tablas relacionadas.

## 3. ¿Cómo se denomina la relación que se hace entre una columna de un tabla y la primary key de otra tabla?

Foreign key, una foreign key es una columna o conjunto de columnas en una tabla que se refiere a la primary key de otra tabla. Esta relación permite mantener la integridad referencial entre las tablas, asegurando que los datos en una tabla estén relacionados correctamente con los datos en otra tabla.

## 4. ¿Qué es lo que necesitamos hacer para poder tener una relación n:m entre dos tablas?

Para establecer una relación n:m (muchos a muchos) entre dos tablas, necesitamos crear una tabla intermedia llamada tabla de unión (junction table) o tabla de asociación. Esta tabla de unión contiene claves foráneas que apuntan a las primary keys de las dos tablas que queremos relacionar.
