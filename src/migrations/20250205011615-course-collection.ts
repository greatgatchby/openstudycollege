import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable("CourseCollections", {
      courseId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Courses", // This should match the table name in the database
          key: "id",
        },
        onDelete: "CASCADE",
        primaryKey: true,
      },
      collectionId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Collections", // This should match the table name in the database
          key: "id",
        },
        onDelete: "CASCADE",
        primaryKey: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable("CourseCollections");
  },
};
