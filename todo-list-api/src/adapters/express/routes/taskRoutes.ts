import express, { Router } from 'express'
import { CreateTask } from '../../../application/usecases/CreateTask'
import { DeleteTask } from '../../../application/usecases/DeleteTask'
import { CompleteTask } from '../../../application/usecases/CompleteTask'
import { ListTasks } from '../../../application/usecases/ListTasks'
import { SortTasksByDate } from '../../../application/usecases/SortTasksByDate'
import { TaskSummary } from '../../../application/usecases/TaskSummary'
import taskController from '../controllers/taskController'

const taskRoutes = (
  createTask: CreateTask,
  deleteTask: DeleteTask,
  completeTask: CompleteTask,
  listTasks: ListTasks,
  sortTasksByDate: SortTasksByDate,
  taskSummary: TaskSummary
): Router => {
  const router = express.Router()

  router.post('/', taskController.createTask(createTask))
  router.delete('/:id', taskController.deleteTask(deleteTask))
  router.put('/:id/complete', taskController.completeTask(completeTask))
  router.get('/', taskController.listTasks(listTasks))
  router.get('/sort', taskController.sortTasks(sortTasksByDate))
  router.get('/summary', taskController.taskSummary(taskSummary))

  return router
}

export default taskRoutes
