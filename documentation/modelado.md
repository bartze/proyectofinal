# Paso 1: Plantear el Caso de Uso

## Caso de Uso: Gestión de una Tienda de Videojuegos

### Requisitos:

**Gestión de Productos:** La tienda vende una variedad de videojuegos. Cada videojuego tiene un título, plataforma y precio.

**Gestión de Clientes:** La tienda tiene una base de datos de clientes que incluye información como nombre, dirección, email y número de teléfono.

**Gestión de Pedidos:** Los clientes pueden realizar pedidos de varios videojuegos. Cada pedido tiene un identificador único, fecha del pedido y estado del pedido (pendiente, enviado, entregado).

**Gestión de Proveedores:** La tienda tiene proveedores que suministran los videojuegos. Cada proveedor tiene un identificador único, NIF y nombre.

### Entidades:

#### Videojuegos:

- id (Primary Key)
- titulo
- plataforma
- precio
- proveedor_id (Foreign Key, referencia a Proveedor)

#### Clientes:

- id (Primary Key)
- nombre
- direccion
- email
- telefono

#### Pedidos:

- id (Primary Key)
- cliente_id (Foreign Key, referencia a Clientes)
- fecha
- estado

#### PedidosVideojuego (para la relación N:M entre Pedidos y Videojuegos):

- pedido_id (Foreign Key, referencia a Pedidos)
- videojuego_id (Foreign Key, referencia a Videojuegos)
- cantidad

#### Proveedores:

- id (Primary Key)
- nif
- nombre

# Paso 2: Crear el Modelo Entidad-Relación con la herramienta GitMind

## Diagrama Entidad-Relación (ERD)

- **realiza** entre Clientes y Pedidos: (1:N) Un cliente puede realizar muchos pedidos, un pedido solo puede ser realizado por un cliente.

- **incluye** entre Pedidos y Videojuegos: (N:M) Un pedido puede incluir muchos videojuegos y un videojuego puede estar en muchos pedidos. La tabla intermedia PedidoVideojuego gestiona esta relación N:M.

- **suministra** entre Proveedores y Videojuegos: (1:N) Un proveedor puede suministrar muchos videojuegos, un videojuego solo puede ser suministrado por un proveedor.

Como me he basado en un modelo de dropshipping para tiendas online sin stock y servir directamente del proveedor, no he usado la columna stock.

# Paso 3:

- Crear la Base de Datos y las Tablas

```
docker-compose up -d
docker exec -it postgres_container bash
psql -U postgres
\c tiendavideojuegos
```

```
CREATE DATABASE tiendavideojuegos;
```

- Definir las tablas y sus relaciones en SQL.

```sql
CREATE TABLE clientes (
id SERIAL PRIMARY KEY,
nombre VARCHAR(100),
direccion VARCHAR(255),
email VARCHAR(100),
telefono VARCHAR(20)
);

CREATE TABLE proveedores (
id SERIAL PRIMARY KEY,
nif VARCHAR(50),
nombre VARCHAR(100)
);

CREATE TABLE videojuegos (
id SERIAL PRIMARY KEY,
titulo VARCHAR(100),
plataforma VARCHAR(50),
precio DECIMAL(10, 2),
proveedor_id INT REFERENCES Proveedores(id)
);

CREATE TABLE pedidos (
id SERIAL PRIMARY KEY,
cliente_id INT REFERENCES Clientes(id),
fecha DATE,
estado VARCHAR(50)
);

CREATE TABLE pedidosvideojuego (
pedido_id INT REFERENCES Pedidos(id),
videojuego_id INT REFERENCES Videojuegos(id),
cantidad INT,
PRIMARY KEY (pedido_id, videojuego_id)
);
```

# Paso 4: Poblar la Base de Datos con Registros

- Insertar clientes

```
INSERT INTO clientes (nombre, direccion, email, telefono)
VALUES
('Juan Pérez', 'Calle Falsa 123', 'juan.perez@example.com', '123456789'),
('María Gómez', 'Avenida Siempre Viva 742', 'maria.gomez@example.com', '987654321');
```

- Insertar proveedores

```
  INSERT INTO proveedores (nif, nombre)
  VALUES
  ('12345678A', 'Nintendo'),
  ('87654321B', 'Sony'),
  ('12348765C', 'Microsoft');
```

- Insertar videojuegos

```
  INSERT INTO videojuegos (titulo, plataforma, precio, proveedor_id)
  VALUES
  ('The Legend of Zelda', 'Nintendo Switch', 59.99, 1),
  ('God of War', 'PlayStation 4', 49.99, 2),
  ('Halo Infinite', 'Xbox Series X', 69.99, 3);
```

- Insertar pedidos

```
  INSERT INTO pedidos (cliente_id, fecha, estado)
  VALUES
  (1, '2024-12-01', 'Pendiente'),
  (2, '2024-12-02', 'Enviado');
```

- Insertar detalles de pedidos

```
  INSERT INTO pedidosvideojuego (pedido_id, videojuego_id, cantidad)
  VALUES
  (1, 1, 1),
  (1, 2, 1),
  (2, 3, 2);
```

# Paso 5: Realizar Consultas para Validar el Modelo

- Buscar todos los pedidos de un cliente:

```
SELECT p.id, p.fecha, p.estado, c.nombre
FROM pedidos p
JOIN clientes c ON p.cliente_id = c.id
WHERE c.nombre = 'Juan Pérez';
```

id | fecha | estado | nombre  
----+------------+-----------+------------
1 | 2024-12-01 | Pendiente | Juan Pérez
(1 row)

2. Listar todos los videojuegos pedidos en un pedido específico:

```

SELECT v.titulo, v.plataforma, pv.cantidad
FROM pedidosvideojuego pv
JOIN videojuegos v ON pv.videojuego_id = v.id
WHERE pv.pedido_id = 1;

```

       titulo        |   plataforma    | cantidad

---------------------+-----------------+----------
The Legend of Zelda | Nintendo Switch | 1
God of War | PlayStation 4 | 1
(2 rows)

3. Buscar clientes que han realizado pedidos en una fecha específica:

```

SELECT c.nombre, c.email
FROM clientes c
JOIN pedidos p ON c.id = p.cliente_id
WHERE p.fecha = '2024-12-01';

```

nombre | email
------------+------------------------
Juan Pérez | juan.perez@example.com
(1 row)

4. Listar los videojuegos y la cantidad total pedida de cada uno:

```

SELECT v.titulo, SUM(pv.cantidad) AS total_pedido
FROM videojuegos v
JOIN pedidosvideojuego pv ON v.id = pv.videojuego_id
GROUP BY v.titulo;

```

       titulo        | total_pedido

---------------------+--------------
Halo Infinite | 2
The Legend of Zelda | 1
God of War | 1
(3 rows)

5. Listar todos los pedidos y sus detalles:

```

SELECT p.id, c.nombre, v.titulo, pv.cantidad, p.fecha, p.estado
FROM pedidos p
JOIN clientes c ON p.cliente_id = c.id
JOIN pedidosvideojuego pv ON p.id = pv.pedido_id
JOIN videojuegos v ON pv.videojuego_id = v.id;

```

id | nombre | titulo | cantidad | fecha | estado  
----+-------------+---------------------+----------+------------+-----------
1 | Juan Pérez | The Legend of Zelda | 1 | 2024-12-01 | Pendiente
1 | Juan Pérez | God of War | 1 | 2024-12-01 | Pendiente
2 | María Gómez | Halo Infinite | 2 | 2024-12-02 | Enviado
(3 rows)

```





```
