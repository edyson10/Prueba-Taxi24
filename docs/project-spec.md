# 🧠 Especificación de Arquitectura - Taxi24

## 📦 Microservicios

- `api-gateway`: Punto de entrada público.
- `drivers-service`: Gestión de conductores.
- `passengers-service`: Gestión de pasajeros.
- `trips-service`: Coordinación de viajes.
- `location-service`: Manejo de ubicaciones en tiempo real.

---

## 🗃️ Entidades (PostgreSQL)

### 🚖 Driver
| Campo         | Tipo         | Descripción                       |
|---------------|--------------|------------------------------------|
| id            | UUID         | Identificador único                |
| name          | VARCHAR      | Nombre del conductor               |
| phone         | VARCHAR      | Teléfono                           |
| email         | VARCHAR      | Correo electrónico                 |
| status        | ENUM         | `available` / `on_trip` / `offline` |
| created_at    | TIMESTAMP    |                                   |

---

### 🧍 Passenger
| Campo       | Tipo         | Descripción              |
|-------------|--------------|---------------------------|
| id          | UUID         | Identificador único       |
| name        | VARCHAR      | Nombre completo           |
| phone       | VARCHAR      | Teléfono del pasajero     |
| email       | VARCHAR      | Correo electrónico        |
| created_at  | TIMESTAMP    |                           |

---

### 📍 Location
| Campo       | Tipo         | Descripción                   |
|-------------|--------------|--------------------------------|
| id          | UUID         | Identificador                  |
| driver_id   | UUID         | FK al conductor                |
| latitude    | DECIMAL      | Latitud                        |
| longitude   | DECIMAL      | Longitud                       |
| timestamp   | TIMESTAMP    | Momento de la ubicación        |

---

### 🧾 Trip
| Campo         | Tipo       | Descripción                          |
|---------------|------------|--------------------------------------|
| id            | UUID       | Identificador del viaje              |
| passenger_id  | UUID       | FK al pasajero                       |
| driver_id     | UUID       | FK al conductor                      |
| origin        | TEXT       | Dirección de partida                 |
| destination   | TEXT       | Dirección de destino                 |
| status        | ENUM       | `requested`, `assigned`, `started`, `completed`, `cancelled` |
| start_time    | TIMESTAMP  |                                     |
| end_time      | TIMESTAMP  |                                     |
| price         | DECIMAL    | Monto total calculado (si aplica)    |

---

## 🔁 Flujo de negocio del viaje

1. El pasajero solicita un viaje con origen/destino.
2. Se consulta el `drivers-service` para obtener conductores `available`.
3. Se asigna un conductor al viaje (automático o por lógica futura).
4. El `trip` cambia de estado a `assigned`.
5. Cuando inicia, cambia a `started`.
6. Cuando finaliza, cambia a `completed`, y se calcula el precio.

---

## 🔗 Comunicación entre microservicios

- **Axios** en HTTP (simple, suficiente).
- **Dejar abierta la opción de mensajería o gRPC** en el futuro si hay carga o eventos.

---

## 📌 Endpoints Propuestos (resumen)

### `drivers-service`
| Método | Endpoint            | Descripción                     |
|--------|---------------------|----------------------------------|
| GET    | `/drivers/:id`      | Obtener conductor por ID        |
| GET    | `/drivers?status=`  | Listar conductores disponibles  |
| POST   | `/drivers`          | Crear nuevo conductor           |
| PUT    | `/drivers/:id/status` | Cambiar estado del conductor  |

---

### `passengers-service`
| Método | Endpoint            | Descripción                   |
|--------|---------------------|-------------------------------|
| GET    | `/passengers/:id`   | Obtener pasajero              |
| POST   | `/passengers`       | Crear pasajero                |

---

### `trips-service`
| Método | Endpoint              | Descripción                   |
|--------|-----------------------|-------------------------------|
| POST   | `/trips`              | Crear viaje                   |
| PUT    | `/trips/:id/assign`   | Asignar conductor             |
| PUT    | `/trips/:id/start`    | Iniciar viaje                 |
| PUT    | `/trips/:id/complete` | Finalizar viaje               |
| GET    | `/trips/:id`          | Obtener detalles de un viaje  |

---

### `location-service`
| Método | Endpoint              | Descripción                    |
|--------|-----------------------|---------------------------------|
| POST   | `/location`           | Actualizar ubicación del driver|
| GET    | `/location/:driverId` | Consultar última ubicación     |

---

## ✅ Próximos pasos

1. Validar este modelo de dominio.
2. Iniciar con la implementación de `trips-service`, ya que orquesta los demás.
3. Crear rutas mínimas en `drivers-service` y `passengers-service` para apoyar pruebas de viajes.

