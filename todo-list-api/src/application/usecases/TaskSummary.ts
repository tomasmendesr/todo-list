import { TaskRepository } from '../../domain/repositories/TaskRepository'

export class TaskSummary {
  constructor(private taskRepository: TaskRepository) {}

  async execute() {
    return this.taskRepository.summary()
  }
}