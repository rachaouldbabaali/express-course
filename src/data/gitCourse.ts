// filepath: src/data/gitCourse.ts
import { CourseContent } from "../types/course";

export const gitCourse: CourseContent = {
  slug: "git-and-github",
  title: "Git & GitHub",
  description:
    "Master version control with Git and collaborate effectively using GitHub. Learn branching, pull requests, and professional workflows.",
  level: "Beginner",
  duration: "2-3 hours",
  prerequisites: [
    "Basic computer skills",
    "Familiarity with command line basics",
  ],
  skillsGained: [
    "Version Control",
    "Branch Management",
    "Code Collaboration",
    "Pull Requests",
    "GitHub Workflows",
  ],
  totalModules: 3,
  totalLessons: 8,
  totalExercises: 4,
  totalProjects: 1,
  welcomeMessage: {
    title: "Welcome to Git & GitHub Mastery",
    description:
      "Learn professional version control skills that every developer needs. From basic commits to advanced collaboration workflows.",
  },
  completionCertificate: true,
  sections: [
    {
      id: "getting-started",
      title: "Getting Started with Git",
      duration: "45 minutes",
      objectives: [
        "Understand version control concepts",
        "Install and configure Git",
        "Create your first repository",
        "Make and track changes",
      ],
      lessons: [
        {
          id: "what-is-git",
          title: "What is Git?",
          type: "theory",
          content: {
            paragraphs: [
              "Git is a distributed version control system that helps developers track changes in their codebase, collaborate with others, and maintain project history.",
              "Unlike centralized version control systems, every developer has a complete copy of the repository with full history.",
            ],
            keyPoints: [
              "Distributed version control system",
              "Tracks changes to files over time",
              "Enables collaboration and branching",
              "Maintains complete project history",
            ],
          },
        },
        {
          id: "install-setup",
          title: "Installation & Setup",
          type: "practical",
          content: {
            steps: [
              {
                text: "Install Git on your system:",
                code: "# Windows: Download from git-scm.com\n# macOS: brew install git\n# Linux: sudo apt install git",
              },
              {
                text: "Verify installation:",
                code: "git --version",
              },
              {
                text: "Configure your identity:",
                code: 'git config --global user.name "Your Name"\ngit config --global user.email "your.email@example.com"',
              },
            ],
          },
        },
      ],
      exercises: [
        {
          id: "ex-git-1",
          title: "First Repository",
          description:
            "Create your first Git repository and make initial commits",
          task: "1. Create a new directory\n2. Initialize a Git repository\n3. Create a README.md file\n4. Make your first commit\n5. Check the commit history",
          difficulty: "beginner",
          estimatedTime: "15 minutes",
          solution: `mkdir my-first-repo\ncd my-first-repo\ngit init\necho "# My Project" > README.md\ngit add .\ngit commit -m "Initial commit"\ngit log`,
        },
      ],
    },
    {
      id: "basic-commands",
      title: "Essential Git Commands",
      duration: "1 hour",
      objectives: [
        "Master basic Git workflow",
        "Understand staging and committing",
        "Learn to view history and changes",
        "Handle file modifications",
      ],
      lessons: [
        {
          id: "basic-workflow",
          title: "Basic Git Workflow",
          type: "theory",
          content: {
            paragraphs: [
              "Git follows a simple three-stage workflow: working directory → staging area → repository. Understanding this flow is crucial for effective version control.",
            ],
            keyPoints: [
              "Working directory: where you make changes",
              "Staging area: where you prepare changes for commit",
              "Repository: where committed changes are stored",
            ],
          },
        },
        {
          id: "essential-commands",
          title: "Essential Commands",
          type: "example",
          content: {
            description: "Daily Git commands you'll use constantly",
            code: `# Check status of files\ngit status\n\n# Add files to staging area\ngit add filename.txt\ngit add .  # all files\n\n# Commit changes\ngit commit -m "Descriptive commit message"\n\n# View history\ngit log\ngit log --oneline\n\n# See changes\ngit diff\ngit diff --staged`,
          },
        },
      ],
      exercises: [
        {
          id: "ex-git-2",
          title: "Practice Workflow",
          description:
            "Practice the complete Git workflow with multiple changes",
          task: "1. Create multiple files\n2. Make changes to files\n3. Stage specific files\n4. Commit changes with meaningful messages\n5. View your commit history",
          difficulty: "beginner",
          estimatedTime: "20 minutes",
        },
      ],
      quiz: [
        {
          question: "What does 'git add' do?",
          options: [
            "Commits changes to repository",
            "Adds files to staging area",
            "Creates a new branch",
            "Pushes changes to remote",
          ],
          correct: 1,
          explanation:
            "git add moves changes from working directory to staging area, preparing them for commit.",
        },
      ],
    },
    {
      id: "branching-workflows",
      title: "Branching & Collaboration",
      duration: "45 minutes",
      objectives: [
        "Understand branching strategies",
        "Create and merge branches",
        "Learn GitHub collaboration",
        "Handle pull requests",
      ],
      lessons: [
        {
          id: "git-branching",
          title: "Git Branching",
          type: "theory",
          content: {
            paragraphs: [
              "Branching allows you to work on different features, fixes, or experiments independently without affecting the main codebase.",
            ],
          },
        },
        {
          id: "github-collab",
          title: "GitHub Collaboration",
          type: "practical",
          content: {
            steps: [
              {
                text: "Create a GitHub repository:",
                code: "# On GitHub.com, click New Repository",
              },
              {
                text: "Connect local repo to GitHub:",
                code: "git remote add origin https://github.com/username/repo.git\ngit push -u origin main",
              },
            ],
          },
        },
      ],
      finalProject: {
        title: "Complete GitHub Workflow",
        description:
          "Implement a complete feature using Git and GitHub collaboration workflow",
        requirements: [
          "Create a new repository on GitHub",
          "Clone repository locally",
          "Create a feature branch",
          "Make changes and commit",
          "Push branch and create pull request",
          "Merge pull request",
        ],
        learningOutcomes: [
          "Full understanding of Git workflow",
          "GitHub collaboration skills",
          "Branch management",
          "Code review process",
        ],
      },
    },
  ],
};

export default gitCourse;
