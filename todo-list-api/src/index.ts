import express from 'express'
import bodyParser from 'body-parser'
import sequelize from './infrastructure/database/sequelize'
import cors from 'cors'
import { SequelizeTaskRepository } from './infrastructure/repositories/SequelizeTaskRepository'
import { CreateTask } from './application/usecases/CreateTask'
import { DeleteTask } from './application/usecases/DeleteTask'
import { CompleteTask } from './application/usecases/CompleteTask'
import { ListTasks } from './application/usecases/ListTasks'
import { SortTasksByDate } from './application/usecases/SortTasksByDate'
import { TaskSummary } from './application/usecases/TaskSummary'
import { SetTaskDeadline } from './application/usecases/SetTaskDeadline'
import taskRoutes from './adapters/express/routes/taskRoutes'
import { TaskObserverImpl } from './domain/observers/taskObserver'

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())

// sync Sequelize with database
sequelize.sync()

// TODO: move the following config to a new file
// config SequelizeTaskRepository
const taskRepository = new SequelizeTaskRepository()

// config use cases
const createTask = new CreateTask(taskRepository)
const deleteTask = new DeleteTask(taskRepository)
const completeTask = new CompleteTask(taskRepository)
const listTasks = new ListTasks(taskRepository)
const sortTasks = new SortTasksByDate(taskRepository)
const taskSummary = new TaskSummary(taskRepository)
const setTaskDeadline = new SetTaskDeadline(taskRepository)

// observers
const taskObserver = new TaskObserverImpl()
createTask.subscribe(taskObserver)

// config routes
// TODO: the function taskRoutes is receiving too many args
app.use('/tasks', taskRoutes(createTask, deleteTask, completeTask, setTaskDeadline, listTasks, sortTasks, taskSummary))

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
