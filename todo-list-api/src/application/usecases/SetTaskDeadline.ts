import { TaskRepository } from '../../domain/repositories/TaskRepository'

export class SetTaskDeadline {
  constructor(private taskRepository: TaskRepository) {}

  async execute(taskData: { taskId: number, deadline: Date }) {
    return this.taskRepository.setDeadline(taskData)
  }
}