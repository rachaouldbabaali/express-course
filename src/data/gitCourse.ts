export const gitCourse = {
  slug: "git-and-github",
  title: "Git & GitHub",
  description:
    "Learn version control with Git and collaborate using GitHub (branches, PRs, workflows).",
  sections: [
    {
      id: "installations",
      title: "Before we begin — Installations",
      paragraphs: [
        "We'll use Git and GitHub for version control and collaboration. You'll also need Node.js and npm to run examples and tooling.",
      ],
      subsections: [
        {
          id: "git",
          title: "1) Install Git (and Git Bash on Windows)",
          description: "Commands / steps per OS:",
          steps: [
            {
              os: "Windows",
              text: "Download and install Git for Windows from the official site — Git Bash is included.",
            },
            {
              os: "macOS (Homebrew)",
              code: "brew install git",
            },
            {
              os: "Linux (Debian/Ubuntu)",
              code: "sudo apt update && sudo apt install -y git",
            },
          ],
          verify: "git --version",
        },
        {
          id: "node",
          title: "2) Install Node.js and npm",
          description:
            "Recommended: use nvm (Node Version Manager) so you can install LTS and switch versions easily.",
          steps: [
            {
              text: "Install nvm (macOS / Linux):",
              code: "curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash",
            },
            {
              text: "Then install Node LTS:",
              code: "nvm install --lts\nnvm use --lts",
            },
            {
              text: "Windows: use the official Node installer from nodejs.org or use nvm-windows.",
            },
          ],
          verify: "node -v\nnpm -v",
        },
        {
          id: "identity",
          title: "3) Set up Git identity",
          description:
            "Configure your name and email (these will appear in commits):",
          code: 'git config --global user.name "Your Name"\ngit config --global user.email "you@example.com"',
        },
        {
          id: "github",
          title: "4) Create a GitHub account (if you don't have one)",
          description:
            "Sign up at github.com and optionally set up SSH keys (recommended):",
          code: 'ssh-keygen -t ed25519 -C "you@example.com"\n# then add ~/.ssh/id_ed25519.pub to your GitHub account',
        },
      ],
    },
    {
      id: "checklist",
      title: "Quick start checklist",
      items: [
        "Git installed and `git --version` works",
        "Node & npm installed and `node -v`, `npm -v` return versions",
        "Git identity configured with `git config --global`",
        "GitHub account ready and SSH key added (optional but recommended)",
      ],
    },
    {
      id: "cli-commands",
      title: "Hands-on: Command line terminal",
      paragraphs: [
        "This section covers common command-line (shell) operations and the most-used Git commands. Open your terminal (Git Bash on Windows, Terminal on macOS/Linux) and try the examples below.",
      ],
      subsections: [
        {
          id: "basic-shell",
          title: "Basic shell commands",
          description:
            "Short definitions and examples for everyday file and directory operations.",
          steps: [
            {
              text: "pwd — Print working directory (shows your current folder)",
              code: "pwd",
            },
            {
              text: "ls — List files (use -la to show hidden files and details)",
              code: "ls -la",
            },
            {
              text: "cd — Change directory (navigate into folders)",
              code: "cd path/to/folder",
            },
            {
              text: "mkdir — Create a new directory (folder)",
              code: "mkdir my-folder",
            },
            {
              text: "touch — Create an empty file or update timestamp",
              code: "touch file.txt",
            },
            { text: "rm — Remove a file (careful)", code: "rm file.txt" },
            {
              text: "rm -r or rm -rf — Remove directories recursively (dangerous)",
              code: "rm -rf my-folder",
            },
            {
              text: "cat — Print file contents to the terminal",
              code: "cat file.txt",
            },
            {
              text: "echo — Print text or write into a file",
              code: 'echo "hello" > file.txt',
            },
            {
              text: "nano / vi — Simple terminal text editors (edit files)",
              code: "nano file.txt",
            },
          ],
        },
        {
          id: "git-commands",
          title: "Common Git commands",
          description:
            "Essential Git commands you'll use every day while working with repositories.",
          steps: [
            {
              text: "git init — Initialize a new Git repository in the current folder",
              code: "git init",
            },
            {
              text: "git status — Show changed files and staging area",
              code: "git status",
            },
            {
              text: "git add — Stage files for commit (use '.' to stage all)",
              code: "git add .",
            },
            {
              text: "git commit — Record staged changes with a message",
              code: 'git commit -m "Initial commit"',
            },
            {
              text: "git log — View commit history",
              code: "git log --oneline --graph --all",
            },
            {
              text: "git branch — List branches (use to create branches)",
              code: "git branch",
            },
            {
              text: "git checkout -b <name> — Create and switch to a new branch",
              code: "git checkout -b feature-x",
            },
            {
              text: "git merge — Merge another branch into the current branch",
              code: "git merge main",
            },
            {
              text: "git clone — Copy a remote repository locally",
              code: "git clone git@github.com:username/repo.git",
            },
            {
              text: "git pull — Fetch and merge changes from remote",
              code: "git pull",
            },
            {
              text: "git push — Push local commits to a remote repository",
              code: "git push origin main",
            },
          ],
        },
      ],
    },
  ],
};

export default gitCourse;
