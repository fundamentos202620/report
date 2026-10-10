# Evidencias de Colaboración — Sprint 1 (GitHub)

Capturas de pantalla que respaldan la sección **5.3.1.7 Team Collaboration Insights during Sprint**.

## Convenciones

- **Formato:** PNG, nombre en minúsculas con guiones, sin espacios.
- **Captura:** panel completo de GitHub con el nombre del repositorio visible en la barra superior, de modo que se identifique a qué producto corresponde la evidencia.
- **Visibilidad:** abrir los repositorios en sesión privada o en ventana de incógnito para no capturar el correo ni los datos de sesión del equipo.
- **Rango de fechas:** filtrar por el rango del Sprint 1 (10/10/2026) en las vistas de Insights y de commits.
- **Datos sensibles:** los repositorios no contienen credenciales, pero verificar que la captura no incluya tokens de sesión ni el menú de configuración de la cuenta.

## Capturas requeridas

| #    | Archivo                          | Evidencia                                                                                                                  | Apartado |
| ---- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------- |
| 01   | `01-insights-backend.png`        | Pestaña **Insights** de `gigmap-backend`: resumen de actividad, gráfico de red de ramas, languages y contribuidores.          | C        |
| 02   | `02-insights-mobile.png`         | Pestaña **Insights** de `gigmap-mobile` con la misma estructura de ramas y commits.                                        | C        |
| 03   | `03-branches-backend.png`        | Listado de ramas de `gigmap-backend` (vista *Branches*), mostrando los prefijos `feature/*` y `test/*`.                     | B        |
| 04   | `04-contributors-all-repos.png`  | **Insights → Contributors** de los repositorios del proyecto, con el total de contribuciones por cuenta.                      | E        |
| 05   | `05-commit-traceability.png`     | Detalle de un commit con el mensaje y el **cuerpo** que enumera los Work-Items `T-xx` (por ejemplo `407867e`).                | D        |
| 06   | `06-network-branches.png`        | Vista **Insights → Network** de `gigmap-mobile`, con una rama por módulo y su merge commit a `main`.                      | F        |

## Capturas complementarias sugeridas

| #    | Archivo                          | Evidencia                                                                                                                  |
| ---- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 07   | `07-commits-main-backend.png`    | Historial de commits de `main` en `gigmap-backend`, con los merge commits y su fecha.                                       |
| 08   | `08-activity-acceptance.png`     | Actividad de commits de `gigmap-acceptance-tests` durante el Sprint.                                                        |
| 09   | `09-contributors-report.png`     | **Insights → Contributors** de `fundamentos202620/report`, donde aparecen las tres cuentas del equipo.                     |

## Verificación de los datos publicados

Las cifras citadas en el apartado C y en la tabla del apartado E se obtuvieron de la API pública de GitHub y pueden reverificarse en cualquier momento:

```
GET https://api.github.com/repos/fundamentos202620/gigmap-backend/commits
GET https://api.github.com/repos/fundamentos202620/gigmap-backend/contributors
GET https://api.github.com/repos/fundamentos202620/gigmap-mobile/contributors
GET https://api.github.com/repos/fundamentos202620/gigmap-acceptance-tests/contributors
```