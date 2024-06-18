# BabySittingApp
PAGINA DEPLOYADA: https://deploy-tadeo-ressio.onrender.com/
## Miembros del Equipo

| Nombre            | Rol                  |
|-------------------|----------------------|
| **Tadeo Ressio**  | Frontend             |
| **Alexis Calderón** | Backend            |
| **Javier Casani** | Backend              |
| **María Hernandez** | Testing - UX/UI    |

## Tecnologías Utilizadas

### Backend
- **Spring Boot**
- **MySQL**
- **Swagger**
- **Render**

### Frontend
- **Angular**
- **Bootstrap**

### UX/UI
- **Figma**

---

Este proyecto se creó en Spring Initializr con las siguientes especificaciones:

- **Spring Boot**: versión 3.3.0
- **Maven**
- **Java**: 17

## Dependencias

- Spring Web
- Spring Devtools
- Spring Data JPA
- Lombok
- MySQL Driver

## Descripción

Este proyecto tiene como objetivo proporcionar una plataforma para la gestión de servicios de cuidado infantil. Permite a los padres buscar niñeras, enviar solicitudes de cuidado y dejar reseñas sobre la experiencia. Además, brinda a los administradores la capacidad de borrar usuarios de padres y niñeras, así como gestionar penalizaciones para las niñeras.

## Requisitos Previos

- **Java Development Kit (JDK) 17**
- **Apache Maven**
- **MySQL**
- **PhpMyAdmin** (Gestor base de datos)
- **NetBeans IDE** (opcional pero recomendado para desarrollo)
- **XAMPP / WAMPP** (como panel de control)

Se creó una base de datos local llamada "childcareapp". Al ejecutar el proyecto, se crean las tablas de forma local para comenzar a realizar la lógica y los endpoints, que luego pueden ser probados en Postman y verificados en las tablas creadas localmente.

## Funcionalidades Básicas

- Registro y gestión de administradores, padres, niñeras y niños.
- Gestión de solicitudes de cuidado infantil.
- Gestión de reseñas sobre las niñeras.
- Asociación de niñeras favoritas a los padres.
- Aplicación y gestión de penalizaciones a las niñeras por parte de los administradores.

## Explicación del Diagrama

### Administrator (Administrador)

- Representa a un administrador del sistema.
- Puede gestionar penalizaciones para niñeras.
- Relación uno a muchos con la entidad **Penalty** para administrar las penalizaciones.

### Child (Niño)

- Representa a un niño que necesita cuidado.
- Relación muchos a uno con la entidad **Parent** para asociar al niño con su padre/madre.

### Nanny (Niñera)

- Representa a una niñera que ofrece servicios de cuidado infantil.
- Puede recibir solicitudes y reseñas de padres.
- Relaciones uno a muchos con las entidades **Request** y **Review** para manejar las solicitudes y reseñas recibidas.
- Puede ser penalizada por los administradores.
- Relación uno a muchos con la entidad **Penalty** para gestionar las penalizaciones aplicadas a la niñera.

### NannyFavorite (Niñera Favorita)

- Representa la relación entre un padre y una niñera que el padre considera favorita.
- Relaciones muchos a uno tanto con la entidad **Parent** como con **Nanny**.

### Parent (Padre/Madre)

- Representa a un padre o madre que busca servicios de cuidado infantil para sus hijos.
- Puede tener varios hijos y realizar solicitudes de cuidado infantil a las niñeras.
- Relaciones uno a muchos con las entidades **Child**, **Request**, **NannyFavorite** y **Review** para gestionar sus hijos, solicitudes, niñeras favoritas y reseñas escritas.

### Penalty (Penalización)

- Representa una penalización aplicada a una niñera por un administrador.
- Relaciones muchos a uno tanto con **Administrator** como con **Nanny**.

### Request (Solicitud)

- Representa una solicitud de trabajo enviada por un padre a una niñera.
- Relaciones muchos a uno tanto con **Nanny** como con **Parent**.

### Review (Reseña)

- Representa una reseña escrita por un padre sobre una niñera.
- Relaciones muchos a uno tanto con **Nanny** como con **Parent**.

## Cómo Empezar

### Clonar el Repositorio

```sh
git clone https://github.com/tu_usuario/childcare-management-platform.git
cd childcare-management-platform
```

### Configurar la Base de Datos

Crea una base de datos local con el nombre `childcareapp`. Configura las credenciales de la base de datos en `src/main/resources/application.properties`.

### Construir y Ejecutar el Proyecto

```sh
mvn clean install
mvn spring-boot:run
```

Ahora puedes acceder a la aplicación en `http://localhost:8080`.

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, sigue los pasos a continuación para contribuir:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios necesarios y commitea (`git commit -m 'Agregar nueva funcionalidad'`).
4. Sube los cambios a tu fork (`git push origin feature/nueva-funcionalidad`).
5. Crea un pull request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.

---

¡Gracias por usar nuestra plataforma de gestión de cuidado infantil!
