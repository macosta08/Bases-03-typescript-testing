# Configuración de Node

Este proyecto es una aplicación creada con **Node.js** utilizando **TypeScript** y configurada para asegurar una estructura robusta con pruebas automatizadas mediante **Jest**.

## Tecnologías utilizadas

- **Node.js**: Entorno de ejecución de JavaScript.
- **TypeScript**: Superset de JavaScript con tipado estático.
- **Jest**: Framework de testing para realizar pruebas unitarias y de integración.
- **Nodemon**: Herramienta para la recarga automática durante el desarrollo.
- **Supertest**: Librería para realizar pruebas de APIs HTTP.
- **Winston**: Librería de logging para la aplicación.

## Instalación

Clona el repositorio e instala las dependencias con:

```
yarn install
```

## Scripts disponibles

### Correr en modo desarrollo

```
yarn run dev
```

### Ejecutar la aplicación en producción

```
yarn run start
```

### Compilar el código TypeScript

```
yarn run build
```

### Ejecutar pruebas unitarias

```
yarn run test
```

### Ejecutar pruebas con cobertura

```
yarn run test:coverage
```

### Ejecutar pruebas en modo "watch"

```
yarn run test:watch
```

## Estructura del proyecto

```
/src
  /tests          # Pruebas unitarias e integración
  /dist           # Código compilado para producción
  /src            # Código fuente principal
  app.ts          # Archivo de entrada principal
```

## Autor

**Mariangel Acosta**

---
