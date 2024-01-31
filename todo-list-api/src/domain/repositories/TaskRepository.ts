import { Task } from '../entities/Task'

export interface TaskRepository {
  create(taskData: { description: string, deadline: Date }): Promise<Task>
  delete(id: number): Promise<void>
  complete(id: number): Promise<Task | null>
  list(): Promise<Task[]>
  sort(): Promise<Task[]>
  summary(): Promise<{ completed: number, notCompleted: number }>
}
