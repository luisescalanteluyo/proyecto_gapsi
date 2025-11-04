# Gapsi Backend (gapsi-backend)

## Resumen
API REST para manejo de proveedores para el examen práctico de e-Commerce Gapsi.
- Java 11
- Spring Boot 2.7.18
- Maven
- H2 (in-memory)

## Endpoints
- `GET /api/welcome` -> { message, version }
- `GET /api/providers?page=&size=` -> paginated list of providers
- `POST /api/providers` -> create provider (validates unique name)
- `DELETE /api/providers/{id}` -> delete provider

## Ejecutar
1. Tener Java 11 y Maven instalados.
2. Ejecutar desde la raíz del proyecto:
   ```bash
   mvn spring-boot:run
   ```
3. La API estará en `http://localhost:8080/api`

## H2 Console
- URL: http://localhost:8080/h2-console
- JDBC URL: `jdbc:h2:mem:providersdb`
- User: `sa` (no password)

## Patrones aplicados
- Repository Pattern: `com.gapsi.repository.ProviderRepository`
- Service Layer: `com.gapsi.service.ProviderService`

## Postman
La colección Postman está incluida: `GapsiBackend.postman_collection.json`

