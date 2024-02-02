import { TaskRepository } from '../../domain/repositories/TaskRepository'
import { TaskObserver } from '../../domain/observers/taskObserver'

export class CreateTask {
  private observers: TaskObserver[] = [];

  constructor(private taskRepository: TaskRepository) {}

  subscribe(observer: TaskObserver) {
    this.observers.push(observer);
  }

  async execute(taskData: { description: string, deadline: Date }) {
    const createdTask = await this.taskRepository.create(taskData)
    this.notifyObservers(createdTask.id)
    return createdTask;
  }

  private notifyObservers(taskId: number) {
    for (const observer of this.observers) {
      observer.update(taskId)
    }
  }
}