import { TaskRepository } from '../../domain/repositories/TaskRepository'

export class CompleteTask {
  constructor(private taskRepository: TaskRepository) {}

  async execute(taskId: number) {
    return this.taskRepository.complete(taskId)
  }
}