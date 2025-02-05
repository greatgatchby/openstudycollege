"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseCollection = exports.Collection = exports.Course = exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const course_1 = require("./course");
Object.defineProperty(exports, "Course", { enumerable: true, get: function () { return course_1.Course; } });
const collection_1 = require("./collection");
Object.defineProperty(exports, "Collection", { enumerable: true, get: function () { return collection_1.Collection; } });
const course_collection_1 = require("./course-collection");
Object.defineProperty(exports, "CourseCollection", { enumerable: true, get: function () { return course_collection_1.CourseCollection; } });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.sequelize = new sequelize_typescript_1.Sequelize({
    dialect: "postgres",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    logging: false,
    models: [course_1.Course, collection_1.Collection, course_collection_1.CourseCollection],
});
