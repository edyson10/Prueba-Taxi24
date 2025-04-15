# 🚕 Taxi24 - Plataforma de Gestión de Flotas (Microservicios)

Taxi24 es una solución de backend basada en microservicios desarrollada con NestJS, PostgreSQL y Docker. Ofrece una arquitectura escalable y modular para gestionar flotas de transporte, permitiendo asignación de viajes, seguimiento de ubicaciones, y más.

## ⚙️ Requisitos Previos

- Docker y Docker Compose instalados
- Node.js (opcional para desarrollo individual de microservicios)
- Acceso a un entorno Linux/macOS o WSL en Windows

## 🛠 Tecnologías utilizadas

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Docker](https://www.docker.com/)
- [Swagger (OpenAPI)](https://swagger.io/)


## 🚀 Instrucciones de Ejecución

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/edyson10/Prueba-Taxi24
   cd taxi24
   ```

2. **Crear el archivo `.env`**

   Copie el archivo de plantilla y configure los valores:

   ```bash
   cp .env.example .env
   ```

   Luego edítelo si es necesario:

   ```bash
   nano .env
   ```

3. **Levantar los servicios**

   ```bash
   docker-compose up --build
   ```

4. **Verificar los servicios**

   | Servicio           | Puerto | URL                                      |
   |--------------------|--------|------------------------------------------|
   | Drivers Service    | 3001   | http://localhost:3001/docs               |
   | Passengers Service | 3002   | http://localhost:3002/docs               |
   | Trips Service      | 3003   | http://localhost:3003/docs               |
   | Location Service   | 3004   | http://localhost:3004/docs               |


## 🚀 Endpoints disponibles

Todos los endpoints están documentados y disponibles para pruebas directamente en Swagger:

📄 **Documentación interactiva (Swagger UI):**  
> http://localhost:3000/docs

> Asegúrate de que el contenedor del microservicio `drivers-service` esté corriendo para acceder a esta documentación.

---

## ✨ Endpoints principales

| Método | Ruta                         | Descripción                                   |
|--------|------------------------------|-----------------------------------------------|
| GET    | `/drivers`                  | Listar todos los conductores                  |
| GET    | `/drivers/available`        | Listar conductores disponibles                |
| GET    | `/drivers/available-nearby` | Listar conductores disponibles a 3 km         |
| GET    | `/drivers/:id`             | Obtener un conductor por ID                   |
| POST   | `/drivers`                 | Registrar un nuevo conductor                  |

---


## 📦 Ejemplo de payload para POST '/drivers'

```json
{
  "name": "Juan Pérez",
  "phone": "3001234567",
  "email": "juan.perez@example.com"
}
```


## 🛠️ Estructura de Microservicios

Cada microservicio sigue los principios de Clean Architecture con capas bien definidas:

- `application/`
- `config/`
- `domain/`
- `infrastructure/`
- `shared/`
- `main.ts`


## 🗄️ Base de Datos

Se utiliza una única instancia de PostgreSQL con múltiples bases de datos:

- `drivers_db`
- `passengers_db`
- `trips_db`
- `location_db`

Los scripts de inicialización se encuentran en: `sql/init/`.


## 🔒 Seguridad

- Las variables sensibles están definidas en un archivo `.env` que **no se incluye** en el repositorio.
- Utilice siempre `.env.example` como referencia para nuevos entornos.


## 🔄 Despliegue

Este proyecto está preparado para despliegue automatizado en entornos Linux como Droplets de DigitalOcean. El archivo `docker-compose.yml` está diseñado para ejecutarse de forma autónoma con un solo comando.

Para entornos productivos se recomienda:

- Configurar Caddy o NGINX como proxy inverso
- Añadir certificados SSL
- Agregar autenticación y autorización (en futuras versiones)


## 📝 Notas

- Asegúrate de que la base de datos PostgreSQL esté corriendo y accesible desde el contenedor.
- Las variables de entorno deben estar configuradas en el archivo `.env`.

---
