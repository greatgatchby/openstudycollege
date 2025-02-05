"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseCollection = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const course_1 = require("./course");
const collection_1 = require("./collection");
let CourseCollection = class CourseCollection extends sequelize_typescript_1.Model {
};
exports.CourseCollection = CourseCollection;
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => course_1.Course),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CourseCollection.prototype, "courseId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => collection_1.Collection),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CourseCollection.prototype, "collectionId", void 0);
exports.CourseCollection = CourseCollection = __decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: false })
], CourseCollection);
