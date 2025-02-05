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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const server_1 = require("@apollo/server");
const schema_1 = require("./graphql/schema");
const resolvers_1 = require("./graphql/resolvers");
const models_1 = require("./models");
const dotenv_1 = __importDefault(require("dotenv"));
const express4_1 = require("@apollo/server/express4");
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const server = new server_1.ApolloServer({ typeDefs: schema_1.typeDefs, resolvers: resolvers_1.resolvers });
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    yield server.start();
    app.use('/graphql', (0, cors_1.default)(), express_1.default.json(), 
    //@ts-ignore
    (0, express4_1.expressMiddleware)(server));
    app.listen({ port: 4000 }, () => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Server running at http://localhost:4000/graphql");
        yield models_1.sequelize.sync();
        console.log("Database connected!");
    }));
});
startServer();
