# Evidencias de Despliegue — Sprint 1 (Render)

Capturas de pantalla que respaldan la sección **5.3.1.6 Software Deployment Evidence for Sprint Review**.

## Convenciones

- **Formato:** PNG, nombre en minúsculas con guiones, sin espacios.
- **Captura:** panel completo de Render (o del proveedor) donde se aprecie el nombre del recurso, su estado y la fecha. Si la ventana es muy alta, capturar por partes (configuración arriba, resultado abajo).
- **Datos sensibles:** ocultar siempre el valor de `SPRING_DATASOURCE_PASSWORD`, `JWT_SECRET` y del connection string completo (usar `••••••`). No mostrar la API Key de Supabase ni el refresh token de la sesión.
- **Consistencia:** el servicio debe aparecer siempre con el mismo nombre (`gigmap-api`) y la misma URL pública (`https://gigmap-api.onrender.com`).

## Capturas requeridas

| #    | Archivo                        | Evidencia                                                                                            | Work-Item |
| ---- | ------------------------------ | ---------------------------------------------------------------------------------------------------- | --------- |
| 01   | `01-render-account.png`        | Cuenta de Render creada y dashboard del workspace del equipo.                                         | T-50      |
| 02   | `02-github-access.png`         | Render con acceso de lectura al repositorio `fundamentos202620/gigmap-backend`.                      | T-50      |
| 03   | `03-supabase-database.png`     | Proyecto PostgreSQL en Supabase y connection string (valores enmascarados).                          | T-49      |
| 04   | `04-env-variables.png`         | Variables de entorno configuradas en el Web Service de Render (valores enmascarados).                | T-49      |
| 05   | `05-dockerfile.png`            | `Dockerfile` multi-stage del backend en el repositorio de GitHub.                                    | T-50      |
| 06   | `06-new-web-service.png`       | Flujo `New → Web Service` conectando el repositorio del backend.                                     | T-50      |
| 07   | `07-service-settings.png`      | Settings del servicio: runtime Docker, región, instancia, rama `main` y health check path.           | T-50      |
| 08   | `08-build-logs.png`            | Logs del build: descarga de dependencias Maven, empaquetado del JAR y arranque del contenedor.       | T-50      |
| 09   | `09-service-live.png`          | Estado `Live` del Web Service con la URL pública y el horario del último despliegue.                 | T-50      |
| 10   | `10-openapi-docs.png`          | Documentación interactiva en `https://gigmap-api.onrender.com/swagger-ui/index.html`.                | T-48      |
| 11   | `11-api-healthy.png`           | Endpoint desplegado respondiendo (terminal, navegador o Postman) contra el dominio público.          | T-48      |
| 12   | `12-auto-deploy-logs.png`      | Logs de un despliegue automático originado por un push a `main`.                                     | T-50      |
| 13   | `13-mobile-baseurl.png`        | `RetrofitClient.kt` del cliente Android apuntando a la URL pública del Web Service.                  | T-50      |
| 14   | `14-mobile-running.png`        | Aplicación móvil en ejecución consumiendo datos del backend desplegado.                             | T-50      |

## Video

El enlace al video de despliegue, si se graba, se documenta en la sección 5.3.1.6 del reporte principal.