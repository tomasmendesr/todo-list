import { TaskRepository } from '../../domain/repositories/TaskRepository'

export class CreateTask {
  constructor(private taskRepository: TaskRepository) {}

  async execute(taskData: { description: string, deadline: Date }) {
    return this.taskRepository.create(taskData)
  }
}