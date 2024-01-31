import express from 'express'
import bodyParser from 'body-parser'
import sequelize from './infrastructure/database/sequelize'
import { SequelizeTaskRepository } from './infrastructure/repositories/SequelizeTaskRepository'
import { CreateTask } from './application/usecases/CreateTask'
import { DeleteTask } from './application/usecases/DeleteTask'
import { CompleteTask } from './application/usecases/CompleteTask'
import { ListTasks } from './application/usecases/ListTasks'
import { SortTasksByDate } from './application/usecases/SortTasksByDate'
import { TaskSummary } from './application/usecases/TaskSummary'
import taskRoutes from './adapters/express/routes/taskRoutes'

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())

// sync Sequelize with database
sequelize.sync()

// config SequelizeTaskRepository
const taskRepository = new SequelizeTaskRepository()

// config use cases
const createTask = new CreateTask(taskRepository)
const deleteTask = new DeleteTask(taskRepository)
const completeTask = new CompleteTask(taskRepository)
const listTasks = new ListTasks(taskRepository)
const sortTasks = new SortTasksByDate(taskRepository)
const taskSummary = new TaskSummary(taskRepository)

// config routes
app.use('/tasks', taskRoutes(createTask, deleteTask, completeTask, listTasks, sortTasks, taskSummary))

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
