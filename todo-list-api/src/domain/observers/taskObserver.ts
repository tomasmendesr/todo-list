export interface TaskObserver {
    update(taskId: number): Promise<void>
}

export class TaskObserverImpl implements TaskObserver {
  async update(taskId: number) {
    console.log(`New task has been created: ${taskId}`)
    // send email notification?
  }
}
