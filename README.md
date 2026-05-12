# Despliegue de aplicación web con Docker

## Descripción del proyecto

Este proyecto consiste en una aplicación web tipo “videoclub / biblioteca de libros” desarrollada con:

- Frontend en HTML, CSS y JavaScript
- Backend con Node.js + Express
- Base de datos MySQL
- Contenedores Docker (docker-compose)
- Comunicación entre frontend, backend y base de datos
- Seguridad mediante HTTPS

---

## Arquitectura

El proyecto está compuesto por 3 partes:

- Frontend (HTML/CSS/JS)
- Backend (Node.js + Express)
- Base de datos (MySQL en Docker)

---

## Tecnologías utilizadas

- Node.js
- Express
- MySQL
- Docker
- Docker Compose
- JavaScript (Frontend)
- HTML5 / CSS3

---

## Cómo ejecutar el proyecto

### 1. Clonar el repositorio
```bash
git clone <URL_DEL_REPO>
cd Despliegue-de-aplicación-web-con-Docker
```
---

### 2. Levantar contenedores con Docker

```bash
docker compose up -d
```

Esto levantará:

* Backend
* Base de datos MySQL

---

### 3. Iniciar backend (si no está en Docker)

```bash
cd backend
npm install
npm run dev
```

---

## Acceso a la aplicación

* Frontend: abrir `index.html`
* Backend API:
  👉 [https://localhost:3000](https://localhost:3000)

---

## Funcionalidades

- Registro de usuario 
- Inicio de sesión 
- Validación contra base de datos 
- Sesión con localStorage 
- Redirección a página de libro
- Cierre de sesión
- API REST conectada a MySQL

---

## Base de datos

La base de datos contiene una tabla:

```sql
usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario VARCHAR(50) UNIQUE,
  password VARCHAR(255)
)
```

---

## Seguridad

* Servidor funcionando bajo HTTPS
* Certificado auto-firmado (selfsigned)
* Comunicación cliente-servidor protegida

---

## Autor

Sara Romero
Proyecto académico – 1º DAW
