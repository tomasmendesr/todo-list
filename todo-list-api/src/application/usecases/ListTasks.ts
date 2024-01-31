import { TaskRepository } from '../../domain/repositories/TaskRepository'

export class ListTasks {
  constructor(private taskRepository: TaskRepository) {}

  async execute() {
    return this.taskRepository.list()
  }
}