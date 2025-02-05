import { gql } from "apollo-server-express";

export const typeDefs = gql`
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
  
  type User {
    id: ID!
    email: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Mutation {
    register(email: String!, password: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
  }
`;
