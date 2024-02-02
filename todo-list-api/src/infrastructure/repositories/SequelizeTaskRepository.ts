import { Task } from '../../domain/entities/Task'
import { TaskRepository } from '../../domain/repositories/TaskRepository'

export class SequelizeTaskRepository implements TaskRepository {
  async create(taskData: { description: string, deadline: Date, completed?: boolean }): Promise<Task> {
    const defaultTaskData = { completed: false, ...taskData };
    return Task.create(defaultTaskData)
  }

  async delete(id: number): Promise<void> {
    const task = await Task.findByPk(id)
    if (task) {
      await task.destroy()
    }
  }

  async complete(id: number): Promise<Task | null> {
    const task = await Task.findByPk(id)
    if (task) {
      task.completed = true
      await task.save()
      return task
    }
    return null
  }

  async list(): Promise<Task[]> {
    return Task.findAll({
      order: [['id', 'ASC']],
    })
  }

  async sort(): Promise<Task[]> {
    return Task.findAll({
      order: [['deadline', 'ASC']],
    })
  }

  async summary(): Promise<{ completed: number, notCompleted: number }> {
    const completed = await Task.count({ where: { completed: true } })
    const notCompleted = await Task.count({ where: { completed: false } })
    return { completed, notCompleted }
  }

  async setDeadline(taskData: { taskId: number, deadline: Date }): Promise<Task | null> {
    const task = await Task.findByPk(taskData.taskId)
    if (task) {
      task.deadline = taskData.deadline
      await task.save()
      return task
    }
    return null
  }
}
