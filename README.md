# # Challenge FullStack - Dev Sr TS

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

The challenge is set up to run in a local environment, consuming the data from a local instance of PostgreSQL. 

![image](https://kinsta.com/wp-content/uploads/2022/02/postgres-logo.png)

### Backend (Nodejs)

The API follows clean architecture pattern.

![image](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

To initialize the backend, execute the following commands:

⚠️ **Disclaimer:**
Make sure PostgreSQL instance is running, otherwise the api is not going to work.

1. Navigate to the `/todo-list-api` directory.
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

The UI was built with Vue.js.

![image](https://www.arsys.es/blog/file/uploads/2020/04/01-vuejs.jpg)

To initialize the frontend, execute the following commands:
1. Navigate to the `/todo-list-ui` directory.
2. Run the following commands:

    ```bash
    npm i
	npm run build
    npm run serve
    ```
	
## Additional Notes

App screenshots:

![image](https://i.ibb.co/vk6fcmY/Captura-de-pantalla-2024-02-02-a-la-s-10-47-58.png)

![image](https://i.ibb.co/XLWk5VR/Captura-de-pantalla-2024-02-02-a-la-s-10-47-09.png)
