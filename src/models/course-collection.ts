import { Table, Column, Model, ForeignKey } from "sequelize-typescript";
import { Course } from "./course";
import { Collection } from "./collection";

@Table({ timestamps: false })
export class CourseCollection extends Model {
  @ForeignKey(() => Course)
  @Column
  courseId!: string;

  @ForeignKey(() => Collection)
  @Column
  collectionId!: string;
}
