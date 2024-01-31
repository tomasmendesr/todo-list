import { TaskRepository } from '../../domain/repositories/TaskRepository'

export class SortTasksByDate {
  constructor(private taskRepository: TaskRepository) {}

  async execute() {
    return this.taskRepository.sort()
  }
}