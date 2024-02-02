import { CreateTask } from '../../../application/usecases/CreateTask'
import { Task } from '../../../domain/entities/Task'
import { TaskRepository } from '../../../domain/repositories/TaskRepository'
import { TaskObserver } from '../../../domain/observers/taskObserver'

describe('CreateTask', () => {
  let createTask: CreateTask
  let taskRepositoryMock: jest.Mocked<TaskRepository>
  let observerMock1: TaskObserver
  let observerMock2: TaskObserver

  beforeEach(() => {
    taskRepositoryMock = {
        create: jest.fn(),
        delete: jest.fn(),
        complete: jest.fn(),
        list: jest.fn(),
        sort: jest.fn(),
        summary: jest.fn(),
        setDeadline: jest.fn(),
    }
  
    observerMock1 = {
      update: jest.fn(),
    }

    observerMock2 = {
      update: jest.fn(),
    }

    createTask = new CreateTask(taskRepositoryMock)
    createTask.subscribe(observerMock1)
    createTask.subscribe(observerMock2)
  })

  it('should notify observers on task creation', async () => {
    const taskData = { description: 'Test Task', deadline: new Date() }
    const taskId = 1

    taskRepositoryMock.create.mockResolvedValue({
        id: taskId,
        completed: false,
        ...taskData,
    } as Task)

    const createdTask = await createTask.execute(taskData)

    expect(createdTask).toEqual({
        id: taskId,
        completed: false,
        ...taskData
    })

    expect(observerMock1.update).toHaveBeenCalledWith(taskId)
    expect(observerMock2.update).toHaveBeenCalledWith(taskId)

    expect(observerMock1.update).toHaveBeenCalledTimes(1)
    expect(observerMock2.update).toHaveBeenCalledTimes(1)
  })

  it('should not notify observers if task creation fails', async () => {
    const taskData = { description: 'Test Task', deadline: new Date() }

    taskRepositoryMock.create.mockRejectedValue(new Error('Failed to create task'))

    await expect(createTask.execute(taskData)).rejects.toThrow('Failed to create task')

    expect(observerMock1.update).not.toHaveBeenCalled()
    expect(observerMock2.update).not.toHaveBeenCalled()
  })
})
