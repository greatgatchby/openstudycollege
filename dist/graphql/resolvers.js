"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const models_1 = require("../models");
exports.resolvers = {
    Query: {
        courses: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { limit, sortOrder }) {
            const order = sortOrder === "DESC" ? [["createdAt", "DESC"]] : [["createdAt", "ASC"]];
            return yield models_1.Course.findAll({ limit, order, include: [models_1.Collection] });
        }),
        course: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id }) {
            return yield models_1.Course.findByPk(id, { include: [models_1.Collection] });
        }),
        collections: () => __awaiter(void 0, void 0, void 0, function* () {
            return yield models_1.Collection.findAll({ include: [models_1.Course] });
        }),
        collection: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id }) {
            return yield models_1.Collection.findByPk(id, { include: [models_1.Course] });
        }),
    },
    Mutation: {
        addCourse: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { input }) {
            return yield models_1.Course.create(input);
        }),
        updateCourse: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id, input }) {
            yield models_1.Course.update(input, { where: { id } });
            return yield models_1.Course.findByPk(id);
        }),
        deleteCourse: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id }) {
            const deleted = yield models_1.Course.destroy({ where: { id } });
            return !!deleted;
        }),
    },
};
