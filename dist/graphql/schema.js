"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
  type Course {
    id: ID!
    title: String!
    description: String!
    duration: String!
    outcome: String!
    collections: [Collection]
  }

  type Collection {
    id: ID!
    name: String!
    courses: [Course]
  }

  type Query {
    courses(limit: Int, sortOrder: SortOrder): [Course]
    course(id: ID!): Course
    collections: [Collection]
    collection(id: ID!): Collection
  }

  type Mutation {
    addCourse(input: CourseInput!): Course
    updateCourse(id: ID!, input: CourseInput!): Course
    deleteCourse(id: ID!): Boolean
  }

  input CourseInput {
    title: String!
    description: String!
    duration: String!
    outcome: String!
  }

  enum SortOrder {
    ASC
    DESC
  }
`;
