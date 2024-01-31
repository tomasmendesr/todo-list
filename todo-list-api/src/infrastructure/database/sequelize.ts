import { Sequelize } from 'sequelize-typescript'
import { Task} from '../../domain/entities/Task'

const sequelize = new Sequelize({
  dialect: 'postgres',
  database: 'tu_database',
  username: 'tu_usuario',
  password: 'tu_contraseña',
  storage: ':memory:',
  models: [Task],
  logging: false,
})

export default sequelize