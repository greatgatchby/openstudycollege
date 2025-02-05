import { Table, Column, Model, PrimaryKey, Default, DataType, BelongsToMany } from "sequelize-typescript";
import { Collection } from "./collection";
import { CourseCollection } from "./course-collection";

@Table({ timestamps: true })
export class Course extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id!: string;

  @Column({ allowNull: false })
  title!: string;

  @Column({ allowNull: false, type: DataType.TEXT })
  description!: string;

  @Column({ allowNull: false })
  duration!: string;

  @Column({ allowNull: false })
  outcome!: string;

  @BelongsToMany(() => Collection, () => CourseCollection)
  collections!: Collection[];
}
