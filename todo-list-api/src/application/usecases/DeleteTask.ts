import { TaskRepository } from '../../domain/repositories/TaskRepository'

export class DeleteTask {
  constructor(private taskRepository: TaskRepository) {}

  async execute(taskId: number) {
    return this.taskRepository.delete(taskId)
  }
}