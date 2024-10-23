Gestión de Empleados - Prueba Técnica
Este proyecto es una aplicación web completa que permite gestionar la información de empleados, desarrollada como parte de una prueba técnica.

Descripción
La aplicación consta de un backend desarrollado en Node.js con Express y un frontend en React. Permite visualizar, filtrar y acceder a la información detallada de los empleados, así como crear nuevos empleados.

Backend
El backend expone una API REST que permite obtener el listado de empleados y crear nuevos empleados en una base de datos MongoDB. Cada empleado tiene los siguientes atributos:

Nombre completo
Edad
Área
Antigüedad
Teléfono
Frontend
El frontend está construido con React y permite:

Mostrar una lista de empleados.
Filtrar los empleados por área de trabajo.
Visualizar la cantidad total de empleados por cada área.
Ver la información detallada de un empleado al hacer clic en él.
Crear un nuevo empleado a través de un formulario.
Tecnologías utilizadas
Backend: Node.js, Express, MongoDB
Frontend: React, Vite
Instalación y ejecución
Requisitos
Node.js instalado en tu sistema
MongoDB en funcionamiento
Instrucciones
Clona este repositorio en tu máquina local:

bash
Copiar código
git clone https://github.com/tu-usuario/tu-repositorio.git
Dirígete a la carpeta del backend e instala las dependencias:

bash
Copiar código
cd server
npm install
Inicia el backend:

bash
Copiar código
npm run dev
Luego, dirígete a la carpeta del frontend e instala las dependencias:

bash
Copiar código
cd client
npm install
Inicia el frontend:

bash
Copiar código
npm run dev
Abre tu navegador y visita http://localhost:3000 para ver la aplicación en acción.

Funcionalidades
Listado de empleados con detalles como nombre, edad, área, antigüedad y teléfono.
Filtrado de empleados por área.
Visualización del total de empleados por área.
Visualización de detalles individuales de cada empleado.
Formulario para crear un nuevo empleado.
Comandos útiles
Iniciar backend: npm run dev (en la carpeta server)
Iniciar frontend: npm run dev (en la carpeta client)
