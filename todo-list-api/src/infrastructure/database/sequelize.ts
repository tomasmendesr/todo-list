import { Sequelize } from 'sequelize-typescript'
import { Task} from '../../domain/entities/Task'

const sequelize = new Sequelize({
  dialect: 'postgres',
  database: 'todo_tasks',
  username: 'postgres',
  password: '',
  storage: ':memory:',
  models: [Task],
  logging: false,
})

export default sequelize