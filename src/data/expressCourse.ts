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
        "Understand what authentication is and why it's important",
        "Learn how JWT works (like a digital ID card)",
        "Implement user registration and login",
        "Protect routes with authentication middleware",
        "Add basic security measures",
      ],
      lessons: [
        {
          id: "authentication-basics",
          title: "What is Authentication?",
          type: "theory",
          content: {
            description:
              "Authentication is like showing your ID card to get into a club. It proves WHO you are to the system.",
            analogy: {
              title: "The Clubhouse Metaphor",
              scenarios: [
                {
                  situation: "Without Authentication",
                  explanation:
                    "Anyone can walk into the clubhouse, use the facilities, and take things.",
                },
                {
                  situation: "With Authentication",
                  explanation:
                    "You need to show your membership card (login) to enter. The bouncer (server) checks if it's valid.",
                },
              ],
            },
            keyConcepts: [
              {
                term: "Registration",
                explanation: "Getting your membership card for the first time",
              },
              {
                term: "Login",
                explanation: "Showing your card to enter the clubhouse",
              },
              {
                term: "Session",
                explanation:
                  "How long you can stay inside before needing to show your card again",
              },
            ],
            realWorldExamples: [
              "Logging into Facebook/Instagram",
              "Banking app login",
              "Email account access",
            ],
          },
        },
        {
          id: "jwt-explained",
          title: "What are JWTs? (Digital ID Cards)",
          type: "theory",
          content: {
            description:
              "JWT stands for JSON Web Token. It's like a digital ID card that your app creates after you login successfully.",
            visual: `
          ┌─────────────────────────────────┐
          │        JWT STRUCTURE            │
          ├─────────────────────────────────┤
          │   HEADER                         │
          │   (Type: JWT, Algorithm: HS256) │
          ├─────────────────────────────────┤
          │   PAYLOAD                       │
          │   (User ID, Name, Expiry)       │
          ├─────────────────────────────────┤
          │   SIGNATURE                     │
          │   (Secret Key + Hash)           │
          └─────────────────────────────────┘
        `,
            jwtParts: [
              {
                part: "Header",
                analogy: "The plastic part of your ID card",
                contains: "Type of token and encryption algorithm",
              },
              {
                part: "Payload",
                analogy: "The information printed on your ID",
                contains: "User data (ID, name, expiry date)",
              },
              {
                part: "Signature",
                analogy: "The hologram or security sticker",
                contains: "Secret code that proves the ID is genuine",
              },
            ],
            howItWorks: [
              "1. User logs in with email/password",
              "2. Server creates a JWT (digital ID card)",
              "3. Client stores the JToken",
              "4. Client sends JWT with every request",
              "5. Server verifies JWT before allowing access",
            ],
          },
        },
        {
          id: "password-security",
          title: "Password Security: Why Hash Passwords?",
          type: "theory",
          content: {
            description:
              "Never store passwords in plain text! Imagine writing your password on a sticky note vs putting it in a safe.",
            comparison: {
              badPractice: "Plain Text Passwords",
              goodPractice: "Hashed Passwords",
              analogy:
                "Writing password on paper vs putting it in a locked safe",
            },
            hashExample: `Password: "mypassword123"
Hash: "$2a$12$N9qo8uLOickgx2ZMRZoMy.Mrq1V1zHX7cYq3iB6C7QjK9pVW1lX.O"

Even tiny changes create completely different hashes:
"mypassword124" → "$2a$12$differenthashcompletely..."
        `,
            keyPoints: [
              "Hashing is one-way: Can't convert hash back to password",
              "Same password always produces same hash",
              "bcrypt adds 'salt' - extra randomness for security",
              "12 is the 'work factor' - higher = more secure but slower",
            ],
          },
        },
        {
          id: "jwt-authentication",
          title: "JWT Authentication: Hands-On",
          type: "example",
          content: {
            description:
              "Let's implement authentication step by step. We'll create two endpoints: /register and /login",
            steps: [
              {
                step: 1,
                text: "Install required packages",
                code: "npm install jsonwebtoken bcryptjs",
                explanation:
                  "jsonwebtoken for creating/verifying tokens, bcryptjs for password hashing",
              },
              {
                step: 2,
                text: "Set up environment variable for secret key",
                code: "Create .env file with: JWT_SECRET=your-super-secret-key-here",
                explanation:
                  "Never hardcode secrets! Use environment variables.",
              },
            ],
            code: `// Import required modules
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config(); // Load environment variables

const JWT_SECRET = process.env.JWT_SECRET;

// REGISTER: Creating a new user (like getting a club membership)
app.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    
    // Step 1: Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ 
        error: 'User already exists',
        suggestion: 'Try logging in instead'
      });
    }
    
    // Step 2: Hash the password (put it in a safe)
    const hashedPassword = await bcrypt.hash(password, 12);
    // 12 is the 'work factor' - higher = more secure but slower
    
    // Step 3: Create and save user
    const user = new User({
      name,
      email,
      password: hashedPassword  // Store the hash, NOT the plain password!
    });
    
    await user.save();
    
    // Step 4: Generate JWT (create digital ID card)
    const token = jwt.sign(
      { userId: user._id },  // What's written on the ID card
      JWT_SECRET,            // The secret to sign it
      { expiresIn: '7d' }    // ID card expires in 7 days
    );
    
    // Step 5: Send response
    res.status(201).json({
      message: 'Registration successful!',
      token,  // The digital ID card
      user: {
        id: user._id,
        name,
        email
      }
    });
    
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ 
      error: 'Registration failed',
      details: error.message 
    });
  }
});

// LOGIN: Existing users getting access
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Step 1: Find the user
    const user = await User.findOne({ email });
    if (!user) {
      // Don't say "user doesn't exist" - security best practice
      return res.status(400).json({ 
        error: 'Invalid credentials',
        hint: 'Check your email and password'
      });
    }
    
    // Step 2: Compare password with hash
    const isValidPassword = await bcrypt.compare(password, user.password);
    // bcrypt.compare checks if password matches the hash
    
    if (!isValidPassword) {
      return res.status(400).json({ 
        error: 'Invalid credentials',
        hint: 'Check your email and password'
      });
    }
    
    // Step 3: Generate new JWT
    const token = jwt.sign(
      { userId: user._id },
      JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    // Step 4: Send success response
    res.json({
      message: 'Login successful!',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
    
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      error: 'Login failed',
      details: error.message 
    });
  }
});`,
          },
        },
        {
          id: "auth-middleware",
          title: "Authentication Middleware: The Bouncer",
          type: "example",
          content: {
            description:
              "Middleware is like a bouncer at the club door. It checks your JWT (ID card) before letting you in.",
            analogy:
              "The bouncer checks: 1) Do you have an ID? 2) Is it valid? 3) Is it expired?",
            code: `// Create middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  try {
    // Step 1: Get token from header
    // Format should be: "Authorization: Bearer your-token-here"
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    // Step 2: Check if token exists
    if (!token) {
      return res.status(401).json({ 
        error: 'Access denied',
        message: 'No token provided. Please login first.'
      });
    }
    
    // Step 3: Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // This checks: Is the signature valid? Is it expired?
    
    // Step 4: Find the user
    const user = await User.findById(decoded.userId).select('-password');
    // .select('-password') removes password from the result
    
    if (!user) {
      return res.status(401).json({ 
        error: 'Invalid token',
        message: 'User not found. Token might be outdated.'
      });
    }
    
    // Step 5: Attach user to request
    req.user = user;  // Now all routes can access req.user
    next();  // Allow request to continue to the route handler
    
  } catch (error) {
    // Different error types
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ 
        error: 'Invalid token',
        message: 'Token is malformed or corrupted.'
      });
    }
    
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ 
        error: 'Token expired',
        message: 'Please login again.'
      });
    }
    
    // Any other error
    res.status(401).json({ 
      error: 'Authentication failed',
      details: error.message 
    });
  }
};

module.exports = authMiddleware;`,
          },
        },
        {
          id: "protected-routes",
          title: "Using Protected Routes",
          type: "example",
          content: {
            description:
              "Now let's use our middleware to protect routes. Think of it as putting a bouncer in front of VIP areas.",
            code: `// Import the middleware
const authMiddleware = require('./middleware/authMiddleware');

// PUBLIC ROUTES (no bouncer)
app.get('/public', (req, res) => {
  res.json({ message: 'Anyone can see this!' });
});

// PROTECTED ROUTES (has bouncer)
app.get('/profile', authMiddleware, (req, res) => {
  // If we get here, the bouncer (authMiddleware) approved the user
  res.json({
    message: 'Welcome to your profile!',
    user: req.user,  // Available from authMiddleware
    secretData: 'This is only for authenticated users'
  });
});

// Multiple middlewares can be chained
app.get('/dashboard', authMiddleware, someOtherMiddleware, (req, res) => {
  // authMiddleware runs first, then someOtherMiddleware
  res.json({ message: 'Dashboard data', user: req.user });
});

// Example: Get current user's posts
app.get('/my-posts', authMiddleware, async (req, res) => {
  try {
    const posts = await Post.find({ author: req.user._id });
    res.json({
      user: req.user.name,
      postCount: posts.length,
      posts: posts
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`,
          },
        },
        {
          id: "security-best-practices",
          title: "Security Best Practices",
          type: "theory",
          content: {
            description: "Essential security measures every app should have.",
            checklist: [
              {
                item: "✅ Use environment variables for secrets",
                why: "Prevents accidental commits of passwords to GitHub",
              },
              {
                item: "✅ Always hash passwords with bcrypt",
                why: "Protects users even if database is compromised",
              },
              {
                item: "✅ Set reasonable token expiry",
                why: "Limits damage if token is stolen",
              },
              {
                item: "✅ Use HTTPS in production",
                why: "Encrypts data between client and server",
              },
              {
                item: "✅ Sanitize user input",
                why: "Prevents SQL injection and other attacks",
              },
              {
                item: "✅ Implement rate limiting",
                why: "Prevents brute force attacks",
              },
            ],
            commonMistakes: [
              "❌ Storing plain text passwords",
              "❌ Using weak JWT secrets",
              "❌ Not validating user input",
              "❌ Exposing error details to users",
              "❌ Using GET for sensitive operations",
            ],
          },
        },
      ],
      exercises: [
        {
          id: "ex-7-1",
          title: "Secure Blog API",
          description: "Add authentication to your blog API",
          task: `Enhance your blog with these security features:
1. Users must register/login to create posts
2. Users can only edit/delete their own posts
3. Add author information to posts
4. Create a "My Posts" endpoint

Use this starter Post model:`,
          starterCode: `// Post model (add author field)
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  createdAt: { type: Date, default: Date.now }
});`,
          hint: "Remember: authMiddleware adds req.user. Compare post.author with req.user._id using .toString()",
          solution: `// 1. Create post (protected route)
app.post('/posts', authMiddleware, async (req, res) => {
  try {
    const { title, content } = req.body;
    
    if (!title || !content) {
      return res.status(400).json({ 
        error: 'Title and content are required' 
      });
    }
    
    const post = new Post({
      title,
      content,
      author: req.user._id  // From authMiddleware
    });
    
    await post.save();
    
    // Populate author info for response
    await post.populate('author', 'name email');
    
    res.status(201).json({
      message: 'Post created successfully',
      post: post
    });
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 2. Update post (only author can edit)
app.put('/posts/:id', authMiddleware, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    // Check if current user is the author
    // Must convert ObjectId to string for comparison
    if (post.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ 
        error: 'Permission denied',
        message: 'You can only edit your own posts'
      });
    }
    
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { 
        new: true,           // Return updated document
        runValidators: true  // Run schema validators
      }
    ).populate('author', 'name email');
    
    res.json({
      message: 'Post updated successfully',
      post: updatedPost
    });
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 3. Get current user's posts
app.get('/my-posts', authMiddleware, async (req, res) => {
  try {
    const posts = await Post.find({ author: req.user._id })
      .populate('author', 'name email')
      .sort({ createdAt: -1 }); // Newest first
    
    res.json({
      user: req.user.name,
      postCount: posts.length,
      posts: posts
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 4. Get single post with author info
app.get('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate('author', 'name email');
    
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`,
        },
        {
          id: "ex-7-2",
          title: "Enhanced Error Messages",
          description: "Improve error handling for better user experience",
          task: `Improve the authentication error messages:
1. Differentiate between "user not found" and "wrong password"
2. Add validation for email format
3. Check password strength (min 6 characters)
4. Return helpful suggestions`,
          solution: `app.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    
    // Validation
    if (!email || !password || !name) {
      return res.status(400).json({ 
        error: 'Missing fields',
        required: ['email', 'password', 'name']
      });
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email format',
        example: 'user@example.com'
      });
    }
    
    // Password strength
    if (password.length < 6) {
      return res.status(400).json({ 
        error: 'Password too short',
        minimum: '6 characters',
        suggestion: 'Add numbers or special characters'
      });
    }
    
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ 
        error: 'Email already registered',
        suggestion: 'Try logging in or use forgot password'
      });
    }
    
    // Rest of registration logic...
    
  } catch (error) {
    res.status(500).json({ 
      error: 'Registration failed',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});`,
        },
      ],
      quiz: [
        {
          question: "What is the main purpose of hashing passwords?",
          options: [
            "To make passwords shorter",
            "To encrypt passwords so they can be decrypted later",
            "To create a one-way secure representation of passwords",
            "To make passwords easier to remember",
          ],
          correct: 2,
          explanation:
            "Hashing creates a one-way transformation. You can't get the original password back from the hash.",
        },
        {
          question: "Where should you store your JWT_SECRET?",
          options: [
            "Hardcoded in your JavaScript files",
            "In a .env file that's not committed to GitHub",
            "In the database",
            "In the browser's localStorage",
          ],
          correct: 1,
          explanation:
            "Environment variables keep secrets out of your code and version control.",
        },
        {
          question: "What does the authMiddleware do?",
          options: [
            "Creates new users",
            "Hashes passwords",
            "Checks if a JWT is valid and attaches user to request",
            "Sends emails",
          ],
          correct: 2,
          explanation:
            "It's like a bouncer - checks the token and if valid, adds the user to req.user.",
        },
      ],
      commonMistakes: [
        {
          mistake: "Comparing ObjectIds without .toString()",
          solution:
            "Always use: post.author.toString() === req.user._id.toString()",
        },
        {
          mistake: "Forgetting to remove password from user responses",
          solution: "Use .select('-password') when fetching users",
        },
        {
          mistake: "Not handling JWT expiration",
          solution:
            "Check error.name === 'TokenExpiredError' in authMiddleware",
        },
      ],
      testingYourAPI: [
        "1. Register a new user with POST /register",
        "2. Login with POST /login to get a token",
        "3. Try accessing /profile WITHOUT token → should get 401",
        "4. Access /profile WITH token in Authorization header → should work",
        "5. Create a post with POST /posts using your token",
      ],
    },
    {
      id: "module-8",
      title: "Module 8: Authorization & User Roles",
      duration: "45 minutes",
      objectives: [
        "Understand authorization vs authentication",
        "Add user roles (member, admin)",
        "Protect routes using role checks",
        "Create admin-only routes",
      ],
      lessons: [
        {
          id: "auth-vs-authorization",
          title: "Authentication vs Authorization",
          type: "theory",
          content: {
            description:
              "Learn the difference between authentication and authorization:",
            keyPoints: [
              "Authentication: WHO are you? (Login/Register)",
              "Authorization: WHAT can you do? (Permissions)",
              "Example: Authentication checks your ID card, Authorization checks what rooms you can enter",
            ],
            analogy: {
              title: "Clubhouse Example",
              description: "Think of your app as a clubhouse:",
              scenarios: [
                {
                  situation: "Authentication",
                  explanation:
                    "You show your membership card at the door (login)",
                },
                {
                  situation: "Authorization - Member",
                  explanation:
                    "Members can enter the main room but not the VIP section",
                },
                {
                  situation: "Authorization - Admin",
                  explanation:
                    "Admins can enter all rooms, including the VIP section",
                },
              ],
            },
          },
        },
        {
          id: "add-role-to-user",
          title: "Step 1: Add Role to User Model",
          type: "example",
          content: {
            description:
              "First, let's add a simple role field to our User model:",
            code: `// Update your User model in models/User.js
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  // Add this new role field
  role: {
    type: String,
    enum: ['member', 'admin'], // Only these two values allowed
    default: 'member' // New users are members by default
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
          id: "simple-admin-middleware",
          title: "Step 2: Create Simple Admin Middleware",
          type: "example",
          content: {
            description:
              "Create middleware that checks if the user is an admin. This should be used AFTER your authMiddleware:",
            code: `// Create a new middleware file: middleware/adminAuth.js
const isAdmin = (req, res, next) => {
  // First, make sure user is authenticated (req.user exists)
  if (!req.user) {
    return res.status(401).json({ 
      error: 'Please login first' 
    });
  }
  
  // Check if user is admin
  if (req.user.role !== 'admin') {
    return res.status(403).json({ 
      error: 'Admin access required',
      message: 'Only administrators can access this feature'
    });
  }
  
  // User is admin, continue to the route
  next();
};

module.exports = isAdmin;`,
          },
        },
        {
          id: "admin-route-example",
          title: "Step 3: Protect Admin Routes",
          type: "example",
          content: {
            description:
              "Use the isAdmin middleware to protect specific routes. Note the order: authMiddleware first, then isAdmin:",
            code: `// In your routes file (e.g., routes/admin.js)
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const isAdmin = require('../middleware/adminAuth');

// Route 1: Admin dashboard - only admins can see
router.get('/dashboard', authMiddleware, isAdmin, (req, res) => {
  res.json({
    message: 'Welcome to Admin Dashboard',
    admin: req.user.name,
    role: req.user.role,
    features: [
      'View all users',
      'Manage content',
      'See analytics'
    ]
  });
});

// Route 2: Get all users - only admins can see
router.get('/users', authMiddleware, isAdmin, async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json({
      count: users.length,
      users: users
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;`,
          },
        },
        {
          id: "using-in-main-app",
          title: "Step 4: Set Up Routes in Main App",
          type: "example",
          content: {
            description: "Mount the admin routes in your main app.js file:",
            code: `// In your app.js or server.js file
const adminRoutes = require('./routes/admin');

// Mount admin routes under /admin
app.use('/admin', adminRoutes);

// Your other public routes
app.get('/profile', authMiddleware, (req, res) => {
  res.json({
    user: req.user,
    message: 'Anyone can see their own profile'
  });
});

// Test these endpoints:
// GET /admin/dashboard - needs admin token
// GET /admin/users - needs admin token
// GET /profile - needs any user token`,
          },
        },
        {
          id: "creating-admin-user",
          title: "Step 5: How to Create an Admin User",
          type: "practical",
          content: {
            description:
              "Since new users default to 'member', here's how to create an admin user:",
            steps: [
              {
                text: "Option 1: Direct database update (for development)",
                code: `// In MongoDB Compass or terminal
db.users.updateOne(
  { email: "admin@example.com" },
  { $set: { role: "admin" } }
)`,
              },
              {
                text: "Option 2: Create a special registration route (for admins only)",
                code: `// routes/setup.js - Don't expose this in production!
app.post('/setup/admin', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);
    
    // Create admin user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role: 'admin' // Explicitly set as admin
    });
    
    await user.save();
    
    // Generate token
    const token = jwt.sign(
      { userId: user._id },
      JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    res.status(201).json({ 
      message: 'Admin user created',
      token,
      user: { id: user._id, name, email, role: user.role }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`,
              },
            ],
          },
        },
      ],
      exercises: [
        {
          id: "ex-8-1",
          title: "Simple Role-Based Blog",
          description: "Add role-based permissions to your blog",
          task: `Enhance your blog API with these requirements:
1. Regular users (members) can only create posts
2. Admins can delete any post
3. Only post owners can edit their own posts
4. Create a simple admin panel route

Use this starter code for the Post model:`,
          starterCode: `const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});`,
          solution: `// Middleware to check if user can edit post
const canEditPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    // Check if user is the author OR an admin
    const isAuthor = post.author.toString() === req.user._id.toString();
    const isAdmin = req.user.role === 'admin';
    
    if (isAuthor || isAdmin) {
      req.post = post;
      next();
    } else {
      return res.status(403).json({ 
        error: 'Not authorized to edit this post' 
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Middleware to check if user can delete post
const canDeletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    // Only admins can delete posts (or the author if you want)
    const isAdmin = req.user.role === 'admin';
    const isAuthor = post.author.toString() === req.user._id.toString();
    
    if (isAdmin || isAuthor) {
      req.post = post;
      next();
    } else {
      return res.status(403).json({ 
        error: 'Only admins can delete posts' 
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Routes
app.put('/posts/:id', authMiddleware, canEditPost, async (req, res) => {
  // Only author or admin can edit
  const updatedPost = await Post.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  ).populate('author', 'name email role');
  
  res.json(updatedPost);
});

app.delete('/posts/:id', authMiddleware, canDeletePost, async (req, res) => {
  // Only admin can delete
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: 'Post deleted successfully' });
});

// Admin route to get all posts (not just user's)
app.get('/admin/posts', authMiddleware, isAdmin, async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('author', 'name email role')
      .sort({ createdAt: -1 });
    
    res.json({
      count: posts.length,
      posts: posts
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`,
        },
        {
          id: "ex-8-2",
          title: "User Profile with Role Display",
          description:
            "Create a user profile that shows different information based on role",
          task: `Create a user profile system where:
1. Users can see their own profile with all details
2. Members can only see basic info of other users
3. Admins can see all details of any user
4. Add a simple "role badge" to the profile

Implement this in the /profile/:id route.`,
          hint: "Check if req.user._id === req.params.id to see if it's their own profile",
          solution: `app.get('/profile/:id?', authMiddleware, async (req, res) => {
  try {
    const userId = req.params.id || req.user._id;
    const user = await User.findById(userId).select('-password');
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    // Check if viewing own profile
    const isOwnProfile = req.user._id.toString() === userId.toString();
    const isAdmin = req.user.role === 'admin';
    
    // Basic info everyone can see
    const profileData = {
      id: user._id,
      name: user.name,
      role: user.role,
      roleBadge: user.role === 'admin' ? '👑 Admin' : '👤 Member',
      createdAt: user.createdAt
    };
    
    // Only show email and detailed info to self or admins
    if (isOwnProfile || isAdmin) {
      profileData.email = user.email;
      profileData.isOwnProfile = isOwnProfile;
      profileData.canEdit = true;
      
      // Admins see extra info
      if (isAdmin && !isOwnProfile) {
        profileData.isAdminViewing = true;
      }
    }
    
    res.json(profileData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`,
        },
      ],
      quiz: [
        {
          question:
            "What is the main difference between authentication and authorization?",
          options: [
            "Authentication is for checking passwords, authorization is for checking usernames",
            "Authentication verifies WHO you are, authorization verifies WHAT you can do",
            "Authentication is for admins only, authorization is for all users",
            "They mean the same thing",
          ],
          correct: 1,
          explanation:
            "Authentication confirms your identity (login), while authorization determines your permissions (what features you can access).",
        },
        {
          question:
            "In our user model, what is the default role for new users?",
          options: ["admin", "member", "moderator", "guest"],
          correct: 1,
          explanation:
            "We set the default role to 'member' in our user schema: default: 'member'.",
        },
        {
          question:
            "What HTTP status code should you return when a non-admin tries to access an admin-only route?",
          options: [
            "200 - OK",
            "401 - Unauthorized",
            "403 - Forbidden",
            "404 - Not Found",
          ],
          correct: 2,
          explanation:
            "403 - Forbidden is the correct status when a user is authenticated but doesn't have permission to access a resource.",
        },
      ],
      commonMistakes: [
        {
          mistake: "Forgetting to check authentication before authorization",
          solution:
            "Always use authMiddleware BEFORE role-checking middleware: app.get('/admin', authMiddleware, isAdmin, handler)",
        },
        {
          mistake: "Hardcoding user IDs instead of using req.user",
          solution:
            "Always get the current user from req.user (set by authMiddleware) not from request body",
        },
        {
          mistake: "Not using .toString() when comparing ObjectIds",
          solution:
            "MongoDB ObjectIds need to be converted to strings: post.author.toString() === req.user._id.toString()",
        },
      ],
      nextSteps: [
        "Try adding a 'moderator' role with specific permissions",
        "Create a user management page for admins",
        "Add role-based UI elements in your frontend",
        "Implement permission levels (e.g., moderator can edit but not delete)",
      ],
    },

    {
  id: "module-9",
  title: "Module 9: File Uploads with Multer",
  duration: "1 hour",
  objectives: [
    "Understand what Multer is and how it works",
    "Configure Multer for file uploads",
    "Implement secure file validation",
    "Handle single and multiple file uploads",
  ],
  lessons: [
    {
      id: "what-is-multer",
      title: "What is Multer?",
      type: "theory",
      content: {
        paragraphs: [
          "Multer is middleware for handling multipart/form-data, which is primarily used for uploading files in Express.",
          "It processes files before they reach your route handlers, making file uploads much easier.",
        ],
        keyPoints: [
          "Handles file uploads in Express",
          "Processes multipart/form-data",
          "Can store files on disk or in memory",
          "Includes file validation options",
        ],
        analogy: {
          title: "The Post Office Analogy",
          scenarios: [
            {
              situation: "Regular Forms (JSON)",
              explanation: "Like sending a letter - just text content in an envelope",
            },
            {
              situation: "File Uploads with Multer",
              explanation: "Like sending a package - can contain files, images, documents along with text",
            },
          ],
        },
        keyConcepts: [
          {
            term: "multipart/form-data",
            explanation: "A special format browsers use to send files along with form data",
          },
          {
            term: "Middleware",
            explanation: "Multer sits between the request and your route handler, processing files first",
          },
          {
            term: "Disk Storage",
            explanation: "Saves files to your server's filesystem",
          },
          {
            term: "Memory Storage",
            explanation: "Keeps files in memory (good for processing before saving)",
          },
        ],
      },
    },
    {
      id: "multer-setup",
      title: "Setting Up Multer (ES Modules)",
      type: "practical",
      content: {
        steps: [
          {
            text: "Install Multer package:",
            code: "npm install multer",
          },
          {
            text: "Create uploads directory:",
            code: "mkdir uploads",
          },
        ],
        code: `import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

// ES modules fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Basic Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Store in 'uploads' folder
  },
  filename: (req, file, cb) => {
    // Create unique filename
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});

const upload = multer({ storage: storage });

// Single file upload endpoint
app.post('/upload', upload.single('file'), (req, res) => {
  res.json({
    message: 'File uploaded successfully!',
    file: req.file
  });
});

// Multiple files upload
app.post('/upload-multiple', upload.array('files', 5), (req, res) => {
  res.json({
    message: 'Files uploaded successfully!',
    files: req.files
  });
});

// Mixed upload (single file + fields)
app.post('/upload-mixed', upload.fields([
  { name: 'avatar', maxCount: 1 },
  { name: 'gallery', maxCount: 3 }
]), (req, res) => {
  res.json({
    avatar: req.files['avatar'][0],
    gallery: req.files['gallery']
  });
});`
      },
    },
    {
      id: "file-validation",
      title: "File Validation & Security",
      type: "theory",
      content: {
        description: "Never trust user-uploaded files! Always validate and sanitize them.",
        checklist: [
          {
            item: "✅ Check file types (MIME types)",
            why: "Prevent users from uploading executable files or scripts",
          },
          {
            item: "✅ Limit file size",
            why: "Protect your server from denial-of-service attacks",
          },
          {
            item: "✅ Sanitize filenames",
            why: "Prevent directory traversal attacks",
          },
          {
            item: "✅ Store files outside public directory",
            why: "Control access to uploaded files",
          },
        ],
        commonMistakes: [
          " Allowing any file type without validation",
          " No file size limits",
          " Storing files with original names",
          " Directly serving uploaded files without checks",
        ],
      },
    },
    {
      id: "secure-upload-implementation",
      title: "Secure File Upload Implementation",
      type: "example",
      content: {
        description: "Implement a secure file upload system with proper validation",
        code: `import multer from 'multer';
import path from 'path';

// Allowed file types
const allowedMimeTypes = [
  'image/jpeg', 'image/jpg', 'image/png', 'image/gif',
  'application/pdf', 'text/plain'
];

// File filter function
const fileFilter = (req, file, cb) => {
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true); // Accept file
  } else {
    cb(new Error('Invalid file type. Allowed: JPEG, PNG, GIF, PDF, TXT'), false);
  }
};

// Storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // Sanitize filename
    const sanitizedName = file.originalname
      .toLowerCase()
      .replace(/[^a-z0-9.]/g, '-')
      .replace(/-+/g, '-');
    
    const uniqueName = Date.now() + '-' + sanitizedName;
    cb(null, uniqueName);
  }
});

// Configure multer with limits and validation
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
    files: 5 // Maximum 5 files per request
  }
});

// Profile picture upload endpoint
app.post('/api/profile/picture', 
  authMiddleware,
  upload.single('picture'),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }
      
      // Get file information
      const fileInfo = {
        filename: req.file.filename,
        originalname: req.file.originalname,
        size: req.file.size,
        mimetype: req.file.mimetype,
        path: req.file.path,
        url: \`/uploads/\${req.file.filename}\`
      };
      
      res.json({
        message: 'Profile picture uploaded successfully',
        file: fileInfo
      });
      
    } catch (error) {
      console.error('Upload error:', error);
      res.status(500).json({ 
        error: 'Upload failed',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }
);`
      },
    },
  ],
  exercises: [
    {
      id: "ex-9-1",
      title: "File Upload API with Validation",
      description: "Create a secure file upload API",
      difficulty: "Beginner",
      task: `Create a file upload API that:
1. Accepts only image files (JPEG, PNG, GIF)
2. Limits file size to 3MB
3. Sanitizes filenames
4. Returns file information in response
5. Stores files in 'uploads/' directory

Endpoint: POST /api/upload/image`,
      hint: "Use multer's fileFilter and limits options. Sanitize filenames by removing special characters.",
      solution: `import multer from 'multer';
import path from 'path';

const imageUpload = multer({
  storage: multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
      const sanitized = file.originalname
        .toLowerCase()
        .replace(/[^a-z0-9.]/g, '-')
        .replace(/-+/g, '-');
      cb(null, \`\${Date.now()}-\${sanitized}\`);
    }
  }),
  fileFilter: (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'), false);
    }
  },
  limits: {
    fileSize: 3 * 1024 * 1024
  }
});

app.post('/api/upload/image', 
  imageUpload.single('image'),
  (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    
    res.json({
      success: true,
      file: {
        filename: req.file.filename,
        originalName: req.file.originalname,
        size: req.file.size,
        mimetype: req.file.mimetype,
        url: \`/uploads/\${req.file.filename}\`
      }
    });
  }
);`
    },
  ],
  quiz: [
    {
      question: "What is the primary purpose of Multer?",
      options: [
        "To handle JSON data in requests",
        "To process multipart/form-data for file uploads",
        "To authenticate users",
        "To compress uploaded files",
      ],
      correct: 1,
      explanation: "Multer is specifically designed to handle multipart/form-data, which is used when uploading files through HTML forms.",
    },
    {
      question: "Which Multer method is used for uploading a single file?",
      options: [
        "upload.array()",
        "upload.single()",
        "upload.fields()",
        "upload.any()",
      ],
      correct: 1,
      explanation: "upload.single('fieldname') is used to handle a single file upload from a specific form field.",
    },
  ],
},
{
  id: "module-10",
  title: "Module 10: Image Processing & File Serving",
  duration: "1 hour",
  objectives: [
    "Process images with Sharp library",
    "Optimize images for web use",
    "Serve static files securely",
    "Create responsive image sizes",
  ],
  lessons: [
    {
      id: "image-processing-sharp",
      title: "Image Processing with Sharp",
      type: "practical",
      content: {
        steps: [
          {
            text: "Install Sharp package:",
            code: "npm install sharp",
          },
        ],
        code: `import sharp from 'sharp';
import fs from 'fs/promises';

// Basic image optimization
app.post('/api/upload/optimize', async (req, res) => {
  try {
    // Assuming file is already uploaded via multer
    const inputPath = req.file.path;
    const outputPath = \`uploads/optimized-\${req.file.filename}\`;
    
    // Resize and convert to webp
    await sharp(inputPath)
      .resize(800, 600, {
        fit: 'inside',       // Fit within dimensions
        withoutEnlargement: true // Don't enlarge small images
      })
      .toFormat('webp', {
        quality: 80,         // Good quality with compression
        effort: 6            // Compression effort (0-6)
      })
      .toFile(outputPath);
    
    // Get file sizes
    const originalStats = await fs.stat(inputPath);
    const optimizedStats = await fs.stat(outputPath);
    const savings = Math.round((1 - optimizedStats.size / originalStats.size) * 100);
    
    res.json({
      originalSize: originalStats.size,
      optimizedSize: optimizedStats.size,
      savings: \`\${savings}%\`,
      format: 'webp',
      url: \`/uploads/\${path.basename(outputPath)}\`
    });
    
  } catch (error) {
    res.status(500).json({ error: 'Image processing failed' });
  }
});`
      },
    },
    {
      id: "responsive-images",
      title: "Creating Responsive Image Sizes",
      type: "example",
      content: {
        description: "Generate multiple image sizes for different devices",
        code: `const createResponsiveImages = async (inputPath, baseName) => {
  const sizes = {
    thumbnail: { width: 150, height: 150 },
    medium: { width: 500, height: 500 },
    large: { width: 1200, height: 1200 }
  };
  
  const results = {};
  
  for (const [sizeName, dimensions] of Object.entries(sizes)) {
    const outputPath = \`uploads/\${baseName}-\${sizeName}.webp\`;
    
    await sharp(inputPath)
      .resize(dimensions.width, dimensions.height, {
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality: 80 })
      .toFile(outputPath);
    
    results[sizeName] = {
      path: outputPath,
      url: \`/uploads/\${path.basename(outputPath)}\`,
      width: dimensions.width,
      height: dimensions.height
    };
  }
  
  return results;
};

// Avatar processing example
app.post('/api/avatar', 
  upload.single('avatar'),
  async (req, res) => {
    try {
      const baseName = \`avatar-\${req.user.id}-\${Date.now()}\`;
      const imageSizes = await createResponsiveImages(req.file.path, baseName);
      
      // Delete original file
      await fs.unlink(req.file.path);
      
      res.json({
        message: 'Avatar processed successfully',
        sizes: imageSizes
      });
      
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);`
      },
    },
    {
      id: "serving-files-securely",
      title: "Serving Files Securely",
      type: "example",
      content: {
        description: "Serve uploaded files with proper security headers",
        code: `import express from 'express';
import path from 'path';
import fs from 'fs/promises';

// Serve static files with security headers
app.use('/uploads', express.static('uploads', {
  setHeaders: (res, filePath) => {
    // Security headers
    res.set('Cross-Origin-Resource-Policy', 'same-origin');
    res.set('X-Content-Type-Options', 'nosniff');
    
    // Cache control
    res.set('Cache-Control', 'public, max-age=86400');
    
    // Set proper content type based on extension
    const ext = path.extname(filePath).toLowerCase();
    if (['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext)) {
      res.type(\`image/\${ext === '.jpg' ? 'jpeg' : ext.slice(1)}\`);
    }
  }
}));

// Secure file download endpoint
app.get('/api/files/:filename', authMiddleware, async (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join('uploads', filename);
  
  try {
    // Security check: prevent directory traversal
    if (filename.includes('..') || filename.includes('/')) {
      return res.status(403).json({ error: 'Invalid filename' });
    }
    
    // Check file exists
    await fs.access(filePath);
    
    // Get file stats
    const stats = await fs.stat(filePath);
    
    // Set headers
    res.set('Content-Length', stats.size);
    res.set('Cache-Control', 'public, max-age=86400');
    
    // Stream file
    const fileStream = await fs.createReadStream(filePath);
    fileStream.pipe(res);
    
  } catch (error) {
    if (error.code === 'ENOENT') {
      res.status(404).json({ error: 'File not found' });
    } else {
      res.status(500).json({ error: 'Server error' });
    }
  }
});`
      },
    },
  ],
  exercises: [
    {
      id: "ex-10-1",
      title: "Image Optimization API",
      description: "Create an API that optimizes uploaded images",
      difficulty: "Intermediate",
      task: `Build an image optimization API that:
1. Accepts image uploads
2. Creates three sizes: thumbnail (150x150), medium (500x500), large (1200x1200)
3. Converts images to WebP format
4. Returns URLs for all sizes
5. Deletes the original file after processing`,
      hint: "Use Sharp's resize() and toFormat() methods. Process images in parallel with Promise.all().",
      solution: `import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const processImageSizes = async (inputPath, prefix) => {
  const sizes = [
    { name: 'thumbnail', width: 150, height: 150 },
    { name: 'medium', width: 500, height: 500 },
    { name: 'large', width: 1200, height: 1200 }
  ];
  
  const results = {};
  
  await Promise.all(sizes.map(async (size) => {
    const outputFilename = \`\${prefix}-\${size.name}.webp\`;
    const outputPath = path.join('uploads', outputFilename);
    
    await sharp(inputPath)
      .resize(size.width, size.height, {
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality: 80 })
      .toFile(outputPath);
    
    results[size.name] = {
      url: \`/uploads/\${outputFilename}\`,
      width: size.width,
      height: size.height
    };
  }));
  
  return results;
};

app.post('/api/images/optimize', 
  upload.single('image'),
  async (req, res) => {
    try {
      const prefix = \`img-\${Date.now()}\`;
      const optimizedSizes = await processImageSizes(req.file.path, prefix);
      
      // Delete original
      await fs.unlink(req.file.path);
      
      res.json({
        message: 'Image processed successfully',
        sizes: optimizedSizes
      });
      
    } catch (error) {
      res.status(500).json({ error: 'Processing failed' });
    }
  }
);`
    },
  ],
},{
  id: "module-11",
  title: "Module 11: CORS & Production Deployment",
  duration: "1 hour",
  objectives: [
    "Understand CORS and configure it properly",
    "Implement production-ready file uploads",
    "Deploy file upload applications",
    "Monitor and maintain upload systems",
  ],
  lessons: [
    {
      id: "what-is-cors",
      title: "What is CORS?",
      type: "theory",
      content: {
        description: "CORS (Cross-Origin Resource Sharing) is a security feature that controls which domains can access your API.",
        analogy: {
          title: "The Club Membership Analogy",
          scenarios: [
            {
              situation: "Without CORS",
              explanation: "Like a private club - only members from this location (origin) can enter",
            },
            {
              situation: "With CORS configured",
              explanation: "Like a club with a guest list - specific external guests (origins) are allowed",
            },
          ],
        },
        keyConcepts: [
          {
            term: "Origin",
            explanation: "The combination of protocol, domain, and port (e.g., http://localhost:3000)",
          },
          {
            term: "Same-Origin Policy",
            explanation: "Browser security rule: blocks requests from different origins",
          },
          {
            term: "Preflight Request",
            explanation: "OPTIONS request that checks if the actual request is allowed",
          },
        ],
      },
    },
    {
      id: "cors-configuration",
      title: "CORS Configuration in Express",
      type: "example",
      content: {
        description: "Configure CORS to allow your frontend to communicate with your backend",
        code: `import cors from 'cors';

// Option 1: Allow specific origins (RECOMMENDED)
const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, Postman)
    if (!origin) return callback(null, true);
    
    // List of allowed origins
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:5173',
      process.env.CLIENT_URL,        // From environment variable
      process.env.ADMIN_URL          // Admin panel URL
    ].filter(Boolean); // Remove undefined values
    
    if (allowedOrigins.includes(origin) || process.env.NODE_ENV === 'development') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: true, // Allow cookies/auth headers
  maxAge: 86400, // Cache preflight response for 24 hours
};

app.use(cors(corsOptions));

// Option 2: Route-specific CORS
app.get('/api/public/data', cors(), (req, res) => {
  res.json({ message: 'Public data accessible from anywhere' });
});

app.get('/api/private/data', cors(corsOptions), authMiddleware, (req, res) => {
  res.json({ message: 'Private data with CORS restrictions' });
});

// Handle preflight requests
app.options('*', cors(corsOptions));`
      },
    },
    {
      id: "production-file-uploads",
      title: "Production File Upload Setup",
      type: "theory",
      content: {
        description: "Important considerations for production file uploads",
        checklist: [
          {
            item: "✅ Use cloud storage (AWS S3, Cloudinary, etc.)",
            why: "More scalable and reliable than local filesystem",
          },
          {
            item: "✅ Implement rate limiting",
            why: "Prevent abuse and DoS attacks",
          },
          {
            item: "✅ Add file virus scanning",
            why: "Protect your server and users",
          },
          {
            item: "✅ Set up automated cleanup",
            why: "Prevent disk space exhaustion",
          },
          {
            item: "✅ Use environment variables",
            why: "Separate configuration from code",
          },
        ],
        productionCode: `import multerS3 from 'multer-s3';
import AWS from 'aws-sdk';
import multer from 'multer';

// Configure AWS S3
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

// Configure Multer for S3
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.S3_BUCKET_NAME,
    acl: 'public-read',
    key: (req, file, cb) => {
      const fileName = \`\${Date.now()}-\${file.originalname}\`;
      cb(null, fileName);
    }
  }),
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB
  }
});

// Upload to S3
app.post('/api/upload/s3', 
  upload.single('file'),
  (req, res) => {
    // req.file.location contains the S3 URL
    res.json({
      url: req.file.location,
      key: req.file.key,
      size: req.file.size
    });
  }
);`
      },
    },
    {
      id: "rate-limiting-uploads",
      title: "Rate Limiting for File Uploads",
      type: "example",
      content: {
        description: "Prevent abuse by limiting upload frequency",
        code: `import rateLimit from 'express-rate-limit';

// Rate limiter for uploads
const uploadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 10, // 10 uploads per 15 minutes
  message: 'Too many upload attempts. Please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => req.ip // Limit by IP address
});

// Per-user rate limiting
const userUploadLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  limit: 50, // 50 uploads per hour per user
  message: 'You have exceeded the upload limit. Try again in an hour.',
  keyGenerator: (req) => req.user?.id || req.ip // Use user ID if authenticated
});

// Apply to upload routes
app.post('/api/upload', uploadLimiter, upload.single('file'), handler);
app.post('/api/user/upload', authMiddleware, userUploadLimiter, upload.single('file'), handler);`
      },
    },
  ],
  exercises: [
    {
      id: "ex-11-1",
      title: "Complete Upload System with CORS",
      description: "Build a production-ready file upload system",
      difficulty: "Advanced",
      task: `Create a complete file upload system with:
1. CORS configuration for specific origins
2. Rate limiting (5 uploads per hour per user)
3. File validation (images only, max 5MB)
4. Image optimization (convert to WebP, create thumbnails)
5. Secure file serving with proper headers

Environment variables needed:
- CLIENT_URL (your frontend URL)
- ALLOWED_ORIGINS (comma-separated list)
- UPLOAD_LIMIT_PER_HOUR`,
      hint: "Use environment variables for configuration. Implement both IP-based and user-based rate limiting.",
      solution: `import cors from 'cors';
import rateLimit from 'express-rate-limit';
import multer from 'multer';
import sharp from 'sharp';
import fs from 'fs/promises';

// CORS configuration
const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS?.split(',') || [
    'http://localhost:3000',
    'http://localhost:5173'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

// Rate limiting
const uploadRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: parseInt(process.env.UPLOAD_LIMIT_PER_HOUR) || 5,
  message: 'Upload limit exceeded. Try again in an hour.',
  keyGenerator: (req) => req.user?.id || req.ip
});

// Multer configuration
const upload = multer({
  storage: multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
      cb(null, \`\${Date.now()}-\${file.originalname}\`);
    }
  }),
  fileFilter: (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only JPEG and PNG images allowed'), false);
    }
  },
  limits: { fileSize: 5 * 1024 * 1024 }
});

// Upload endpoint with all features
app.post('/api/secure-upload',
  authMiddleware,
  uploadRateLimit,
  upload.single('image'),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }
      
      // Create thumbnail
      const thumbnailPath = \`uploads/thumb-\${req.file.filename}\`;
      await sharp(req.file.path)
        .resize(200, 200, { fit: 'cover' })
        .webp({ quality: 70 })
        .toFile(thumbnailPath);
      
      // Optimize main image
      const optimizedPath = \`uploads/opt-\${req.file.filename}\`;
      await sharp(req.file.path)
        .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(optimizedPath);
      
      // Delete original
      await fs.unlink(req.file.path);
      
      res.json({
        success: true,
        images: {
          thumbnail: \`/uploads/\${path.basename(thumbnailPath)}\`,
          optimized: \`/uploads/\${path.basename(optimizedPath)}\`
        }
      });
      
    } catch (error) {
      // Cleanup on error
      if (req.file?.path) {
        try { await fs.unlink(req.file.path); } catch {}
      }
      res.status(500).json({ error: 'Upload failed' });
    }
  }
);`
    },
  ],
  quiz: [
    {
      question: "What is the purpose of CORS in a web application?",
      options: [
        "To compress API responses",
        "To control which domains can access your API",
        "To authenticate users",
        "To cache static files",
      ],
      correct: 1,
      explanation: "CORS (Cross-Origin Resource Sharing) controls which external domains can make requests to your API, following browser security policies.",
    },
    {
      question: "Why should you use cloud storage instead of local filesystem for uploads in production?",
      options: [
        "It's always free",
        "It's more scalable, reliable, and secure",
        "It requires less code",
        "It works faster on all devices",
      ],
      correct: 1,
      explanation: "Cloud storage services provide better scalability, reliability, and security features compared to local filesystem storage.",
    },
  ],
  productionChecklist: [
    "✅ Configure environment variables for all secrets",
    "✅ Implement proper CORS with production domains",
    "✅ Add rate limiting to prevent abuse",
    "✅ Use cloud storage for file persistence",
    "✅ Set up monitoring and logging",
    "✅ Implement automated cleanup of old files",
    "✅ Add virus scanning for uploaded files",
    "✅ Use HTTPS for all file transfers",
  ],
},
    {
      id: "module-12",
      title: "Module 12: Deployment & Best Practices",
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
          id: "ex-12-1",
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
