import { Table, Column, Model, PrimaryKey, Default, DataType, BelongsToMany } from "sequelize-typescript";
import { Course } from "./course";
import { CourseCollection } from "./course-collection";

@Table({ timestamps: true })
export class Collection extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id!: string;

  @Column({ allowNull: false })
  name!: string;

  @BelongsToMany(() => Course, () => CourseCollection)
  courses!: Course[];
}
