import { Request, Response } from 'express'
import { CreateTask } from '../../../application/usecases/CreateTask'
import { DeleteTask } from '../../../application/usecases/DeleteTask'
import { CompleteTask } from '../../../application/usecases/CompleteTask'
import { ListTasks } from '../../../application/usecases/ListTasks'
import { SortTasksByDate } from '../../../application/usecases/SortTasksByDate'
import { TaskSummary } from '../../../application/usecases/TaskSummary'
import { SetTaskDeadline } from '../../../application/usecases/SetTaskDeadline'

const taskController = {
  createTask: (createTask: CreateTask) => async (req: Request, res: Response) => {
    try {
      const task = await createTask.execute(req.body)
      res.status(201).json(task)
    } catch (error) {
      res.status(500).json({ error: 'Error creating task' })
    }
  },

  deleteTask: (deleteTask: DeleteTask) => async (req: Request, res: Response) => {
    try {
      await deleteTask.execute(Number(req.params.id))
      res.status(204).send()
    } catch (error) {
      res.status(500).json({ error: 'Error deleting task' })
    }
  },

  completeTask: (completeTask: CompleteTask) => async (req: Request, res: Response) => {
    try {
      const task = await completeTask.execute(Number(req.params.id))
      if (task) {
        res.status(200).json(task)
      } else {
        res.status(404).json({ error: 'Task not found' })
      }
    } catch (error) {
      res.status(500).json({ error: 'Error completing task' })
    }
  },

  listTasks: (listTasks: ListTasks) => async (req: Request, res: Response) => {
    try {
      const tasks = await listTasks.execute()
      res.status(200).json(tasks)
    } catch (error) {
      res.status(500).json({ error: 'Error listing tasks' })
    }
  },

  sortTasks: (sortTasks: SortTasksByDate) => async (req: Request, res: Response) => {
    try {
      const tasks = await sortTasks.execute()
      res.status(200).json(tasks)
    } catch (error) {
      res.status(500).json({ error: 'Error sorting tasks' })
    }
  },

  taskSummary: (taskSummary: TaskSummary) => async (_: Request, res: Response) => {
    try {
      const summary = await taskSummary.execute()
      res.status(200).json(summary)
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving task summary' })
    }
  },

  setTaskDeadline: (setTaskDeadline: SetTaskDeadline) => async (req: Request, res: Response) => {
    const taskId = Number(req.params.id)
    const { deadline } = req.body

    try {
        const task = await setTaskDeadline.execute({taskId, deadline })
        if (task) {
          res.status(200).json(task)
        } else {
          res.status(404).json({ error: 'Task not found' })
        }
      } catch (error) {
        res.status(500).json({ error: 'Error completing task' })
      }
  },
}

export default taskController