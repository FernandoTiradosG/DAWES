# PROYECTO API NOTAS

## Descripción del proyecto

El proyecto consiste en crear una aplicación en con la que se podra principalmente crear notas, modificarlas, borrarlas y listar las creadas. Además se debe utilizar un usuario con el que poder realizar esas funciones, ya que al hacer login con un usuario correcto este tendra un tiempo de 1h para utilizar las funciones.

## Pasos de instalación

1. Clona el repositorio:

```bash
git clone https://github.com/FernandoTiradosG/DAWES/tree/main/ProyectoNotas
```

2. Navega al directorio del proyecto:

```bash
cd tu-proyecto
```

3. Instala las dependencias:

```bash
npm install
```

4. Configuración del entorno:

Crea un archivo .env o modifica el que ya esta en el directorio raíz del proyecto y define las variables de entorno necesarias:

```env
PORT=3000
S_WORD='secret'
```

Adaptalo como mejor te venga.

## Ejecución:

Para iniciar la aplicación:

```bash
npm start
```

## Estructura del proyecto:

```text
proyecto/
│
├── src/
│ ├── config/
│ │   ├── morgan.js
│ │   └── ...
│ │
│ ├── controllers/
│ │   ├── controller.js
│ │   ├── user-controller.js
│ │   └── ...
│ │
│ ├── loaders/
│ │   ├── express-loader.js
│ │   └── index.js
│ │
│ ├── middlewares/
│ │   ├── error-middleware.js
│ │   ├── misc-middleware.js
│ │   └── ...
│ │
│ ├── routes/
│ │   ├── route.js
│ │   └── ...
│ │
│ ├── tests/
│ │   ├── user-controller.test.js
│ │   ├── controller.test.js
│ │   └── ...
│ │
│ ├── utils/
│ │   ├── index.js
│ │   ├── logger.js
│ │   └── ...
│ │
│ ├── app.js
│ ├── config.js
│ ├── index.js
│
├── .env.template
├── .gitignore
├── .eslintrc.js
├── package-lock.json
├── package.json
├── swaggerConfig.js
└── README.md
```

+ src/: Contiene los archivos necesarios para el funcionamiento de la aplicación.
  + config/: Contiene archivos de configuración como configuraciones de logging, base de datos, etc.
  + controllers/: Controladores que manejan la lógica de las rutas y manipulan los datos.
  + loaders/: Configuraciones y carga de middleware para Express u otras herramientas.
  + middlewares/: Middlewares personalizados para realizar tareas comunes como autenticación, manejo de errores, etc.
  + routes/: Define las rutas de la aplicación y las asocia a los controladores correspondientes.
  + utils/: Utilidades o funciones de ayuda utilizadas en el proyecto.
  + app.js: Punto de entrada principal de la aplicación.
  + config.js: Archivo para definir configuraciones globales del proyecto.
  + app.js: Punto de inicio de la aplicación y escucha del servidor.
+ .gitignore: Especifica qué archivos y directorios ignorar en Git.
+ .eslintrc.js: Configuración de reglas y estilo para ESLint.
+ package.json: Archivo de configuración de npm que contiene metadatos del proyecto y dependencias.
+ package-lock.json: Bloquea versiones exactas de las dependencias de npm.
+ swaggerConfig.js: Posible archivo de configuración para integración de Swagger.
+ .env: Archivo para definir variables de entorno sensibles o configuraciones específicas del entorno.

## Uso de las funciones principales

## Consideraciones de seguridad
