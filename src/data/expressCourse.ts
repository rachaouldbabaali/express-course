// filepath: src/data/expressCourse.ts
export const expressCourse = {
  slug: "node-and-express",
  title: "Node & Express.js",
  description: "Build backend services with Node.js and Express.js — create APIs, middleware and serve static files.",
  level: "Beginner",
  duration: "6-8 hours",
  prerequisites: ["Basic JavaScript knowledge", "Understanding of HTTP basics"],
  sections: [
    {
      id: "module-1",
      title: "Module 1: Node.js Fundamentals & Setup",
      duration: "45 minutes",
      objectives: [
        "Understand Node.js runtime environment",
        "Set up development environment",
        "Create first Node.js server"
      ],
      lessons: [
        {
          id: "what-is-node",
          title: "What is Node.js?",
          type: "theory",
          content: {
            paragraphs: [
              "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows you to run JavaScript on the server.",
              "Key features: Event-driven, non-blocking I/O model, perfect for data-intensive real-time applications."
            ],
            keyPoints: [
              "Uses Google's V8 JavaScript engine",
              "Single-threaded with event loop",
              "Perfect for I/O-heavy applications"
            ]
          }
        },
        {
          id: "setup-environment",
          title: "Environment Setup",
          type: "practical",
          content: {
            steps: [
              {
                text: "Verify Node.js installation:",
                code: "node --version\nnpm --version"
              },
              {
                text: "Create project directory:",
                code: "mkdir my-first-app\ncd my-first-app"
              },
              {
                text: "Initialize npm project:",
                code: "npm init -y"
              }
            ]
          }
        },
        {
          id: "first-server",
          title: "First HTTP Server",
          type: "example",
          content: {
            description: "Create a basic HTTP server using Node.js built-in http module",
            code: `const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});`
          }
        }
      ],
      exercises: [
        {
          id: "ex-1-1",
          title: "Simple Server Modification",
          description: "Modify the server to return different responses based on the URL",
          task: "Create a server that returns:\n- 'Home Page' for '/'\n- 'About Page' for '/about'\n- '404 Not Found' for other routes",
          hint: "Check req.url property",
          solution: `const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Home Page');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('About Page');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});`
        }
      ],
      quiz: [
        {
          question: "What is Node.js?",
          options: [
            "A JavaScript framework for frontend development",
            "A runtime environment for executing JavaScript on the server",
            "A database management system",
            "A CSS preprocessor"
          ],
          correct: 1
        }
      ]
    },

    {
      id: "module-2",
      title: "Module 2: Express.js Fundamentals",
      duration: "1 hour",
      objectives: [
        "Understand Express.js framework",
        "Create basic Express application",
        "Handle different HTTP methods"
      ],
      lessons: [
        {
          id: "express-intro",
          title: "Introduction to Express.js",
          type: "theory",
          content: {
            paragraphs: [
              "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
              "It simplifies the process of building web applications by providing utilities for routing, middleware, template engines, and more."
            ]
          }
        },
        {
          id: "basic-express-app",
          title: "Basic Express Application",
          type: "example",
          content: {
            description: "Create a minimal Express application",
            steps: [
              {
                text: "Install Express:",
                code: "npm install express"
              }
            ],
            code: `const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});`
          }
        },
        {
          id: "http-methods",
          title: "Handling HTTP Methods",
          type: "example",
          content: {
            description: "Handle different HTTP methods (GET, POST, PUT, DELETE)",
            code: `app.get('/users', (req, res) => {
  res.send('GET: List all users');
});

app.post('/users', (req, res) => {
  res.send('POST: Create a user');
});

app.put('/users/:id', (req, res) => {
  res.send(\`PUT: Update user \${req.params.id}\`);
});

app.delete('/users/:id', (req, res) => {
  res.send(\`DELETE: Delete user \${req.params.id}\`);
});`
          }
        }
      ],
      exercises: [
        {
          id: "ex-2-1",
          title: "RESTful Bookstore API",
          description: "Create a simple bookstore API with basic CRUD operations",
          task: `Implement these endpoints:
GET /books - return list of books
POST /books - add a new book
GET /books/:id - get a specific book
PUT /books/:id - update a book
DELETE /books/:id - delete a book

Use an in-memory array to store books.`,
          hint: "Start with defining your books array and implement each route",
          solution: `const express = require('express');
const app = express();
app.use(express.json());

let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
];

app.get('/books', (req, res) => {
  res.json(books);
});

app.post('/books', (req, res) => {
  const book = { id: Date.now(), ...req.body };
  books.push(book);
  res.status(201).json(book);
});

app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
});

app.put('/books/:id', (req, res) => {
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Book not found' });
  books[index] = { ...books[index], ...req.body };
  res.json(books[index]);
});

app.delete('/books/:id', (req, res) => {
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Book not found' });
  books.splice(index, 1);
  res.status(204).send();
});`
        }
      ]
    },

    {
      id: "module-3",
      title: "Module 3: Middleware & Request Processing",
      duration: "1 hour 15 minutes",
      objectives: [
        "Understand Express middleware concept",
        "Create custom middleware",
        "Use built-in and third-party middleware"
      ],
      lessons: [
        {
          id: "middleware-concept",
          title: "What is Middleware?",
          type: "theory",
          content: {
            paragraphs: [
              "Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application's request-response cycle.",
              "Middleware can execute any code, make changes to the request and response objects, end the request-response cycle, or call the next middleware."
            ],
            keyPoints: [
              "Executes in the order they are defined",
              "Can modify req and res objects",
              "Must call next() to pass control to next middleware"
            ]
          }
        },
        {
          id: "custom-middleware",
          title: "Creating Custom Middleware",
          type: "example",
          content: {
            description: "Create logging and authentication middleware",
            code: `// Logging middleware
app.use((req, res, next) => {
  console.log(\`\${new Date().toISOString()} - \${req.method} \${req.url}\`);
  next();
});

// Authentication middleware (simplified)
const requireAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token === 'secret-token') {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

// Using the middleware
app.get('/protected', requireAuth, (req, res) => {
  res.json({ message: 'This is protected data' });
});`
          }
        },
        {
          id: "builtin-middleware",
          title: "Built-in Middleware",
          type: "example",
          content: {
            description: "Using Express built-in middleware",
            code: `// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Example of using multiple middleware
app.use(express.json());
app.use(express.static('public'));
app.use(requireAuth); // Our custom middleware`
          }
        }
      ],
      exercises: [
        {
          id: "ex-3-1",
          title: "Request Logger Middleware",
          description: "Create a detailed request logger",
          task: `Create middleware that logs:
- Timestamp
- HTTP method
- URL
- User-Agent header
- Response time

Format: "2023-10-01T10:00:00.000Z - GET /api/users - Chrome - 15ms"`,
          solution: `app.use((req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    const userAgent = req.get('User-Agent') || 'Unknown';
    console.log(\`\${new Date().toISOString()} - \${req.method} \${req.url} - \${userAgent} - \${duration}ms\`);
  });
  
  next();
});`
        },
        {
          id: "ex-3-2",
          title: "Error Handling Middleware",
          description: "Create global error handling middleware",
          task: "Create error handling middleware that catches all errors and returns consistent error responses",
          solution: `// Error handling middleware (must be last)
app.use((err, req, res, next) => {
  console.error(err.stack);
  
  // Check if it's a validation error
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      error: 'Validation Error',
      details: err.message
    });
  }
  
  // Default error
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});`
        }
      ]
    },

    {
      id: "module-4",
      title: "Module 4: Routing & Route Parameters",
      duration: "1 hour 30 minutes",
      objectives: [
        "Organize routes with Express Router",
        "Handle route parameters and query strings",
        "Implement route validation"
      ],
      lessons: [
        {
          id: "express-router",
          title: "Using Express Router",
          type: "example",
          content: {
            description: "Organize routes into separate modules",
            code: `// routes/users.js
const express = require('express');
const router = express.Router();

let users = [];

router.get('/', (req, res) => {
  res.json(users);
});

router.post('/', (req, res) => {
  const user = { id: Date.now(), ...req.body };
  users.push(user);
  res.status(201).json(user);
});

module.exports = router;

// In main app.js
const userRoutes = require('./routes/users');
app.use('/users', userRoutes);`
          }
        },
        {
          id: "route-parameters",
          title: "Route Parameters & Query Strings",
          type: "example",
          content: {
            description: "Working with dynamic routes and query parameters",
            code: `// Route parameters
app.get('/users/:userId/posts/:postId', (req, res) => {
  res.json({
    userId: req.params.userId,
    postId: req.params.postId
  });
});

// Query parameters
app.get('/search', (req, res) => {
  const { q, page = 1, limit = 10 } = req.query;
  res.json({
    query: q,
    page: parseInt(page),
    limit: parseInt(limit),
    results: [] // your search results here
  });
});

// Optional parameters and regex
app.get('/products/:category?', (req, res) => {
  const category = req.params.category || 'all';
  res.json({ category });
});`
          }
        },
        {
          id: "route-validation",
          title: "Route Validation",
          type: "example",
          content: {
            description: "Validate route parameters and request data",
            code: `// Validation middleware
const validateUser = (req, res, next) => {
  const { name, email, age } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  
  if (age && (age < 0 || age > 150)) {
    return res.status(400).json({ error: 'Age must be between 0 and 150' });
  }
  
  next();
};

// Using validation
app.post('/users', validateUser, (req, res) => {
  // If we reach here, validation passed
  const user = { id: Date.now(), ...req.body };
  users.push(user);
  res.status(201).json(user);
});`
          }
        }
      ],
      exercises: [
        {
          id: "ex-4-1",
          title: "Blog API with Router",
          description: "Create a blog API with organized routing",
          task: `Create a blog system with:
- Separate routers for posts and comments
- Nested routes: /posts/:postId/comments
- Query parameters for filtering and pagination
- Input validation for all routes`,
          solution: `// routes/posts.js
const express = require('express');
const router = express.Router();

let posts = [];
let comments = [];

// Posts routes
router.get('/', (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  
  const results = posts.slice(startIndex, endIndex);
  res.json({
    posts: results,
    currentPage: parseInt(page),
    totalPages: Math.ceil(posts.length / limit)
  });
});

router.post('/', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }
  
  const post = { id: Date.now(), title, content, createdAt: new Date() };
  posts.push(post);
  res.status(201).json(post);
});

// Comments routes nested under posts
router.get('/:postId/comments', (req, res) => {
  const postComments = comments.filter(c => c.postId === parseInt(req.params.postId));
  res.json(postComments);
});

router.post('/:postId/comments', (req, res) => {
  const { content, author } = req.body;
  if (!content) {
    return res.status(400).json({ error: 'Content is required' });
  }
  
  const comment = {
    id: Date.now(),
    postId: parseInt(req.params.postId),
    content,
    author: author || 'Anonymous',
    createdAt: new Date()
  };
  
  comments.push(comment);
  res.status(201).json(comment);
});

module.exports = router;`
        }
      ]
    },

    {
      id: "module-5",
      title: "Module 5: Template Engines & Views",
      duration: "1 hour",
      objectives: [
        "Understand template engines",
        "Set up EJS template engine",
        "Create dynamic views"
      ],
      lessons: [
        {
          id: "template-engines",
          title: "Introduction to Template Engines",
          type: "theory",
          content: {
            paragraphs: [
              "Template engines enable you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client.",
              "Popular template engines: EJS, Pug, Handlebars"
            ]
          }
        },
        {
          id: "ejs-setup",
          title: "Setting up EJS",
          type: "example",
          content: {
            description: "Configure EJS as template engine",
            steps: [
              {
                text: "Install EJS:",
                code: "npm install ejs"
              }
            ],
            code: `// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', './views'); // folder where templates are stored

// Basic route rendering a template
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home Page',
    message: 'Welcome to our website!',
    users: ['Alice', 'Bob', 'Charlie']
  });
});`
          }
        },
        {
          id: "ejs-templates",
          title: "Creating EJS Templates",
          type: "example",
          content: {
            description: "Create dynamic templates with EJS",
            code: `<!-- views/index.ejs -->
<!DOCTYPE html>
<html>
<head>
    <title><%= title %></title>
</head>
<body>
    <h1><%= message %></h1>
    
    <!-- Loop through users -->
    <ul>
        <% users.forEach(user => { %>
            <li><%= user %></li>
        <% }); %>
    </ul>
    
    <!-- Conditionals -->
    <% if (users.length > 0) { %>
        <p>There are <%= users.length %> users</p>
    <% } else { %>
        <p>No users found</p>
    <% } %>
    
    <!-- Include partials -->
    <%- include('partials/footer') %>
</body>
</html>`
          }
        }
      ],
      exercises: [
        {
          id: "ex-5-1",
          title: "Blog Frontend with EJS",
          description: "Create a frontend for the blog using EJS templates",
          task: `Create EJS templates for:
- Homepage showing recent posts
- Single post page with comments
- Layout template with header and footer
- Partial for post preview

Use the blog API from previous module as data source.`,
          solution: `<!-- views/layout.ejs -->
<!DOCTYPE html>
<html>
<head>
    <title>My Blog - <%= title %></title>
    <link rel="stylesheet" href="/styles.css">
</head>
<body>
    <header>
        <h1>My Awesome Blog</h1>
        <nav>
            <a href="/">Home</a>
        </nav>
    </header>
    <main>
        <%- body %>
    </main>
    <footer>
        <p>&copy; 2024 My Blog</p>
    </footer>
</body>
</html>

<!-- views/index.ejs -->
<% layout('layout') -%>

<h2>Recent Posts</h2>
<% if (posts.length > 0) { %>
    <div class="posts">
        <% posts.forEach(post => { %>
            <article class="post">
                <h3><a href="/posts/<%= post.id %>"><%= post.title %></a></h3>
                <p><%= post.content.substring(0, 100) %>...</p>
                <time><%= new Date(post.createdAt).toLocaleDateString() %></time>
            </article>
        <% }); %>
    </div>
<% } else { %>
    <p>No posts yet. Be the first to write one!</p>
<% } %>`
        }
      ]
    },

    {
      id: "module-6",
      title: "Module 6: Database Integration",
      duration: "2 hours",
      objectives: [
        "Connect to MongoDB with Mongoose",
        "Define schemas and models",
        "Perform CRUD operations"
      ],
      lessons: [
        {
          id: "mongodb-setup",
          title: "MongoDB & Mongoose Setup",
          type: "practical",
          content: {
            steps: [
              {
                text: "Install Mongoose:",
                code: "npm install mongoose"
              },
              {
                text: "Connect to MongoDB:",
                code: `const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});`
              }
            ]
          }
        },
        {
          id: "mongoose-schemas",
          title: "Defining Schemas and Models",
          type: "example",
          content: {
            description: "Create Mongoose schemas and models",
            code: `const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  age: {
    type: Number,
    min: 0,
    max: 120
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);`
          }
        },
        {
          id: "crud-operations",
          title: "CRUD Operations with Mongoose",
          type: "example",
          content: {
            description: "Perform Create, Read, Update, Delete operations",
            code: `// Create
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read one
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update
app.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete
app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`
          }
        }
      ],
      exercises: [
        {
          id: "ex-6-1",
          title: "Task Manager with MongoDB",
          description: "Create a full task management API with MongoDB",
          task: `Build a task manager with:
- Task model with title, description, status, dueDate, priority
- CRUD operations for tasks
- Filtering by status and priority
- Sorting by due date and priority
- Input validation with Mongoose`,
          solution: `const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: { 
    type: String, 
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  dueDate: Date,
  createdAt: { type: Date, default: Date.now }
});

const Task = mongoose.model('Task', taskSchema);

// Get tasks with filtering and sorting
app.get('/tasks', async (req, res) => {
  try {
    const { status, priority, sortBy = 'createdAt' } = req.query;
    const filter = {};
    
    if (status) filter.status = status;
    if (priority) filter.priority = priority;
    
    const tasks = await Task.find(filter).sort({ [sortBy]: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`
        }
      ]
    },

    {
      id: "module-7",
      title: "Module 7: Authentication & Security",
      duration: "1 hour 30 minutes",
      objectives: [
        "Implement user authentication",
        "Use JWT for stateless authentication",
        "Add security best practices"
      ],
      lessons: [
        {
          id: "jwt-authentication",
          title: "JWT Authentication",
          type: "example",
          content: {
            steps: [
              {
                text: "Install JWT package:",
                code: "npm install jsonwebtoken bcryptjs"
              }
            ],
            code: `const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const JWT_SECRET = 'your-secret-key';

// User registration
app.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);
    
    // Create user
    const user = new User({
      name,
      email,
      password: hashedPassword
    });
    
    await user.save();
    
    // Generate token
    const token = jwt.sign(
      { userId: user._id },
      JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    res.status(201).json({ token, user: { id: user._id, name, email } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// User login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    
    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    
    // Generate token
    const token = jwt.sign(
      { userId: user._id },
      JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    res.json({ token, user: { id: user._id, name: user.name, email } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`
          }
        },
        {
          id: "auth-middleware",
          title: "Authentication Middleware",
          type: "example",
          content: {
            description: "Create middleware to protect routes",
            code: `const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ error: 'No token, authorization denied' });
    }
    
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId).select('-password');
    
    if (!user) {
      return res.status(401).json({ error: 'Token is not valid' });
    }
    
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token is not valid' });
  }
};

// Protected route
app.get('/profile', authMiddleware, (req, res) => {
  res.json({ user: req.user });
});`
          }
        }
      ],
      exercises: [
        {
          id: "ex-7-1",
          title: "Secure Blog API",
          description: "Add authentication to the blog API",
          task: `Add authentication to your blog:
- Users must register/login to create posts
- Users can only edit/delete their own posts
- Add author information to posts
- Implement password reset functionality`,
          solution: `// Add author to post schema
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

// Create post (protected)
app.post('/posts', authMiddleware, async (req, res) => {
  try {
    const post = new Post({
      ...req.body,
      author: req.user._id
    });
    
    await post.save();
    await post.populate('author', 'name email');
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update post (only author)
app.put('/posts/:id', authMiddleware, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    if (post.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: 'Not authorized to update this post' });
    }
    
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate('author', 'name email');
    
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});`
        }
      ]
    },

    {
      id: "module-8",
      title: "Module 8: Deployment & Best Practices",
      duration: "1 hour",
      objectives: [
        "Prepare app for production",
        "Environment configuration",
        "Deploy to cloud platform"
      ],
      lessons: [
        {
          id: "environment-config",
          title: "Environment Configuration",
          type: "example",
          content: {
            description: "Use environment variables for configuration",
            code: `// Install dotenv for development
npm install dotenv

// Create .env file
JWT_SECRET=your-super-secret-key
MONGODB_URI=mongodb://localhost:27017/your-database
PORT=3000
NODE_ENV=development

// In your app
require('dotenv').config(); // at top of file

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET;

// Use in your app
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});`
          }
        },
        {
          id: "production-best-practices",
          title: "Production Best Practices",
          type: "theory",
          content: {
            keyPoints: [
              "Use environment variables for configuration",
              "Enable CORS for frontend communication",
              "Use helmet for security headers",
              "Implement rate limiting",
              "Add proper logging",
              "Use process managers like PM2"
            ]
          }
        },
        {
          id: "cors-helmet",
          title: "CORS & Security Headers",
          type: "example",
          content: {
            steps: [
              {
                text: "Install security packages:",
                code: "npm install cors helmet"
              }
            ],
            code: `const cors = require('cors');
const helmet = require('helmet');

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));

// Rate limiting
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);`
          }
        }
      ],
      exercises: [
        {
          id: "ex-8-1",
          title: "Production Ready App",
          description: "Prepare your Express app for production",
          task: `Make your app production ready:
1. Add environment configuration
2. Implement security middleware
3. Add error handling
4. Create production build script
5. Create PM2 ecosystem file`,
          solution: `// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'my-express-app',
    script: './index.js',
    instances: 'max',
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    }
  }]
};

// package.json scripts
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js",
  "production": "pm2 start ecosystem.config.js --env production"
}

// Production error handling
app.use((err, req, res, next) => {
  // Don't leak error details in production
  if (process.env.NODE_ENV === 'production') {
    return res.status(500).json({
      error: 'Internal Server Error'
    });
  }
  
  // Detailed error in development
  res.status(500).json({
    error: err.message,
    stack: err.stack
  });
});`
        }
      ],
      finalProject: {
        title: "Build a Complete Blog Platform",
        description: "Combine all modules to build a full-stack blog application",
        requirements: [
          "User authentication and authorization",
          "CRUD operations for blog posts and comments",
          "MongoDB database with proper schemas",
          "RESTful API with proper error handling",
          "EJS templates for frontend",
          "Production-ready configuration",
          "Security best practices implemented"
        ],
        bonus: [
          "Add file upload for post images",
          "Implement search functionality",
          "Add pagination for posts",
          "Create admin dashboard",
          "Add social media sharing"
        ]
      }
    }
  ]
};

export default expressCourse;