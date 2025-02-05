# Open Study College GraphQL API

## Overview
This project is a **GraphQL API** for Open Study College, built with **Node.js, TypeScript, PostgreSQL, and Apollo Server**. It provides authentication using **JWT (JSON Web Token)** and allows users to register, log in, and retrieve course-related data.

## Tech Stack & Choices

| Technology       | Reason for Use |
|-----------------|---------------|
| **Node.js**     | Efficient, event-driven architecture, great for APIs. |
| **TypeScript**  | Enhances code reliability and maintainability. |
| **Apollo Server** | Robust GraphQL implementation with middleware support. |
| **PostgreSQL**  | Scalable, relational database for structured course data. |
| **Sequelize**   | ORM for managing database models and migrations. |
| **JWT (jsonwebtoken)** | Secure authentication mechanism. |
| **bcryptjs**    | Secure password hashing. |
| **express**     | Lightweight and fast web framework for middleware integration. |
| **cors**        | Enables cross-origin requests for frontend interaction. |

---

## Features
### **1. Authentication (JWT)**
✅ **Register & Login**
- Users can sign up and receive a JWT token.
- Passwords are securely hashed with **bcrypt**.
- Tokens are used to authenticate API requests.

✅ **Protected Routes**
- Certain queries (e.g., fetching courses) require a valid JWT.
- Token validation is handled via Apollo Server **context middleware**.

### **2. Course & Collection Management**
✅ **CRUD operations on Courses & Collections**
- Fetch all courses & collections.
- Add, update, and delete courses.
- Many-to-Many relationship between **Courses** and **Collections**.

✅ **Sorting & Filtering**
- Courses can be sorted in ascending/descending order.
- Limit query results dynamically.

---

## **Setup & Installation**

### **1. Clone the Repository**
```sh
git clone https://github.com/your-repo/graphql-jwt-api.git
cd graphql-jwt-api
```

### **2. Install Dependencies and Create Database**
```sh
npm install
npm predeploy
```

### **3. Setup Environment Variables**
Create a **.env** file:
```ini
DB_HOST=localhost
DB_USER=your_db_user
DB_PASS=your_db_password
DB_NAME=open_study_college
JWT_SECRET=your_secret_key
```

### **4. Create Database**
```sh
npm run create-db
```

### **5. Run Migrations**
```sh
npm run migrate
```

### **6. Start the Server**
```sh
npm run dev
```

🚀 The server will run at: [http://localhost:4000/graphql](http://localhost:4000/graphql)

---

## **Usage**
### **1. Register a User**
```graphql
mutation Register($email: String!, $password: String!) {
  register(email: $email, password: $password) {
    user {
      id
      email
    }
    token
  }
}
```
#### **Request Variables:**
```json
{
  "email": "test@example.com",
  "password": "password123"
}
```

### **2. Login**
```graphql
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user {
      id
      email
    }
    token
  }
}
```

### **3. Access Protected Queries**
Add your **JWT token** in **GraphQL Playground Headers**:
```json
{
  "Authorization": "Bearer YOUR_JWT_TOKEN"
}
```

Then, fetch **courses**:
```graphql
query GetCourses {
  courses {
    id
    title
    description
  }
}
```

---

## **Project Architecture**
```
├── src/
│   ├── models/            # Sequelize models (User, Course, Collection, etc.)
│   ├── migrations/        # Sequelize migration files
│   ├── graphql/           # GraphQL schema & resolvers
│   ├── utils/             # JWT authentication utilities
│   ├── scripts/           # Database setup scripts
│   ├── server.ts          # Express & Apollo Server setup
│   ├── config/            # Database config
├── package.json           # Dependencies & scripts
├── .env                   # Environment variables
└── README.md              # Documentation
```

---

## **Why These Choices?**

### ✅ **GraphQL & Apollo Server**
- Allows flexible **queries & mutations**.
- **Reduces over-fetching** compared to REST.
- Supports real-time updates with **subscriptions** (future enhancement).

### ✅ **PostgreSQL + Sequelize**
- **Structured data** makes querying & relationships efficient.
- **Sequelize ORM** simplifies database management.
- Supports **migrations** for version control.

### ✅ **JWT for Authentication**
- **Stateless** authentication (no need for sessions).
- Securely encodes user identity.
- **Scalable** for multiple microservices in the future.

### ✅ **TypeScript for Scalability**
- **Static typing** prevents runtime errors.
- Easier **refactoring & maintainability**.
- Works well with **Sequelize & Apollo Server**.

---

## **Future Improvements**
✅ **Role-based Access Control (RBAC)** for different user types.  
✅ **Rate-limiting & Logging** for enhanced security.  
✅ **Unit Tests & Integration Tests** using Jest.  
✅ **Docker Support** for containerized deployment.  

---

## **Contributing**
Feel free to fork, contribute, or open an issue! 🎉

---

## **License**
This project is licensed under the **MIT License**. 📝

