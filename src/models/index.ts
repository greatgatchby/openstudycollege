import { Sequelize } from "sequelize-typescript";
import { Course } from "./course";
import { Collection } from "./collection";
import { CourseCollection } from "./course-collection";
import dotenv from "dotenv";
import {User} from "./user";

dotenv.config();

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  logging: false,
  models: [Course, Collection, CourseCollection, User],
});

export { Course, Collection, CourseCollection };
