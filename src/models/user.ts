import { Table, Column, Model, PrimaryKey, Default, DataType } from "sequelize-typescript";

@Table({ timestamps: true })
export class User extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id!: string;

  @Column({ allowNull: false, unique: true })
  email!: string;

  @Column({ allowNull: false })
  password!: string;
}
