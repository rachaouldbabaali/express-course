// filepath: src/data/userProgress.ts
import { UserProgress } from "../types/course";

export const sampleUserProgress: UserProgress[] = [
  {
    userId: "user-123",
    courseId: "2",
    completedModules: ["module-1", "module-2"],
    completedLessons: [
      "what-is-node",
      "setup-environment",
      "first-server",
      "express-intro",
      "basic-express-app"
    ],
    completedExercises: ["ex-1-1", "ex-2-1"],
    quizScores: {
      "module-1": 100,
      "module-2": 80
    },
    currentModule: "module-3",
    currentLesson: "middleware-concept",
    totalTimeSpent: 145,
    lastAccessed: "2024-01-20T10:30:00Z",
    startedAt: "2024-01-15T09:00:00Z",
    notes: [
      {
        id: "note-1",
        lessonId: "basic-express-app",
        content: "Remember that app.listen() starts the server on specified port",
        createdAt: "2024-01-16T11:00:00Z"
      }
    ]
  }
];