# Administrador de Tareas

**Administrador de Tareas** es una aplicación web construida con Angular que permite administrar tareas de forma simple e intuitiva. Permite seleccionar un usuario y gestionar sus tareas de manera visual y dinámica.

## Funcionalidades principales

- Visualización de usuarios y sus tareas.
- Agregado de nuevas tareas con formulario.
- Eliminación de tareas completadas.
- Persistencia de datos mediante LocalStorage.
- Interfaz amigable y responsive.

## Tecnologías utilizadas

- Angular
- HTML + CSS
- TypeScript

## Estructura de componentes

- `AppComponent`: raíz de la aplicación, gestiona el usuario seleccionado.
- `UsuarioComponent`: muestra información del usuario y emite eventos de selección.
- `TareasComponent`: lista y administra las tareas del usuario activo.
- `TareaComponent`: representa cada tarea individual.
- `TareaNuevaComponent`: formulario emergente para crear tareas.
- `TarjetaComponent`: componente visual reutilizable con `ng-content`.
- `TareasService`: servicio encargado de manejar la lógica y almacenamiento de tareas.

## Flujo general

1. Se muestra una lista de usuarios.
2. Al hacer clic en uno, se visualizan sus tareas.
3. Se pueden agregar nuevas tareas o marcar como completadas.
4. Los datos se guardan automáticamente en el navegador (LocalStorage).

## Instrucciones para correr el proyecto

#### 1. Cloná el repositorio
    git clone https://github.com/JuliLorenzo/AppTareas.git

    cd AppTareas
#### 2. Instalá las dependencias
    npm install
#### 3. Iniciá la aplicación
    ng serve
#### 4. Abrí el navegador en
    http://localhost:4200

## Notas adicionales
Este proyecto forma parte de un curso de Angular donde se exploran conceptos como componentes standalone, servicios, eventos personalizados, renderizado condicional, proyección de contenido y más. Será actualizado constantemente a medida que se avanza con nuevos temas.

## Autor
Julieta Lorenzo
