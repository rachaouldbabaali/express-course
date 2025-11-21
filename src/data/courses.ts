import { Course } from "../types/course";

export const courses: Course[] = [
  {
    id: "1",
    title: "Git & GitHub",
    slug: "git-and-github",
    description:
      "Learn version control with Git and collaborate using GitHub (branches, PRs, workflows).",
    level: "Beginner",
    duration: "2 hours",
  },
  {
    id: "2",
    title: "Node & Express.js",
    slug: "node-and-express",
    description:
      "Build backend services with Node.js and Express.js, create REST APIs and middleware.",
    level: "Intermediate",
    duration: "4 hours",
  },
];
