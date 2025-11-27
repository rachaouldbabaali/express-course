// filepath: src/data/userProgress.ts
import { UserProgress } from "../types/course";

// Example user progress records (per-user). This is useful for seeding or tests.
export const sampleUserProgress: UserProgress[] = [
  {
    userId: "user-123",
    // use course slug (not numeric id) to align with routing and storage keys
    courseId: "node-and-express",
    completedModules: ["module-1", "module-2"],
    completedLessons: [
    ],
    completedExercises: ["ex-1-1", "ex-2-1"],
    quizScores: {
      "module-1": 0,
      "module-2": 0,
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
        content:
          "Remember that app.listen() starts the server on specified port",
        createdAt: "2024-01-16T11:00:00Z",
      },
    ],
  },
];

// A convenience map of course -> module progress percentages (used by Sidebar mock)
export const userProgressMap: Record<string, Record<string, number>> = {
  "git-and-github": {
  },
  "node-and-express": {
  },
};

export default sampleUserProgress;
