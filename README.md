# # Challenge FullStack - Dev Sr TS

  

### Introduccion

El siguiente challenge fue ideado para validar los skills de los candidatos en proceso de entrevista, de ninguna manera se trata de un proyecto real, ni se intenta extraer funcionalidades desarrolladas por los candidatos y utilizarlas en otros proyectos.

Por favor, si elegiste hacer este challenge y no dispones del tiempo para completarlo, contactate con *people* a jobs@braintly.com.

Vamos a tener en cuenta lo siguiente:

- Lo perfecto es enemigo de lo bueno. Entregar algo siempre va a ser un buen inicio y mejor que no entregar nada.
- Si no pudiste resolver parte de la consigna, no te preocupes, pero suma que nos compartas lo que pensaste o lo que pudiste hacer para poder comprender tu forma de encarar el problema.
- No esperamos que sepas todas las respuestas de antemano. Investigar es un gran skill.
- Es importante entregar en la fecha comprometida.

### Desafío
#### **¿Cuál es el objetivo?**

Desarrollar una ToDo List, te dejamos algunos requerimientos más abajo 👇 👇 👇.

#### Requerimientos funcionales:

Nuestra ToDo List debe tener las siguientes capacidades:

- Crear y eliminar una tarea.
- Marcar una tarea como completada.
- Establecer un deadline a cada tarea (Fecha y hora).
- Listar todas las tareas creadas.
- Ordenar lista de tareas por fecha.
- Mostrar un resumen con la cantidad de tareas completadas y no completadas.

#### Otros requerimientos:

- Utilizar clean architecture para su desarrollo.
- Hacer uso de al menos 2 patrones de diseño.
- El desarrollo debe estar realizado en Typescript.
- Para el backend podes utilizar el framework de Node que prefieras.
- Para el frontend podes utilizar el framework que te quede más cómodo, puntos extra si haces uso de VueJS.
- Tanto backend como frontend deben ser proyectos separados, no desarrollar el challenge como un monolito.
- La base de datos la podes crear con el motor de base de datos relacional que prefieras, puntos extra si utilizas PostgreSQL.

# Project Instructions

## Local development

### Backend (Nodejs)

The challenge is set up to run in a local environment, consuming the data from a local instance of PostgreSQL. The project follows clean architecture pattern.

![image](https://kinsta.com/wp-content/uploads/2022/02/postgres-logo.png)
![image](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

To initialize the backend, execute the following commands:
1. Navigate to the `/proposals-api` directory.
2. Run the following commands:

    ```bash
    npm i
    npm run dev
    ```

Endpoints:

**1) Create Task**
- **HTTP Method:** `POST`
- **Endpoint:** `/tasks`
- **Description:** Creates a new task.
- **Request Body (Example):**
  ```json
  {
    "description": "Important task",
    "deadline": "2024-02-15T12:00:00Z"
  }
  ```

**2) Delete Task**
- **HTTP Method:** `DELETE`
- **Endpoint:** `/tasks/:id`
- **Description:** Deletes a task.

**3) Mark Task as Completed**
- **HTTP Method:** `PUT`
- **Endpoint:** `/tasks/:id/complete`
- **Description:** Mark task as complete.

**4) Set Deadline for Task**
- **HTTP Method:** `PUT`
- **Endpoint:** `/tasks/:id/set-deadline`
- **Description:** Set task deadline.
- **Request Body (Example):**
  ```json
  {
    "deadline": "2024-02-15T12:00:00Z"
  }
  ```

**5) List tasks**
- **HTTP Method:** `GET`
- **Endpoint:** `/tasks`
- **Description:** Retrive all tasks.

**6) Sort tasks by deadline**
- **HTTP Method:** `GET`
- **Endpoint:** `/tasks/sort-by-deadline`
- **Description:** Retrive all tasks sort by deadline.

**7) Show Summary of Completed and Uncompleted Tasks**
- **HTTP Method:** `GET`
- **Endpoint:** `/tasks/summary`
- **Description:** Gets a summary with the count of completed and uncompleted tasks.

A postman collection is available with request examples: https://api.postman.com/collections/7286271-efee4e58-173a-4fea-a1bf-695bd40151b3?access_key=PMAT-01HNGVQ1D7DRJAX61HXTN33BZH

### Frontend

-


## Additional Notes
-
