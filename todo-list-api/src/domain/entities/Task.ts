import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement } from 'sequelize-typescript'

@Table
export class Task extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;
  
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description!: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    deadline!: Date;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    })
    completed!: boolean;
}
