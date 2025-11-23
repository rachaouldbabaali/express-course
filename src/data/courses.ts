// filepath: src/data/courses.ts
import { Course } from "../types/course";

export const courses: Course[] = [
  {
    id: "1",
    title: "Git & GitHub",
    slug: "git-and-github",
    description: "Master version control with Git and collaborate effectively using GitHub. Learn branching, pull requests, and professional workflows.",
    level: "Beginner",
    duration: "2-3 hours",
    prerequisites: [
      "Basic computer skills",
      "Familiarity with command line basics"
    ],
    objectives: [
      "Understand version control concepts",
      "Master Git commands and workflows",
      "Collaborate using GitHub",
      "Manage projects with branching strategies"
    ],
    skills: [
      "Version Control",
      "Branch Management",
      "Code Collaboration",
      "Pull Requests",
      "GitHub Workflows"
    ],
    category: "Development Tools",
    instructor: "John Doe",
    rating: 4.8,
    students: 1250,
    projects: 3,
    tags: ["git", "github", "version-control", "collaboration"],
    lastUpdated: "2024-01-15",
    thumbnail: "/images/git-course.jpg"
  },
  {
    id: "2",
    title: "Node & Express.js",
    slug: "node-and-express",
    description: "Build scalable backend services with Node.js and Express.js. Create REST APIs, middleware, authentication, and deploy production-ready applications.",
    level: "Intermediate",
    duration: "6-8 hours",
    prerequisites: [
      "JavaScript fundamentals",
      "Basic understanding of HTTP",
      "Async/await concepts"
    ],
    objectives: [
      "Build RESTful APIs with Express.js",
      "Implement middleware and error handling",
      "Connect to databases (MongoDB)",
      "Add authentication and security",
      "Deploy applications to production"
    ],
    skills: [
      "Backend Development",
      "REST API Design",
      "Middleware Implementation",
      "Database Integration",
      "Authentication & Security"
    ],
    category: "Backend Development",
    instructor: "Jane Smith",
    rating: 4.9,
    students: 890,
    projects: 5,
    tags: ["nodejs", "express", "backend", "api", "mongodb"],
    lastUpdated: "2024-01-10",
    thumbnail: "/images/express-course.jpg"
  },
  {
    id: "3",
    title: "React Fundamentals",
    slug: "react-fundamentals",
    description: "Learn modern React development with hooks, context, and best practices. Build interactive user interfaces with component-based architecture.",
    level: "Beginner",
    duration: "4-5 hours",
    prerequisites: [
      "HTML & CSS basics",
      "JavaScript ES6+ features",
      "Basic programming concepts"
    ],
    objectives: [
      "Understand React components and JSX",
      "Master React hooks (useState, useEffect)",
      "Manage state and props effectively",
      "Build forms and handle events",
      "Create reusable component libraries"
    ],
    skills: [
      "React Components",
      "Hooks & State Management",
      "Event Handling",
      "Component Composition",
      "Modern React Patterns"
    ],
    category: "Frontend Development",
    instructor: "Mike Johnson",
    rating: 4.7,
    students: 2100,
    projects: 4,
    tags: ["react", "frontend", "javascript", "ui", "components"],
    lastUpdated: "2024-01-12",
    thumbnail: "/images/react-course.jpg"
  }
];

export default courses;