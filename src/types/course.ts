// filepath: src/types/course.ts
export type Course = {
  id: string;
  title: string;
  slug: string;
  description: string;
  level: string;
  duration: string;
  prerequisites?: string[];
  objectives?: string[];
  skills?: string[];
  thumbnail?: string;
  category?: string;
  lastUpdated?: string;
  instructor?: string;
  rating?: number;
  students?: number;
  projects?: number;
  tags?: string[];
};

export type Lesson = {
  id: string;
  title: string;
  type: 'theory' | 'practical' | 'example' | 'exercise' | 'quiz';
  duration?: string;
  content?: {
    paragraphs?: string[];
    keyPoints?: string[];
    steps?: Array<{
      text: string;
      code?: string;
      os?: string;
    }>;
    code?: string;
    description?: string;
  };
};

export type Exercise = {
  id: string;
  title: string;
  description: string;
  task: string;
  hint?: string;
  solution?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime?: string;
};

export type QuizQuestion = {
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
};

export type Project = {
  title: string;
  description: string;
  requirements: string[];
  bonus?: string[];
  starterCode?: string;
  solution?: string;
  learningOutcomes?: string[];
};

export type Module = {
  id: string;
  title: string;
  description?: string;
  duration: string;
  objectives: string[];
  lessons: Lesson[];
  exercises?: Exercise[];
  quiz?: QuizQuestion[];
  finalProject?: Project;
  prerequisites?: string[];
  resources?: Array<{
    title: string;
    url: string;
    type: 'documentation' | 'video' | 'article' | 'tool';
  }>;
};

export type CourseContent = {
  slug: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  prerequisites?: string[];
  skillsGained?: string[];
  totalModules: number;
  totalLessons: number;
  totalExercises: number;
  totalProjects: number;
  sections: Module[];
  welcomeMessage?: {
    title: string;
    description: string;
    videoUrl?: string;
  };
  completionCertificate?: boolean;
};

// User progress types
export type UserProgress = {
  userId: string;
  courseId: string;
  completedModules: string[];
  completedLessons: string[];
  completedExercises: string[];
  quizScores: {
    [quizId: string]: number;
  };
  currentModule?: string;
  currentLesson?: string;
  totalTimeSpent: number; // in minutes
  lastAccessed: string;
  startedAt: string;
  completedAt?: string;
  notes?: Array<{
    id: string;
    lessonId: string;
    content: string;
    createdAt: string;
  }>;
};

// Course review types
export type CourseReview = {
  id: string;
  userId: string;
  courseId: string;
  rating: number;
  comment: string;
  createdAt: string;
  helpful: number;
};

// Course completion certificate
export type Certificate = {
  id: string;
  userId: string;
  courseId: string;
  issuedAt: string;
  certificateUrl: string;
  verificationCode: string;
};