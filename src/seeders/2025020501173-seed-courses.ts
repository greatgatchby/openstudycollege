import { QueryInterface } from "sequelize";
import { v4 as uuidv4 } from "uuid";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert("Courses", [
      {
        id: uuidv4(),
        title: "Introduction to Programming",
        description: "Learn the basics of programming with Python.",
        duration: "6 weeks",
        outcome: "Basic programming skills",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        title: "Advanced JavaScript",
        description: "Deep dive into JavaScript and ES6+ features.",
        duration: "8 weeks",
        outcome: "Advanced JavaScript proficiency",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete("Courses", {});
  },
};
