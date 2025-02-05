import "reflect-metadata";
import express from "express";
import {ApolloServer} from "@apollo/server";
import {typeDefs} from "./graphql/schema";
import {resolvers} from "./graphql/resolvers";
import {sequelize} from "./models";
import dotenv from "dotenv";
import {expressMiddleware} from "@apollo/server/express4";
import cors from "cors";
import jwt from "jsonwebtoken";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key"; // Ensure you have a JWT_SECRET in .env

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const startServer = async () => {
    await server.start();

    app.use(
        "/graphql",
        cors<cors.CorsRequest>(),
        express.json(),
        //@ts-ignore
        expressMiddleware(server, {
            context: async ({req}) => {
                const token = req.headers.authorization || "";
                let user = null;

                if (token.startsWith("Bearer ")) {
                    try {
                        user = jwt.verify(token.replace("Bearer ", ""), SECRET_KEY);
                    } catch (error) {
                        console.warn("Invalid token:", (error as Error).message);
                    }
                }

                return {user}; // Attach user to context
            },
        })
    );

    app.listen({port: 4000}, async () => {
        console.log("Server running at http://localhost:4000/graphql");
        await sequelize.sync();
        console.log("Database connected!");
    });
};

startServer();
