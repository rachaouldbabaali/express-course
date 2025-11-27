// filepath: src/data/expressCourse.ts
export const expressCourse = {
  slug: "node-and-express",
  title: "Node & Express.js",
  description:
    "Build backend services with Node.js and Express.js — create APIs, middleware and serve static files.",
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
        "Create first Node.js server",
      ],
      lessons: [
        {
          id: "what-is-node",
          title: "What is Node.js?",
          type: "theory",
          content: {
            paragraphs: [
              "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows you to run JavaScript on the server.",
              "Key features: Event-driven, non-blocking I/O model, perfect for data-intensive real-time applications.",
            ],
            keyPoints: [
              "Uses Google's V8 JavaScript engine",
              "Single-threaded with event loop",
              "Perfect for I/O-heavy applications",
            ],
          },
        },
        {
          id: "setup-environment",
          title: "Environment Setup",
          type: "practical",
          content: {
            steps: [
              {
                text: "Verify Node.js installation:",
                code: "node --version\nnpm --version",
              },
              {
                text: "Create project directory:",
                code: "mkdir my-first-app\ncd my-first-app",
              },
              {
                text: "Initialize npm project:",
                code: "npm init -y",
              },
            ],
          },
        },
        {
          id: "first-server",
          title: "First HTTP Server",
          type: "example",
          content: {
            description:
              "Create a basic HTTP server using Node.js built-in http module",
            code: `const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});`,
          },
        },
      ],
      exercises: [
        {
          id: "ex-1-1",
          title: "Simple Server Modification",
          description:
            "Modify the server to return different responses based on the URL",
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
});`,
        },
      ],
      quiz: [
        {
          question: "What is Node.js?",
          options: [
            "A JavaScript framework for frontend development",
            "A runtime environment for executing JavaScript on the server",
            "A database management system",
            "A CSS preprocessor",
          ],
          correct: 1,
        },
      ],
    },

    {
      id: "module-2",
      title: "Module 2: Express.js Fundamentals",
      duration: "1 hour",
      objectives: [
        "Understand Express.js framework",
        "Create basic Express application",
        "Handle different HTTP methods",
      ],
      lessons: [
        {
          id: "express-intro",
          title: "Introduction to Express.js",
          type: "theory",
          content: {
            paragraphs: [
              "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
              "It simplifies the process of building web applications by providing utilities for routing, middleware, template engines, and more.",
            ],
          },
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
                code: "npm install express",
              },
            ],
            code: `const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});`,
          },
        },
        {
          id: "http-methods",
          title: "Handling HTTP Methods",
          type: "example",
          content: {
            description:
              "Handle different HTTP methods (GET, POST, PUT, DELETE)",
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
});`,
          },
        },
      ],
      exercises: [
        {
          id: "ex-2-1",
          title: "RESTful Bookstore API",
          description:
            "Create a simple bookstore API with basic CRUD operations",
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
});`,
        },
      ],
    },

    {
      id: "module-2-5",
      title: "Module 2.5: Bookstore App Setup & Project Structure (ES modules)",
      duration: "45 minutes",
      objectives: [
        "Create a project scaffold for a small ecommerce/bookstore API",
        'Use ES modules (type: "module") in package.json',
        "Wire up app.js, server.js, routes and simple controllers with mock data",
      ],
      lessons: [
        {
          id: "bookstore-setup",
          title: "Step-by-step: Scaffold bookstore Express app (type: module)",
          type: "practical",
          content: {
            description:
              'Follow these steps to create a small bookstore API using ES modules (package.json: type = "module"). Each step shows which files to create and minimal example content.',
            code: `ecommerce-api/
├── package.json
├── server.js
└── src/
    ├── app.js
    ├── controllers/
    │   ├── productController.js
    │   └── categoryController.js
    ├── routes/
    │   ├── productRoutes.js
    │   ├── categoryRoutes.js
    │   └── index.js
    └── data/
        └── mockData.js`,
            steps: [
              {
                text: "1) Init project and set ES module type",
                code: 'npm init -y\n// open package.json and add: "type": "module"',
              },
              {
                text: "2) Install Express",
                code: "npm install express",
              },
              {
                text: "2.1) Install nodemon for development (optional but recommended)",
                code: "npm install --save-dev nodemon",
              },
              {
                text: "3) Create src/app.js — export configured Express app",
                code: `// src/app.js
import express from 'express';
import routes from './routes/index.js';

const app = express();
app.use(express.json());
app.use('/api', routes);

export default app;`,
              },
              {
                text: "4) Create server.js — import app and start server",
                code: `// server.js
import app from './src/app.js';

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running at http://localhost:\${PORT}\`);
});`,
              },
              {
                text: "5) Create mock data",
                code: `// src/data/mockData.js
export const products = [
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin', price: 29.99 },
  { id: 2, title: 'You Don\\'t Know JS', author: 'Kyle Simpson', price: 24.99 }
];

export const categories = [
  { id: 1, name: 'Programming' },
  { id: 2, name: 'Databases' }
];`,
              },
              {
                text: "6) Create simple controllers",
                code: `// src/controllers/productController.js
import { products } from '../data/mockData.js';

export const listProducts = (req, res) => {
  res.json(products);
};

export const getProduct = (req, res) => {
  const p = products.find(p => p.id === parseInt(req.params.id));
  if (!p) return res.status(404).json({ error: 'Product not found' });
  res.json(p);
};`,
              },
              {
                text: "7) Create routes and index router",
                code: `// src/routes/productRoutes.js
import express from 'express';
import { listProducts, getProduct } from '../controllers/productController.js';

const router = express.Router();
router.get('/', listProducts);
router.get('/:id', getProduct);
export default router;

// src/routes/index.js
import express from 'express';
import productRoutes from './productRoutes.js';

const router = express.Router();
router.use('/products', productRoutes);
export default router;`,
              },
              {
                text: "8) Start server npm run dev or npm start",
                code: `// To start server:
// Suggested package.json scripts (add to package.json)
// "scripts": {
//   "start": "node server.js",
//   "dev": "nodemon server.js"
// }
 npm run dev // for development with nodemon  or npm start // for production`,
              },
              {
                text: "Notes",
                code: '- Use imports/exports because package.json has "type": "module"\n- Keep controllers small and return mock data initially\n- Later replace mockData with database calls',
              },
            ],
          },
        },
      ],
      exercises: [
        {
          id: "ex-2-5-1",
          title: "Scaffold the Bookstore App",
          description:
            "Create the project scaffold above, run the server and verify GET /api/products returns mock data.",
          task: "Follow the steps in the lesson, create files, run node server.js and verify endpoint.",
        },
      ],
    },

    {
      id: "module-3",
      title: "Module 3: Middleware & Request Processing",
      duration: "2 hours",
      objectives: [
        "Understand Express middleware concept with real-world analogies",
        "Master the request-response cycle and middleware execution order",
        "Create custom middleware for various use cases",
        "Use built-in and third-party middleware effectively",
      ],
      lessons: [
        {
          id: "middleware-concept",
          title: "What is Middleware? The Car Assembly Line Analogy",
          type: "theory",
          content: {
            paragraphs: [
              "Imagine Express as a car assembly line. A request is like a chassis (car frame) moving down the line. Each station is a middleware function that can inspect, modify, or stop the chassis. The final station (your route handler) completes the car and sends it back as a response.",
              "Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application's request-response cycle. They form a chain where each middleware can execute code, modify the request/response, or end the cycle.",
            ],
            keyPoints: [
              "Each middleware is a station on the assembly line",
              "Middleware executes in the ORDER they are defined",
              "Three actions: Inspect/Modify (like req.body), Stop the Line (send response), or Pass to Next (call next())",
              "If you don't call next(), the request hangs forever",
              "The route handler is the final middleware that sends the response",
            ],
            analogy: {
              title: "The Assembly Line Metaphor",
              description: "Understand middleware through a real-world analogy",
              stages: [
                {
                  stage: "The Chassis Arrives",
                  middleware: "Request comes in",
                  action: "Initial chassis enters the line",
                },
                {
                  stage: "Station 1: Inspection",
                  middleware:
                    "app.use((req, res, next) => { console.log(req.url); next(); })",
                  action:
                    "Worker inspects the chassis (logs request details) and sends it to the next station",
                },
                {
                  stage: "Station 2: Body Assembly",
                  middleware: "express.json() - Built-in middleware",
                  action:
                    "Worker assembles the body (parses JSON) and passes it along",
                },
                {
                  stage: "Station 3: Quality Check",
                  middleware: "Authentication middleware",
                  action:
                    "Worker checks if chassis meets standards. If not, STOP (reject). Otherwise, continue",
                },
                {
                  stage: "Final Station: Installation",
                  middleware: "app.get('/', (req, res) => { res.send(...) })",
                  action:
                    "Final worker installs engine and seats (business logic) and sends finished car (response)",
                },
              ],
            },
            visualFlow: `
Request In
    |
    V
Middleware 1 (Logger) -----> Inspect request, call next()
    |
    V
Middleware 2 (JSON Parser) -> Parse body, call next()
    |
    V
Middleware 3 (Auth Check) --> Verify user, call next() or STOP
    |
    V
Route Handler (Final Station) -> Process & SEND RESPONSE
    |
    V
Response Out to Client
        `,
          },
        },
        {
          id: "three-actions",
          title: "The Three Actions of Middleware",
          type: "example",
          content: {
            description: "Understanding what middleware can do",
            paragraphs: [
              "Middleware can inspect/modify requests, stop the request cycle, or pass control to the next middleware. Full code examples are available in the subsections below.",
            ],
            code: `// See subsections for three detailed examples: Inspect/Modify, Stop the Line, Pass Control`,
            subsections: [
              {
                title:
                  "Action 1: Inspect & Modify (The Assembly Worker Inspects)",
                description:
                  "Check or modify the request/response without stopping",
                code: `// Logging middleware - inspects the request
app.use((req, res, next) => {
  console.log(\`Request: \${req.method} \${req.url}\`);
  console.log(\`Headers: \${JSON.stringify(req.headers)}\`);
  
  // Add custom data to the request object
  req.startTime = Date.now();
  req.customData = 'some value';
  
  next(); // Pass to the next middleware
});

// Use the added data in route handler
app.get('/', (req, res) => {
  console.log(\`Route took \${Date.now() - req.startTime}ms\`);
  res.send('Hello');
});`,
              },
              {
                title: "Action 2: Stop the Line (The Assembly Worker Rejects)",
                description: "End the request immediately with a response",
                code: `// Authentication middleware - STOPS if user not logged in
const requireAuth = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (token === 'secret-token') {
    next(); // User is valid, continue
  } else {
    // STOP HERE - don't call next()
    res.status(401).json({ error: 'Unauthorized' });
  }
};

// Using the middleware
app.get('/protected', requireAuth, (req, res) => {
  res.json({ message: 'This data is only for authenticated users' });
});`,
              },
              {
                title: "Action 3: Pass Control (The Assembly Worker Continues)",
                description:
                  "Call next() to pass control to the next middleware",
                code: `// Middleware that always passes to next
app.use((req, res, next) => {
  console.log('Middleware 1: Doing something...');
  // Do some work here
  next(); // Pass to next middleware/route
});

app.use((req, res, next) => {
  console.log('Middleware 2: Doing something else...');
  next(); // Pass to next middleware/route
});

app.get('/', (req, res) => {
  console.log('Route handler: Final stop');
  res.send('Response');
});

// Order of execution:
// 1. Middleware 1 logs and calls next()
// 2. Middleware 2 logs and calls next()
// 3. Route handler runs and sends response`,
              },
            ],
          },
        },
        {
          id: "custom-middleware",
          title: "Creating Custom Middleware",
          type: "example",
          content: {
            description: "Build practical middleware from scratch",
            paragraphs: [
              "Practical middleware patterns: logging, response-timing, auth, role checks and validation. Full examples follow in the examples array.",
            ],
            code: `// See examples array for concrete middleware implementations (logger, response-time, auth, admin check, validation)`,
            examples: [
              {
                title: "Request Logger with Timestamps",
                code: `// Simple request logger
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(\`[\${timestamp}] \${req.method} \${req.url}\`);
  next();
});`,
              },
              {
                title: "Response Time Tracker",
                code: `// Middleware that tracks how long each request takes
app.use((req, res, next) => {
  const startTime = Date.now();
  
  // Hook into the 'finish' event to see when response is sent
  res.on('finish', () => {
    const duration = Date.now() - startTime;
    console.log(\`Request to \${req.url} took \${duration}ms\`);
  });
  
  next();
});`,
              },
              {
                title: "Authentication Middleware",
                code: `// Check if user is authenticated
const requireAuth = (req, res, next) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  if (token === 'valid-token') {
    req.user = { id: 1, name: 'John Doe' };
    next();
  } else {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Use it on specific routes
app.get('/protected', requireAuth, (req, res) => {
  res.json({ message: \`Hello \${req.user.name}\` });
});`,
              },
              {
                title: "Admin Role Check Middleware",
                code: `// Check if user has admin role
const requireAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  
  if (req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ error: 'Admin access required' });
  }
};

// Chain multiple middlewares
app.delete('/users/:id', requireAuth, requireAdmin, (req, res) => {
  res.json({ message: \`Deleted user \${req.params.id}\` });
});`,
              },
              {
                title: "Request Body Validation",
                code: `// Validate that required fields are in the request body
const validateUserData = (req, res, next) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ 
      error: 'Missing required fields: name and email' 
    });
  }
  
  if (!email.includes('@')) {
    return res.status(400).json({ 
      error: 'Invalid email format' 
    });
  }
  
  next();
};

app.post('/users', validateUserData, (req, res) => {
  res.json({ message: 'User created successfully' });
});`,
              },
            ],
          },
        },
        {
          id: "builtin-middleware",
          title: "Built-in Middleware",
          type: "example",
          content: {
            description: "Using Express built-in middleware for common tasks",
            paragraphs: [
              "Express provides built-in middleware for common tasks such as JSON/body parsing, urlencoded parsing, and serving static files. See code examples below.",
            ],
            code: `// See examples array for usage of express.json(), express.urlencoded(), and express.static()`,
            examples: [
              {
                title: "JSON Parser - Parse incoming JSON requests",
                code: `// Without express.json(), req.body would be undefined
app.use(express.json());

app.post('/api/users', (req, res) => {
  console.log(req.body); // Now contains parsed JSON data
  res.json({ received: req.body });
});`,
              },
              {
                title: "URL-Encoded Parser - Parse form data",
                code: `// Parse form submissions (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

app.post('/form', (req, res) => {
  // req.body contains form data
  res.send(\`Received form data: \${JSON.stringify(req.body)}\`);
});`,
              },
              {
                title: "Static Files - Serve CSS, images, etc.",
                code: `// Serve files from the 'public' folder
app.use(express.static('public'));

// Now http://localhost:3000/style.css serves public/style.css
// http://localhost:3000/logo.png serves public/logo.png`,
              },
              {
                title: "Combining Built-in Middleware",
                code: `const express = require('express');
const app = express();

// Order matters! Parse before using
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Your custom middleware here
app.use((req, res, next) => {
  console.log('Processing request...');
  next();
});

// Routes here
app.post('/api/data', (req, res) => {
  res.json(req.body);
});`,
              },
            ],
          },
        },
        {
          id: "middleware-order",
          title: "Middleware Execution Order - CRITICAL",
          type: "example",
          content: {
            description: "Why the order of middleware matters",
            warning: "The order in which you define middleware is crucial!",
            code: `// WRONG ORDER - This will NOT work
app.get('/users', (req, res) => {
  res.json(users);
});

app.use(express.json()); // DEFINED AFTER the route!

// CORRECT ORDER
app.use(express.json()); // Parse JSON FIRST

app.get('/users', (req, res) => {
  // Now we can use req.body if someone POSTs to /users
  res.json(users);
});

// EXECUTION ORDER EXAMPLE
app.use((req, res, next) => {
  console.log('1. First middleware');
  next();
});

app.use((req, res, next) => {
  console.log('2. Second middleware');
  next();
});

app.get('/', (req, res) => {
  console.log('3. Route handler');
  res.send('Done');
});

// Output when GET /:
// 1. First middleware
// 2. Second middleware
// 3. Route handler`,
          },
        },
        {
          id: "error-handling",
          title: "Error Handling Middleware",
          type: "example",
          content: {
            description: "Handle errors across your entire application",
            keyPoints: [
              "Error-handling middleware has 4 parameters: (err, req, res, next)",
              "Must be defined LAST, after all other routes and middleware",
              "Pass errors to it by calling next(error)",
            ],
            code: `// Route that might have an error
app.get('/divide/:a/:b', (req, res, next) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  
  if (b === 0) {
    const error = new Error('Cannot divide by zero');
    error.status = 400;
    return next(error); // Pass error to error handler
  }
  
  res.json({ result: a / b });
});

// ERROR HANDLING MIDDLEWARE (must be last!)
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  
  console.error('Error:', message);
  
  res.status(status).json({
    error: {
      message: message,
      status: status
    }
  });
});`,
          },
        },
      ],
      exercises: [
        {
          id: "ex-3-1",
          title: "Request Logger Middleware",
          description: "Create a detailed request logger",
          difficulty: "Beginner",
          task: `Create middleware that logs:
- Timestamp (ISO format)
- HTTP method
- URL path
- User-Agent header
- Response time (in milliseconds)

Format: "2023-10-01T10:00:00.000Z - GET /api/users - Chrome/120 - 15ms"`,
          hint: "Use res.on('finish') to track when the response is sent",
          solution: `app.use((req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    const userAgent = req.get('User-Agent') || 'Unknown';
    const timestamp = new Date().toISOString();
    
    console.log(
      \`\${timestamp} - \${req.method} \${req.url} - \${userAgent} - \${duration}ms\`
    );
  });
  
  next();
});`,
        },
        {
          id: "ex-3-2",
          title: "Error Handling Middleware",
          description: "Create global error handling middleware",
          difficulty: "Intermediate",
          task: `Create error handling middleware that:
1. Catches all errors thrown or passed via next(error)
2. Returns consistent JSON error responses
3. Includes different handling for validation vs generic errors
4. Shows detailed errors in development, generic in production
5. Logs all errors to console`,
          hint: "Error middleware has 4 parameters: (err, req, res, next). Check process.env.NODE_ENV",
          solution: `// Error handling middleware (must be LAST)
app.use((err, req, res, next) => {
  console.error('ERROR:', err.message);
  console.error('Stack:', err.stack);
  
  let status = err.status || err.statusCode || 500;
  let message = err.message || 'Internal Server Error';
  
  // Handle validation errors specifically
  if (err.name === 'ValidationError') {
    status = 400;
    message = 'Validation Error';
  }
  
  // Different response for production vs development
  const response = {
    error: {
      message: message,
      status: status
    }
  };
  
  // In development, include full error details
  if (process.env.NODE_ENV === 'development') {
    response.error.details = err.stack;
  }
  
  res.status(status).json(response);
});`,
        },
        {
          id: "ex-3-3",
          title: "Authentication Middleware",
          description: "Create a token-based authentication middleware",
          difficulty: "Intermediate",
          task: `Create authentication middleware that:
1. Checks for Authorization header with Bearer token
2. Validates the token (accept 'valid-token' for now)
3. Attaches user data to req.user if valid
4. Returns 401 error if missing or invalid token
5. Can be applied to specific routes only`,
          hint: "Check req.headers.authorization. Use .replace('Bearer ', '') to extract token",
          solution: `const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).json({ error: 'Missing authorization header' });
  }
  
  const token = authHeader.replace('Bearer ', '');
  
  if (token === 'valid-token') {
    // Attach user to request
    req.user = {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com'
    };
    next();
  } else {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

// Apply to specific route
app.get('/profile', authenticate, (req, res) => {
  res.json({ user: req.user });
});

// Test with: curl -H "Authorization: Bearer valid-token" http://localhost:3000/profile`,
        },
        {
          id: "ex-3-4",
          title: "Request Validation Middleware",
          description: "Create reusable validation middleware",
          difficulty: "Intermediate",
          task: `Create a middleware factory that validates request bodies:
1. Check for required fields
2. Validate email format
3. Check numeric ranges
4. Ensure correct data types
5. Return helpful error messages

Create separate validators for different routes (user, product, etc.)`,
          hint: "Create a function that returns middleware",
          solution: `// Middleware factory for validating user data
const validateUserInput = (req, res, next) => {
  const { name, email, age } = req.body;
  const errors = [];
  
  // Check required fields
  if (!name) errors.push('Name is required');
  if (!email) errors.push('Email is required');
  
  // Validate email format
  if (email && !email.includes('@')) {
    errors.push('Invalid email format');
  }
  
  // Validate age range
  if (age !== undefined) {
    if (typeof age !== 'number') errors.push('Age must be a number');
    if (age < 0 || age > 150) errors.push('Age must be between 0 and 150');
  }
  
  if (errors.length > 0) {
    return res.status(400).json({ 
      error: 'Validation failed',
      details: errors 
    });
  }
  
  next();
};

// Reusable validator factory
const createValidator = (rules) => {
  return (req, res, next) => {
    const errors = [];
    
    Object.keys(rules).forEach(field => {
      const rule = rules[field];
      const value = req.body[field];
      
      if (rule.required && !value) {
        errors.push(\`\${field} is required\`);
      }
      
      if (rule.type && value && typeof value !== rule.type) {
        errors.push(\`\${field} must be a \${rule.type}\`);
      }
      
      if (rule.min !== undefined && value < rule.min) {
        errors.push(\`\${field} must be at least \${rule.min}\`);
      }
      
      if (rule.max !== undefined && value > rule.max) {
        errors.push(\`\${field} must be no more than \${rule.max}\`);
      }
    });
    
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
    
    next();
  };
};

// Usage:
const userValidator = createValidator({
  name: { required: true, type: 'string' },
  email: { required: true, type: 'string' },
  age: { type: 'number', min: 0, max: 150 }
});

app.post('/users', userValidator, (req, res) => {
  res.json({ message: 'User created', user: req.body });
});`,
        },
        {
          id: "ex-3-5",
          title: "Rate Limiting Middleware",
          description: "Prevent API abuse with rate limiting",
          difficulty: "Advanced",
          task: `Create a simple rate limiting middleware that:
1. Limits requests per IP address
2. Allows X requests per Y minutes
3. Returns 429 status when limit exceeded
4. Includes retry-after header
5. Displays remaining requests in response header`,
          hint: "Use a Map to store request counts per IP. Store { count, resetTime }",
          solution: `const createRateLimiter = (maxRequests = 5, windowMs = 60000) => {
  const requestMap = new Map();
  
  return (req, res, next) => {
    const ip = req.ip || req.connection.remoteAddress;
    const now = Date.now();
    
    // Get or create rate limit entry
    let rateLimitData = requestMap.get(ip);
    
    if (!rateLimitData || now > rateLimitData.resetTime) {
      // Window expired or first request
      rateLimitData = {
        count: 1,
        resetTime: now + windowMs
      };
    } else {
      // Within current window
      rateLimitData.count++;
    }
    
    requestMap.set(ip, rateLimitData);
    
    const remaining = Math.max(0, maxRequests - rateLimitData.count);
    const resetAfter = Math.ceil((rateLimitData.resetTime - now) / 1000);
    
    // Set headers
    res.set('X-RateLimit-Limit', maxRequests);
    res.set('X-RateLimit-Remaining', remaining);
    res.set('X-RateLimit-Reset', rateLimitData.resetTime);
    
    if (rateLimitData.count > maxRequests) {
      return res.status(429).json({
        error: 'Too many requests',
        retryAfter: resetAfter,
        message: \`You've exceeded the rate limit. Try again in \${resetAfter} seconds.\`
      });
    }
    
    next();
  };
};

// Usage: Allow 10 requests per 5 minutes
const limiter = createRateLimiter(10, 5 * 60 * 1000);
app.use(limiter);`,
        },
        {
          id: "ex-3-6",
          title: "Conditional Middleware Chain",
          description: "Apply middleware based on conditions",
          difficulty: "Advanced",
          task: `Create middleware that:
1. Applies authentication only to routes starting with /api/protected
2. Applies rate limiting to /api routes but not /public
3. Applies logging to all routes
4. Can be easily configured

Create a flexible middleware system that routes to different validators based on content type.`,
          hint: "Use req.path to check the route. Middleware stack can be conditional.",
          solution: `// Route-specific middleware wrapper
const ifPath = (pattern, middleware) => {
  return (req, res, next) => {
    if (req.path.startsWith(pattern)) {
      return middleware(req, res, next);
    }
    next();
  };
};

// Global logging (applies to all)
app.use((req, res, next) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.path}\`);
  next();
});

// Rate limiting only for /api routes
app.use(ifPath('/api', createRateLimiter(100, 60000)));

// Authentication only for protected routes
app.use(ifPath('/api/protected', authenticate));

// Different validators based on route
const handleValidation = (req, res, next) => {
  if (req.path.startsWith('/api/users')) {
    return userValidator(req, res, next);
  }
  if (req.path.startsWith('/api/products')) {
    return productValidator(req, res, next);
  }
  next();
};

app.use(ifPath('/api', handleValidation));

// Public routes (no auth required)
app.get('/public/info', (req, res) => {
  res.json({ message: 'Public data' });
});

// Protected API routes
app.get('/api/protected/data', authenticate, (req, res) => {
  res.json({ user: req.user, data: 'secret' });
});`,
        },
        {
          id: "ex-3-7",
          title: "Custom Error Class & Error Middleware Integration",
          description: "Create an organized error handling system",
          difficulty: "Advanced",
          task: `Create:
1. Custom Error classes (ValidationError, NotFoundError, etc.)
2. Middleware that catches and properly formats errors
3. Async error wrapper to catch promise rejections
4. Proper HTTP status codes for different error types`,
          solution: `// Custom Error classes
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

class ValidationError extends AppError {
  constructor(message) {
    super(message, 400);
    this.name = 'ValidationError';
  }
}

class NotFoundError extends AppError {
  constructor(resource) {
    super(\`\${resource} not found\`, 404);
    this.name = 'NotFoundError';
  }
}

class UnauthorizedError extends AppError {
  constructor(message = 'Unauthorized') {
    super(message, 401);
    this.name = 'UnauthorizedError';
  }
}

// Async error wrapper
const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

// Error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: {
        name: err.name,
        message: err.message,
        statusCode: err.statusCode
      }
    });
  }
  
  // Unknown error
  res.status(500).json({
    error: {
      message: 'Internal Server Error',
      statusCode: 500
    }
  });
});

// Usage examples
app.post('/users', asyncHandler(async (req, res, next) => {
  if (!req.body.email) {
    throw new ValidationError('Email is required');
  }
  
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    throw new ValidationError('Email already exists');
  }
  
  res.json({ message: 'User created' });
}));

app.get('/users/:id', asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    throw new NotFoundError('User');
  }
  res.json(user);
}));`,
        },
      ],
    },

    {
      id: "module-4",
      title: "Module 4: Routing & Route Parameters",
      duration: "1 hour 30 minutes",
      objectives: [
        "Organize routes with Express Router",
        "Handle route parameters and query strings",
        "Implement route validation",
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
app.use('/users', userRoutes);`,
          },
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
});`,
          },
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
});`,
          },
        },
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

module.exports = router;`,
        },
      ],
    },

    {
      id: "module-5",
      title: "Module 5: Template Engines & Views",
      duration: "1 hour",
      objectives: [
        "Understand template engines",
        "Set up EJS template engine",
        "Create dynamic views",
      ],
      lessons: [
        {
          id: "template-engines",
          title: "Introduction to Template Engines",
          type: "theory",
          content: {
            paragraphs: [
              "Template engines enable you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client.",
              "Popular template engines: EJS, Pug, Handlebars",
            ],
          },
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
                code: "npm install ejs",
              },
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
});`,
          },
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
</html>`,
          },
        },
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
<% } %>`,
        },
      ],
    },

    {
      id: "module-6",
      title: "Module 6: Database Integration",
      duration: "2 hours",
      objectives: [
        "Connect to MongoDB with Mongoose",
        "Define schemas and models",
        "Perform CRUD operations",
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
                code: "npm install mongoose",
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
});`,
              },
            ],
          },
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

const User = mongoose.model('User', userSchema);`,
          },
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
});`,
          },
        },
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
});`,
        },
      ],
    },

    {
      id: "module-7",
      title: "Module 7: Authentication & Security",
      duration: "1 hour 30 minutes",
      objectives: [
        "Implement user authentication",
        "Use JWT for stateless authentication",
        "Add security best practices",
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
                code: "npm install jsonwebtoken bcryptjs",
              },
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
});`,
          },
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
});`,
          },
        },
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
});`,
        },
      ],
    },

    {
      id: "module-8",
      title: "Module 8: Deployment & Best Practices",
      duration: "1 hour",
      objectives: [
        "Prepare app for production",
        "Environment configuration",
        "Deploy to cloud platform",
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
});`,
          },
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
              "Use process managers like PM2",
            ],
          },
        },
        {
          id: "cors-helmet",
          title: "CORS & Security Headers",
          type: "example",
          content: {
            steps: [
              {
                text: "Install security packages:",
                code: "npm install cors helmet",
              },
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
app.use(limiter);`,
          },
        },
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
});`,
        },
      ],
      finalProject: {
        title: "Build a Complete Blog Platform",
        description:
          "Combine all modules to build a full-stack blog application",
        requirements: [
          "User authentication and authorization",
          "CRUD operations for blog posts and comments",
          "MongoDB database with proper schemas",
          "RESTful API with proper error handling",
          "EJS templates for frontend",
          "Production-ready configuration",
          "Security best practices implemented",
        ],
        bonus: [
          "Add file upload for post images",
          "Implement search functionality",
          "Add pagination for posts",
          "Create admin dashboard",
          "Add social media sharing",
        ],
      },
    },
  ],
};

export default expressCourse;
