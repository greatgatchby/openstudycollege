import {Course, Collection} from "../models";
import {Order} from "sequelize";
import {generateToken} from "../utils/jwt";
import {User} from "../models/user";
import bcrypt from "bcryptjs";

export const resolvers = {
    Query: {
        courses: async (_: any, {limit, sortOrder}: { limit?: number; sortOrder?: "ASC" | "DESC" }) => {
            const order: Order = sortOrder === "DESC" ? [["createdAt", "DESC"]] : [["createdAt", "ASC"]];
            return await Course.findAll({limit, order, include: [Collection]});
        },
        course: async (_: any, {id}: { id: string }) => {
            return await Course.findByPk(id, {include: [Collection]});
        },
        collections: async () => {
            return await Collection.findAll({include: [Course]});
        },
        collection: async (_: any, {id}: { id: string }) => {
            return await Collection.findByPk(id, {include: [Course]});
        },
    },
    Mutation: {
        addCourse: async (_: any, {input}: {
            input: { title: string; description: string; duration: string; outcome: string }
        }) => {
            return await Course.create(input);
        },
        updateCourse: async (_: any, {id, input}: {
            id: string;
            input: { title?: string; description?: string; duration?: string; outcome?: string }
        }) => {
            await Course.update(input, {where: {id}});
            return await Course.findByPk(id);
        },
        deleteCourse: async (_: any, {id}: { id: string }) => {
            const deleted = await Course.destroy({where: {id}});
            return !!deleted;
        },
        register: async (_: any, {email, password}: { email: string; password: string }) => {
            const existingUser = await User.findOne({where: {email}});
            if (existingUser) {
                throw new Error("User already exists");
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({email, password: hashedPassword});

            return {
                token: generateToken(user.id),
                user,
            };
        },
        login: async (_: any, {email, password}: { email: string; password: string }) => {
            const user = await User.findOne({where: {email}});
            if (!user) {
                throw new Error("Invalid credentials");
            }

            const valid = await bcrypt.compare(password, user.password);
            if (!valid) {
                throw new Error("Invalid credentials");
            }

            return {
                token: generateToken(user.id),
                user,
            };
        },
    },
};
