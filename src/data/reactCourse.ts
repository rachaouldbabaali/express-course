// filepath: src/data/reactCourse.ts
export const reactCourse = {
  slug: "react-fundamentals",
  title: "React Fundamentals",
  description: "Learn React from scratch - build modern web applications with components, hooks, and state management.",
  level: "Beginner",
  duration: "8-10 hours",
  prerequisites: ["Basic HTML/CSS knowledge", "Basic JavaScript knowledge (ES6+)"],
  sections: [
    {
      id: "module-1",
      title: "Module 1: React Basics & First App",
      duration: "1 hour",
      objectives: [
        "Understand what React is and why it's popular",
        "Set up development environment",
        "Create your first React component",
        "Understand JSX syntax",
      ],
      lessons: [
        {
          id: "what-is-react",
          title: "What is React?",
          type: "theory",
          content: {
            paragraphs: [
              "React is a JavaScript library for building user interfaces, created by Facebook. It lets you build complex UIs from small, reusable pieces called components.",
              "Think of React like LEGO blocks - you build small pieces (components) and combine them to create complex applications."
            ],
            keyPoints: [
              "Component-based architecture",
              "Declarative (you describe WHAT you want, React handles HOW)",
              "Virtual DOM for performance",
              "One-way data flow",
            ],
            analogy: {
              title: "The Restaurant Menu Analogy",
              scenarios: [
                {
                  situation: "Traditional Websites (Imperative)",
                  explanation: "Like telling a chef every single step: 'Chop onions, heat pan, add oil, cook onions...'"
                },
                {
                  situation: "React (Declarative)",
                  explanation: "Like ordering from a menu: 'I want a burger with fries' - the kitchen (React) handles the details"
                }
              ]
            }
          }
        },
        {
          id: "setup-environment",
          title: "Setting Up React Environment",
          type: "practical",
          content: {
            steps: [
              {
                text: "Install Node.js and npm:",
                code: "# Download from nodejs.org\n# Verify installation:\nnode --version\nnpm --version"
              },
              {
                text: "Create React App (the easiest way to start):",
                code: "npx create-react-app my-first-app\ncd my-first-app\nnpm start"
              },
              {
                text: "Project Structure Overview:",
                code: `my-first-app/
├── node_modules/     # Dependencies
├── public/          # Static files
│   └── index.html   # Main HTML file
├── src/             # Source code
│   ├── App.js       # Main component
│   ├── index.js     # Entry point
│   └── index.css    # Styles
├── package.json     # Project config
└── README.md`
              }
            ]
          }
        },
        {
          id: "first-component",
          title: "Your First React Component",
          type: "example",
          content: {
            description: "Create a simple component that displays a welcome message",
            code: `// App.js - Your first component
function App() {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <p>Welcome to your first React application.</p>
    </div>
  );
}

export default App;`
          }
        },
        {
          id: "understanding-jsx",
          title: "Understanding JSX",
          type: "theory",
          content: {
            paragraphs: [
              "JSX (JavaScript XML) is a syntax extension that looks like HTML but works inside JavaScript. It makes writing React components easier and more readable.",
              "JSX gets compiled to regular JavaScript function calls behind the scenes."
            ],
            comparison: {
              jsx: `<h1 className="title">Hello World</h1>`,
              javascript: `React.createElement('h1', { className: 'title' }, 'Hello World')`
            },
            rules: [
              "JSX must have a single parent element (use <div> or <> (Fragment))",
              "Use className instead of class",
              "Use camelCase for attributes (onClick, not onclick)",
              "JavaScript expressions go inside {}",
              "Close all tags (<br /> not <br>)"
            ]
          }
        }
      ],
      exercises: [
        {
          id: "ex-1-1",
          title: "Personal Profile Component",
          description: "Create a component that displays your personal information",
          task: `Create a component that shows:
1. Your name as an <h1>
2. A short bio in a <p> tag
3. Your location in a <span> with className="location"
4. A list of 3 hobbies using <ul> and <li>`,
          hint: "Remember to wrap everything in a single parent element. Use className for styling.",
          solution: `function Profile() {
  return (
    <div className="profile">
      <h1>Alex Johnson</h1>
      <p>Frontend developer passionate about creating beautiful web experiences.</p>
      <span className="location">📍 New York, NY</span>
      <h2>Hobbies:</h2>
      <ul>
        <li>🎸 Playing guitar</li>
        <li>📚 Reading tech blogs</li>
        <li>🚴 Cycling</li>
      </ul>
    </div>
  );
}`
        }
      ],
      quiz: [
        {
          question: "What is React primarily used for?",
          options: [
            "Backend server programming",
            "Building user interfaces",
            "Database management",
            "Mobile app development only"
          ],
          correct: 1
        },
        {
          question: "What command creates a new React app?",
          options: [
            "react create-app",
            "npm create react",
            "npx create-react-app",
            "node new-react"
          ],
          correct: 2
        }
      ]
    },

    {
      id: "module-2",
      title: "Module 2: Components & Props",
      duration: "1.5 hours",
      objectives: [
        "Create reusable components",
        "Understand props (component parameters)",
        "Pass data between components",
        "Use props for dynamic content"
      ],
      lessons: [
        {
          id: "component-types",
          title: "Two Ways to Write Components",
          type: "theory",
          content: {
            paragraphs: [
              "React components can be written as functions or classes. Function components are simpler and recommended for beginners.",
              "Think of components like custom HTML tags that you can reuse."
            ],
            comparison: {
              functionComponent: `// Function Component (modern way)
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
              classComponent: `// Class Component (older way)
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`
            },
            recommendation: "Use function components with hooks (we'll learn hooks later!)"
          }
        },
        {
          id: "creating-components",
          title: "Creating Reusable Components",
          type: "example",
          content: {
            description: "Create a Button component that can be reused with different text",
            code: `// Button.js - A reusable button component
function Button(props) {
  return (
    <button className="btn">
      {props.text}
    </button>
  );
}

// Using the Button component
function App() {
  return (
    <div>
      <Button text="Click Me!" />
      <Button text="Submit" />
      <Button text="Cancel" />
    </div>
  );
}`
          }
        },
        {
          id: "understanding-props",
          title: "Understanding Props",
          type: "theory",
          content: {
            description: "Props are like function parameters for components",
            analogy: {
              title: "The Coffee Shop Analogy",
              scenarios: [
                {
                  situation: "Without Props",
                  explanation: "Every coffee is the same - always a black coffee"
                },
                {
                  situation: "With Props",
                  explanation: "You can order different coffees: 'large latte', 'small cappuccino', 'medium americano'"
                }
              ]
            },
            rules: [
              "Props are READ-ONLY (components can't change their own props)",
              "Props are passed from parent to child",
              "Use {} to insert JavaScript values in JSX",
              "Destructure props for cleaner code"
            ]
          }
        },
        {
          id: "props-in-action",
          title: "Props in Action",
          type: "example",
          content: {
            description: "Create a UserCard component that displays user information",
            code: `// UserCard.js
function UserCard(props) {
  return (
    <div className="user-card">
      <img src={props.avatar} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
      <span>Age: {props.age}$</span>
    </div>
  );
}

// App.js - Using UserCard with different data
function App() {
  return (
    <div className="app">
      <UserCard 
        name="Sarah Chen"
        avatar="https://example.com/sarah.jpg"
        bio="Software engineer at TechCorp"
        age={28}
      />
      <UserCard 
        name="Mike Johnson"
        avatar="https://example.com/mike.jpg"
        bio="UX Designer passionate about accessibility"
        age={32}
      />
    </div>
  );
}`
          }
        },
        {
          id: "destructuring-props",
          title: "Cleaner Code with Destructuring",
          type: "example",
          content: {
            description: "Use destructuring to make your component code cleaner",
            code: `// Before: Accessing props directly
function ProductCard(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  );
}

// After: Using destructuring
function ProductCard({ name, price, category }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: {price}$</p>
      <p>Category: {category}</p>
    </div>
  );
}

// Usage with default values
function ProductCard({ 
  name = "Unknown Product", 
  price = 0, 
  category = "General" 
}) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: {price}$</p>
      <p>Category: {category}</p>
    </div>
  );
}`
          }
        }
      ],
      exercises: [
        {
          id: "ex-2-1",
          title: "Product Card Component",
          description: "Create a reusable product card component",
          task: `Create a ProductCard component that displays:
1. Product name
2. Price
3. Category
4. Image
5. A "Buy Now" button

Use the component to display 3 different products.`,
          hint: "Create a separate ProductCard component file. Pass data via props.",
          solution: `// ProductCard.js
function ProductCard({ name, price, category, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="price">{price}$</p>
      <p className="category">{category}</p>
      <button className="buy-btn">Buy Now</button>
    </div>
  );
}

// App.js
function App() {
  return (
    <div className="products">
      <ProductCard
        name="Wireless Headphones"
        price={99.99}
        category="Electronics"
        image="/headphones.jpg"
      />
      <ProductCard
        name="Coffee Mug"
        price={19.99}
        category="Home & Kitchen"
        image="/mug.jpg"
      />
      <ProductCard
        name="Desk Lamp"
        price={49.99}
        category="Home Office"
        image="/lamp.jpg"
      />
    </div>
  );
}`
        },
        {
          id: "ex-2-2",
          title: "Team Member Directory",
          description: "Create a team directory using components and props",
          task: `Create a TeamMember component and use it to display:
- 4 team members
- Each with: name, role, email, and bio
- Add a button to contact each member`,
          solution: `function TeamMember({ name, role, email, bio }) {
  return (
    <div className="team-member">
      <h3>{name}</h3>
      <p className="role">{role}</p>
      <p className="bio">{bio}</p>
      <a href={\`mailto:\${email}\`} className="contact-btn">
        Contact {name.split(' ')[0]}
      </a>
    </div>
  );
}

function App() {
  const team = [
    {
      name: "Alice Zhang",
      role: "CEO",
      email: "alice@company.com",
      bio: "10+ years in tech leadership"
    },
    {
      name: "Bob Smith",
      role: "CTO",
      email: "bob@company.com",
      bio: "Expert in cloud architecture"
    },
    // Add 2 more team members...
  ];

  return (
    <div className="team">
      {team.map((member, index) => (
        <TeamMember
          key={index}
          name={member.name}
          role={member.role}
          email={member.email}
          bio={member.bio}
        />
      ))}
    </div>
  );
}`
        }
      ]
    },

    {
      id: "module-3",
      title: "Module 3: State & Interactivity",
      duration: "2 hours",
      objectives: [
        "Understand what state is in React",
        "Use the useState hook",
        "Handle user events (clicks, input)",
        "Create interactive components"
      ],
      lessons: [
        {
          id: "what-is-state",
          title: "What is State?",
          type: "theory",
          content: {
            description: "State is data that can change over time in your component",
            analogy: {
              title: "The Light Switch Analogy",
              scenarios: [
                {
                  situation: "Props",
                  explanation: "Like the color of the switch plate - fixed when installed"
                },
                {
                  situation: "State",
                  explanation: "Like whether the light is ON or OFF - changes when you flip the switch"
                }
              ]
            },
            examples: [
              "Form input values",
              "Toggle switches (on/off)",
              "Counter values",
              "Loading status",
              "User authentication status"
            ],
            rules: [
              "State is mutable (can change)",
              "Changing state triggers re-render",
              "Use useState hook for state",
              "Never modify state directly"
            ]
          }
        },
        {
          id: "useState-hook",
          title: "The useState Hook",
          type: "example",
          content: {
            description: "Learn to use useState to add state to your components",
            code: `import { useState } from 'react';

function Counter() {
  // Declare state variable 'count' with initial value 0
  // 'setCount' is the function to update count
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

// How it works:
// 1. useState(0) → returns [0, setFunction]
// 2. count = 0 (current state)
// 3. setCount(5) → updates count to 5
// 4. Component re-renders with new count`
          }
        },
        {
          id: "state-examples",
          title: "Common State Examples",
          type: "example",
          content: {
            description: "See different use cases for state in React",
            examples: [
              {
                title: "Toggle Switch",
                code: `function Toggle() {
  const [isOn, setIsOn] = useState(false);
  
  return (
    <div>
      <p>The light is {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={() => setIsOn(!isOn)}>
        Turn {isOn ? 'OFF' : 'ON'}
      </button>
    </div>
  );
}`
              },
              {
                title: "Form Input",
                code: `function NameForm() {
  const [name, setName] = useState('');
  
  return (
    <div>
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Hello, {name || 'stranger'}!</p>
    </div>
  );
}`
              },
              {
                title: "Todo Item",
                code: `function TodoItem() {
  const [completed, setCompleted] = useState(false);
  
  return (
    <div className={\`todo-item \${completed ? 'completed' : ''}\`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => setCompleted(!completed)}
      />
      <span>Learn React hooks</span>
    </div>
  );
}`
              }
            ]
          }
        },
        {
          id: "event-handling",
          title: "Handling Events in React",
          type: "example",
          content: {
            description: "Learn how to handle user interactions",
            comparison: {
              html: `<button onclick="handleClick()">Click me</button>`,
              react: `<button onClick={handleClick}>Click me</button>`
            },
            commonEvents: [
              "onClick - mouse clicks",
              "onChange - form inputs",
              "onSubmit - form submission",
              "onMouseEnter/onMouseLeave - hover effects",
              "onKeyDown - keyboard input"
            ],
            code: `function EventExamples() {
  const [text, setText] = useState('');
  const [clicks, setClicks] = useState(0);
  
  const handleClick = () => {
    setClicks(clicks + 1);
    console.log('Button clicked!');
  };
  
  const handleChange = (event) => {
    setText(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted: ' + text);
  };
  
  return (
    <div>
      <button onClick={handleClick}>
        Clicked {clicks} times
      </button>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Type something"
        />
        <button type="submit">Submit</button>
      </form>
      
      <p onMouseEnter={() => console.log('Mouse entered!')}>
        Hover over me
      </p>
    </div>
  );
}`
          }
        }
      ],
      exercises: [
        {
          id: "ex-3-1",
          title: "Counter with Multiple Buttons",
          description: "Create a counter with increment, decrement, and reset",
          task: `Create a counter component with:
1. Display current count
2. + button to increment
3. - button to decrement
4. Reset button to set count to 0
5. Don't allow negative numbers`,
          hint: "Use conditional logic to disable decrement button when count is 0.",
          solution: `function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => setCount(0);
  
  return (
    <div className="counter">
      <h2>Count: {count}</h2>
      <div className="buttons">
        <button onClick={increment}>+</button>
        <button onClick={decrement} disabled={count === 0}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
      <p>{count === 0 ? 'Start counting!' : 'Keep going!'}</p>
    </div>
  );
}`
        },
        {
          id: "ex-3-2",
          title: "Toggle Theme Component",
          description: "Create a theme switcher (light/dark mode)",
          task: `Build a theme switcher that:
1. Toggles between light and dark mode
2. Shows current theme
3. Changes background color
4. Has an icon that changes with theme`,
          solution: `function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  const themeStyles = {
    backgroundColor: isDarkMode ? '#333' : '#fff',
    color: isDarkMode ? '#fff' : '#333',
    padding: '20px',
    borderRadius: '8px',
    transition: 'all 0.3s ease'
  };
  
  return (
    <div style={themeStyles}>
      <h2>{isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}</h2>
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
      <p>Current theme: {isDarkMode ? 'Dark' : 'Light'}</p>
    </div>
  );
}`
        },
        {
          id: "ex-3-3",
          title: "Shopping Cart Item",
          description: "Create an interactive shopping cart item",
          task: `Create a cart item component with:
1. Product name and price
2. Quantity selector (increase/decrease)
3. Total price calculation
4. Remove button
5. Disable decrease when quantity is 1`,
          solution: `function CartItem({ name, price, onRemove }) {
  const [quantity, setQuantity] = useState(1);
  
  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const total = price * quantity;
  
  return (
    <div className="cart-item">
      <div className="item-info">
        <h3>{name}</h3>
        <p>Price: {price}$</p>
      </div>
      
      <div className="quantity-controls">
        <button onClick={decreaseQty} disabled={quantity === 1}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQty}>+</button>
      </div>
      
      <div className="item-total">
        <p>Total: {total.toFixed(2)}$</p>
        <button onClick={onRemove} className="remove-btn">
          Remove
        </button>
      </div>
    </div>
  );
}`
        }
      ]
    },

    {
      id: "module-4",
      title: "Module 4: Lists & Conditional Rendering",
      duration: "1.5 hours",
      objectives: [
        "Render lists of data",
        "Use the map() function",
        "Understand keys in lists",
        "Show/hide content conditionally",
        "Render different UIs based on state"
      ],
      lessons: [
        {
          id: "rendering-lists",
          title: "Rendering Lists with map()",
          type: "theory",
          content: {
            description: "Use JavaScript's map() function to render lists of components",
            analogy: {
              title: "The Factory Assembly Line",
              description: "Think of map() as a factory that takes raw data (array) and produces components (products)"
            },
            code: `// Example: Rendering a list of names
const names = ['Alice', 'Bob', 'Charlie', 'Diana'];

function NameList() {
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}

// How it works:
// 1. names.map() loops through each name
// 2. For each name, creates an <li> element
// 3. key={index} helps React identify items
// 4. Returns array of <li> elements`
          }
        },
        {
          id: "keys-in-lists",
          title: "Understanding Keys",
          type: "theory",
          content: {
            description: "Keys help React identify which items have changed, been added, or removed",
            analogy: {
              title: "Student ID Numbers",
              description: "Keys are like student ID numbers - they uniquely identify each student, even if names are similar"
            },
            rules: [
              "Keys should be unique among siblings",
              "Use stable IDs when possible (from database)",
              "Index can be used as last resort",
              "Keys only need to be unique in the same list"
            ],
            badExample: `// Problem: No key
{items.map(item => <li>{item.name}</li>)}`,
            goodExample: `// Solution: Add key
{items.map(item => <li key={item.id}>{item.name}</li>)}`
          }
        },
        {
          id: "list-examples",
          title: "List Rendering Examples",
          type: "example",
          content: {
            description: "Different ways to render lists in React",
            examples: [
              {
                title: "Todo List",
                code: `function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: true },
    { id: 3, text: 'Deploy to netlify', completed: false }
  ]);
  
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
}`
              },
              {
                title: "Product Grid",
                code: `function ProductGrid() {
  const products = [
    { id: 'p1', name: 'Laptop', price: 999 },
    { id: 'p2', name: 'Mouse', price: 25 },
    { id: 'p3', name: 'Keyboard', price: 75 }
  ];
  
  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>{product.price}$</p>
        </div>
      ))}
    </div>
  );
}`
              }
            ]
          }
        },
        {
          id: "conditional-rendering",
          title: "Conditional Rendering",
          type: "theory",
          content: {
            description: "Show different content based on conditions",
            methods: [
              {
                name: "if/else statements",
                code: `function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign in.</h1>;
  }
}`
              },
              {
                name: "Ternary operator",
                code: `function Notification({ hasNewMessage }) {
  return (
    <div>
      {hasNewMessage ? (
        <p>You have new messages!</p>
      ) : (
        <p>No new messages.</p>
      )}
    </div>
  );
}`
              },
              {
                name: "Logical && operator",
                code: `function ShoppingCart({ items }) {
  return (
    <div>
      {items.length > 0 && (
        <p>You have {items.length} items in cart.</p>
      )}
    </div>
  );
}`
              },
              {
                name: "Early return",
                code: `function UserProfile({ user }) {
  if (!user) {
    return <p>Loading user data...</p>;
  }
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}`
              }
            ]
          }
        },
        {
          id: "conditional-examples",
          title: "Conditional Rendering Examples",
          type: "example",
          content: {
            description: "Practical examples of conditional rendering",
            examples: [
              {
                title: "Loading State",
                code: `function DataDisplay({ data, isLoading }) {
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  
  if (!data) {
    return <div className="error">No data available</div>;
  }
  
  return (
    <div className="data">
      <h2>{data.title}</h2>
      <p>{data.content}</p>
    </div>
  );
}`
              },
              {
                title: "Auth Display",
                code: `function Dashboard({ user }) {
  const isAdmin = user?.role === 'admin';
  
  return (
    <div>
      <h1>Dashboard</h1>
      
      {/* Always show */}
      <p>Welcome, {user.name}!</p>
      
      {/* Show for all users */}
      {user && <UserProfile user={user} />}
      
      {/* Show only for admins */}
      {isAdmin && <AdminPanel />}
      
      {/* Show different content based on role */}
      {isAdmin ? (
        <button>Manage Users</button>
      ) : (
        <button>View Profile</button>
      )}
    </div>
  );
}`
              }
            ]
          }
        }
      ],
      exercises: [
        {
          id: "ex-4-1",
          title: "Student Roster",
          description: "Create a student roster with filtering",
          task: `Create a student list component that:
1. Displays list of students (name, grade, attendance)
2. Shows only students with attendance > 80%
3. Highlights students with grade A
4. Has toggle to show all students vs filtered`,
          solution: `function StudentRoster() {
  const [showAll, setShowAll] = useState(false);
  
  const students = [
    { id: 1, name: 'Alice', grade: 'A', attendance: 95 },
    { id: 2, name: 'Bob', grade: 'B', attendance: 75 },
    { id: 3, name: 'Charlie', grade: 'A', attendance: 90 },
    { id: 4, name: 'Diana', grade: 'C', attendance: 70 }
  ];
  
  const filteredStudents = showAll 
    ? students 
    : students.filter(s => s.attendance > 80);
  
  return (
    <div>
      <h2>Student Roster</h2>
      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? 'Show High Attendance Only' : 'Show All Students'}
      </button>
      
      <ul>
        {filteredStudents.map(student => (
          <li 
            key={student.id}
            className={student.grade === 'A' ? 'grade-a' : ''}
          >
            {student.name} - Grade: {student.grade} - Attendance: {student.attendance}%
          </li>
        ))}
      </ul>
      
      <p>Showing {filteredStudents.length} of {students.length} students</p>
    </div>
  );
}`
        },
        {
          id: "ex-4-2",
          title: "Task Manager UI",
          description: "Create a task manager with filtering options",
          task: `Build a task manager that:
1. Shows list of tasks
2. Filter by: All, Active, Completed
3. Show task count
4. Display different messages for empty states`,
          solution: `function TaskManager() {
  const [filter, setFilter] = useState('all');
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Build project', completed: false },
    { id: 3, text: 'Deploy app', completed: false }
  ]);
  
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all'
  });
  
  const activeCount = tasks.filter(t => !t.completed).length;
  const completedCount = tasks.filter(t => t.completed).length;
  
  return (
    <div className="task-manager">
      <div className="filters">
        <button onClick={() => setFilter('all')}>All ({tasks.length})</button>
        <button onClick={() => setFilter('active')}>Active ({activeCount})</button>
        <button onClick={() => setFilter('completed')}>Completed ({completedCount})</button>
      </div>
      
      {filteredTasks.length === 0 ? (
        <p className="empty-state">
          {filter === 'all' && 'No tasks yet. Add one!'}
          {filter === 'active' && 'No active tasks. Great job!'}
          {filter === 'completed' && 'No completed tasks yet.'}
        </p>
      ) : (
        <ul className="task-list">
          {filteredTasks.map(task => (
            <li key={task.id} className={task.completed ? 'completed' : ''}>
              {task.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}`
        }
      ]
    },

    {
      id: "module-5",
      title: "Module 5: Forms & User Input",
      duration: "1.5 hours",
      objectives: [
        "Create controlled form components",
        "Handle form submission",
        "Validate form inputs",
        "Create multi-step forms",
        "Handle multiple inputs efficiently"
      ],
      lessons: [
        {
          id: "controlled-components",
          title: "Controlled Components",
          type: "theory",
          content: {
            description: "In React, form inputs should be controlled by React state",
            comparison: {
              uncontrolled: `// Uncontrolled (traditional HTML)
<input type="text" />`,
              controlled: `// Controlled (React way)
const [value, setValue] = useState('');
<input 
  type="text" 
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`
            },
            benefits: [
              "React state becomes the single source of truth",
              "Easy to validate and transform input",
              "Can control form behavior programmatically",
              "Easier to implement features like reset/undo"
            ]
          }
        },
        {
          id: "basic-form",
          title: "Basic Form Implementation",
          type: "example",
          content: {
            description: "Create a simple registration form",
            code: `function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Send data to server here
  };
  
  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          minLength="6"
        />
      </div>
      
      <button type="submit">Register</button>
    </form>
  );
}`
          }
        },
        {
          id: "form-validation",
          title: "Form Validation",
          type: "example",
          content: {
            description: "Add validation to your forms",
            code: `function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Login successful!');
    } catch (error) {
      alert('Login failed');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <span className="error-text">{errors.email}</span>}
      </div>
      
      <div>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className={errors.password ? 'error' : ''}
        />
        {errors.password && <span className="error-text">{errors.password}</span>}
      </div>
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}`
          }
        },
        {
          id: "form-input-types",
          title: "Different Input Types",
          type: "example",
          content: {
            description: "Handle various form input types",
            code: `function SurveyForm() {
  const [survey, setSurvey] = useState({
    name: '',
    age: '',
    email: '',
    favoriteColor: 'blue',
    newsletter: true,
    interests: [],
    rating: 5,
    feedback: ''
  });
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setSurvey(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleMultiSelect = (e) => {
    const { value, checked } = e.target;
    
    setSurvey(prev => ({
      ...prev,
      interests: checked
        ? [...prev.interests, value]
        : prev.interests.filter(i => i !== value)
    }));
  };
  
  return (
    <form>
      {/* Text Input */}
      <input
        type="text"
        name="name"
        value={survey.name}
        onChange={handleChange}
        placeholder="Your name"
      />
      
      {/* Number Input */}
      <input
        type="number"
        name="age"
        value={survey.age}
        onChange={handleChange}
        min="0"
        max="120"
      />
      
      {/* Email Input */}
      <input
        type="email"
        name="email"
        value={survey.email}
        onChange={handleChange}
      />
      
      {/* Select Dropdown */}
      <select 
        name="favoriteColor" 
        value={survey.favoriteColor}
        onChange={handleChange}
      >
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
      
      {/* Checkbox (single) */}
      <label>
        <input
          type="checkbox"
          name="newsletter"
          checked={survey.newsletter}
          onChange={handleChange}
        />
        Subscribe to newsletter
      </label>
      
      {/* Checkboxes (multiple) */}
      <div>
        <label>
          <input
            type="checkbox"
            value="sports"
            checked={survey.interests.includes('sports')}
            onChange={handleMultiSelect}
          />
          Sports
        </label>
        <label>
          <input
            type="checkbox"
            value="music"
            checked={survey.interests.includes('music')}
            onChange={handleMultiSelect}
          />
          Music
        </label>
      </div>
      
      {/* Radio Buttons */}
      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={survey.gender === 'male'}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={survey.gender === 'female'}
            onChange={handleChange}
          />
          Female
        </label>
      </div>
      
      {/* Range Slider */}
      <input
        type="range"
        name="rating"
        min="1"
        max="10"
        value={survey.rating}
        onChange={handleChange}
      />
      <span>Rating: {survey.rating}</span>
      
      {/* Textarea */}
      <textarea
        name="feedback"
        value={survey.feedback}
        onChange={handleChange}
        placeholder="Your feedback..."
        rows="4"
      />
      
      {/* Date Input */}
      <input
        type="date"
        name="birthdate"
        value={survey.birthdate}
        onChange={handleChange}
      />
    </form>
  );
}`
          }
        }
      ],
      exercises: [
        {
          id: "ex-5-1",
          title: "Contact Form with Validation",
          description: "Create a fully validated contact form",
          task: `Build a contact form that:
1. Has fields: name, email, message, subject
2. Validates all fields
3. Shows real-time validation errors
4. Disables submit while processing
5. Shows success/error messages`,
          solution: `function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value) return 'Email is required';
        if (!/\\S+@\\S+\\.\\S+/.test(value)) return 'Email is invalid';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.length < 10) return 'Message must be at least 10 characters';
        return '';
      default:
        return '';
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate individual field
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {submitStatus === 'success' && (
        <div className="success-message">
          Message sent successfully!
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="error-message">
          Failed to send message. Please try again.
        </div>
      )}
      
      <div className="form-group">
        <label>Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? 'error' : ''}
        />
        {errors.name && <span className="field-error">{errors.name}</span>}
      </div>
      
      <div className="form-group">
        <label>Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <span className="field-error">{errors.email}</span>}
      </div>
      
      <div className="form-group">
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      
      <div className="form-group">
        <label>Message *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className={errors.message ? 'error' : ''}
        />
        <div className="char-count">
          {formData.message.length} / 500 characters
        </div>
        {errors.message && <span className="field-error">{errors.message}</span>}
      </div>
      
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="submit-btn"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}`
        },
        {
          id: "ex-5-2",
          title: "Multi-Step Registration Form",
          description: "Create a registration form with multiple steps",
          task: `Build a 3-step registration form:
Step 1: Personal Info (name, email)
Step 2: Account Details (username, password)
Step 3: Preferences (newsletter, notifications)
With navigation between steps and summary at the end.`,
          solution: `function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    name: '',
    email: '',
    // Step 2
    username: '',
    password: '',
    confirmPassword: '',
    // Step 3
    newsletter: true,
    notifications: 'daily'
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const validateStep = () => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    }
    
    if (step === 2) {
      if (!formData.username) newErrors.username = 'Username required';
      if (!formData.password) newErrors.password = 'Password required';
      else if (formData.password.length < 6) newErrors.password = 'Min 6 characters';
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };
  
  const prevStep = () => {
    setStep(step - 1);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      console.log('Form submitted:', formData);
      alert('Registration successful!');
    }
  };
  
  return (
    <div className="multi-step-form">
      <div className="step-indicator">
        <span className={step >= 1 ? 'active' : ''}>1. Personal</span>
        <span className={step >= 2 ? 'active' : ''}>2. Account</span>
        <span className={step >= 3 ? 'active' : ''}>3. Preferences</span>
      </div>
      
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="form-step">
            <h3>Personal Information</h3>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
            
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
            
            <button type="button" onClick={nextStep} className="next-btn">
              Next →
            </button>
          </div>
        )}
        
        {step === 2 && (
          <div className="form-step">
            <h3>Account Details</h3>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className={errors.username ? 'error' : ''}
            />
            {errors.username && <span className="error-text">{errors.username}</span>}
            
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className={errors.password ? 'error' : ''}
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
            
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className={errors.confirmPassword ? 'error' : ''}
            />
            {errors.confirmPassword && (
              <span className="error-text">{errors.confirmPassword}</span>
            )}
            
            <div className="step-buttons">
              <button type="button" onClick={prevStep} className="back-btn">
                ← Back
              </button>
              <button type="button" onClick={nextStep} className="next-btn">
                Next →
              </button>
            </div>
          </div>
        )}
        
        {step === 3 && (
          <div className="form-step">
            <h3>Preferences</h3>
            
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
              />
              Subscribe to newsletter
            </label>
            
            <div className="radio-group">
              <p>Notification frequency:</p>
              <label>
                <input
                  type="radio"
                  name="notifications"
                  value="daily"
                  checked={formData.notifications === 'daily'}
                  onChange={handleChange}
                />
                Daily
              </label>
              <label>
                <input
                  type="radio"
                  name="notifications"
                  value="weekly"
                  checked={formData.notifications === 'weekly'}
                  onChange={handleChange}
                />
                Weekly
              </label>
            </div>
            
            <div className="step-buttons">
              <button type="button" onClick={prevStep} className="back-btn">
                ← Back
              </button>
              <button type="submit" className="submit-btn">
                Complete Registration
              </button>
            </div>
          </div>
        )}
      </form>
      
      {step === 3 && (
        <div className="form-summary">
          <h4>Summary</h4>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Username:</strong> {formData.username}</p>
          <p><strong>Newsletter:</strong> {formData.newsletter ? 'Yes' : 'No'}</p>
          <p><strong>Notifications:</strong> {formData.notifications}</p>
        </div>
      )}
    </div>
  );
}`
        }
      ]
    },

    {
      id: "module-6",
      title: "Module 6: useEffect & API Calls",
      duration: "2 hours",
      objectives: [
        "Understand side effects in React",
        "Use the useEffect hook",
        "Fetch data from APIs",
        "Handle loading and error states",
        "Clean up effects properly"
      ],
      lessons: [
        {
          id: "what-is-useeffect",
          title: "What is useEffect?",
          type: "theory",
          content: {
            description: "useEffect lets you perform side effects in function components",
            analogy: {
              title: "The Butler Analogy",
              description: "useEffect is like a butler who performs tasks for you when certain conditions change"
            },
            sideEffectExamples: [
              "Fetching data from an API",
              "Updating the document title",
              "Setting up subscriptions",
              "Manipulating the DOM directly",
              "Setting timers"
            ],
            basicSyntax: `useEffect(() => {
  // Code to run on component mount and updates
  console.log('Component rendered!');
  
  return () => {
    // Cleanup function (optional)
    console.log('Component will unmount!');
  };
}, [dependency1, dependency2]); // Dependency array`
          }
        },
        {
          id: "useEffect-variations",
          title: "useEffect Dependency Array",
          type: "theory",
          content: {
            description: "The dependency array controls when useEffect runs",
            variations: [
              {
                type: "Run on every render",
                code: `useEffect(() => {
  console.log('Runs after EVERY render');
}); // No dependency array`,
                useCase: "Be careful! Can cause infinite loops"
              },
              {
                type: "Run once on mount",
                code: `useEffect(() => {
  console.log('Runs ONCE when component mounts');
  // Good for initial data fetching
}, []); // Empty array`,
                useCase: "ComponentDidMount equivalent"
              },
              {
                type: "Run when dependencies change",
                code: `useEffect(() => {
  console.log('Runs when userId changes');
  fetchUserData(userId);
}, [userId]); // Specific dependencies`,
                useCase: "ComponentDidUpdate equivalent"
              },
              {
                type: "Cleanup on unmount",
                code: `useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tick');
  }, 1000);
  
  return () => {
    clearInterval(timer); // Cleanup
    console.log('Timer cleared');
  };
}, []);`,
                useCase: "ComponentWillUnmount equivalent"
              }
            ]
          }
        },
        {
          id: "fetching-data",
          title: "Fetching Data from APIs",
          type: "example",
          content: {
            description: "Learn how to fetch data in React components",
            code: `function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // This function fetches data
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        
        const data = await response.json();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []); // Empty array = run once on mount
  
  if (loading) {
    return <div className="loading">Loading users...</div>;
  }
  
  if (error) {
    return <div className="error">Error: {error}</div>;
  }
  
  return (
    <ul className="user-list">
      {users.map(user => (
        <li key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </li>
      ))}
    </ul>
  );
}`
          }
        },
        {
          id: "real-world-examples",
          title: "Real-World useEffect Examples",
          type: "example",
          content: {
            description: "Practical examples of useEffect in action",
            examples: [
              {
                title: "Document Title Updater",
                code: `function DocumentTitleUpdater() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // Update document title
    document.title = \`Count: \${count}\`;
    
    // Cleanup: reset title when component unmounts
    return () => {
      document.title = 'React App';
    };
  }, [count]); // Run when count changes
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`
              },
              {
                title: "Window Resize Listener",
                code: `function WindowSizeTracker() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup: remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty array = run once on mount
  
  return (
    <div>
      <p>Window Width: {windowSize.width}px</p>
      <p>Window Height: {windowSize.height}px</p>
      <p>Device: {windowSize.width < 768 ? 'Mobile' : 'Desktop'}</p>
    </div>
  );
}`
              },
              {
                title: "Search with Debounce",
                code: `function SearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }
    
    // Debounce: wait 500ms before searching
    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        const response = await fetch(
          \`https://api.example.com/search?q=\${query}\`
        );
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Search failed:', error);
      } finally {
        setLoading(false);
      }
    }, 500); // 500ms delay
    
    // Cleanup: cancel timer if query changes
    return () => clearTimeout(timer);
  }, [query]); // Run when query changes
  
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      
      {loading && <p>Searching...</p>}
      
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}`
              }
            ]
          }
        },
        {
          id: "api-best-practices",
          title: "API Call Best Practices",
          type: "theory",
          content: {
            description: "Follow these best practices when making API calls",
            checklist: [
              {
                item: "✅ Handle loading states",
                why: "Users should know data is being fetched"
              },
              {
                item: "✅ Handle errors gracefully",
                why: "Show helpful error messages, don't crash"
              },
              {
                item: "✅ Cancel requests on unmount",
                why: "Prevent memory leaks and errors"
              },
              {
                item: "✅ Use proper error boundaries",
                why: "Prevent entire app from crashing"
              },
              {
                item: "✅ Implement retry logic",
                why: "Network requests can fail"
              }
            ],
            codeExample: `// Good API call pattern
useEffect(() => {
  let isMounted = true; // Flag to check if component is mounted
  
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(\`HTTP \${response.status}\`);
      }
      
      const data = await response.json();
      
      // Only update state if component is still mounted
      if (isMounted) {
        setData(data);
      }
    } catch (err) {
      if (isMounted) {
        setError(err.message);
      }
    } finally {
      if (isMounted) {
        setLoading(false);
      }
    }
  };
  
  fetchData();
  
  // Cleanup function
  return () => {
    isMounted = false;
    // Optionally cancel fetch here
  };
}, [url]);`
          }
        }
      ],
      exercises: [
        {
          id: "ex-6-1",
          title: "Todo List with API",
          description: "Create a todo list that fetches from an API",
          task: `Build a todo list that:
1. Fetches todos from JSONPlaceholder API
2. Shows loading state
3. Handles errors
4. Allows adding new todos (POST request)
5. Allows deleting todos (DELETE request)`,
          solution: `function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newTodo, setNewTodo] = useState('');
  
  // Fetch todos on mount
  useEffect(() => {
    fetchTodos();
  }, []);
  
  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos?_limit=5'
      );
      
      if (!response.ok) throw new Error('Failed to fetch');
      
      const data = await response.json();
      setTodos(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  const addTodo = async () => {
    if (!newTodo.trim()) return;
    
    const todo = {
      title: newTodo,
      completed: false,
      userId: 1
    };
    
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(todo)
        }
      );
      
      const data = await response.json();
      
      // Add to local state (JSONPlaceholder returns fake ID)
      setTodos(prev => [...prev, { ...data, id: Date.now() }]);
      setNewTodo('');
    } catch (err) {
      alert('Failed to add todo');
    }
  };
  
  const deleteTodo = async (id) => {
    try {
      await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`, {
        method: 'DELETE'
      });
      
      // Remove from local state
      setTodos(prev => prev.filter(todo => todo.id !== id));
    } catch (err) {
      alert('Failed to delete todo');
    }
  };
  
  if (loading) return <div className="loading">Loading todos...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      
      <div className="add-todo">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span>{todo.title}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      
      <button onClick={fetchTodos} className="refresh-btn">
        Refresh Todos
      </button>
    </div>
  );
}`
        },
        {
          id: "ex-6-2",
          title: "Weather Dashboard",
          description: "Create a weather app that fetches from OpenWeather API",
          task: `Build a weather dashboard that:
1. Fetches current weather by city name
2. Shows temperature, humidity, conditions
3. Has a search input for different cities
4. Shows loading state
5. Caches weather data for 10 minutes`,
          solution: `function WeatherDashboard() {
  const [city, setCity] = useState('London');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  
  // Replace with your actual API key
  const API_KEY = 'your_api_key_here';
  
  const fetchWeather = useCallback(async () => {
    // Check cache (10 minute expiry)
    const cached = localStorage.getItem(\`weather_\${city}\`);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      const tenMinutesAgo = Date.now() - 10 * 60 * 1000;
      
      if (timestamp > tenMinutesAgo) {
        setWeather(data);
        setLastUpdated(new Date(timestamp).toLocaleTimeString());
        return;
      }
    }
    
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(
        \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${API_KEY}&units=metric\`
      );
      
      if (!response.ok) {
        throw new Error('City not found');
      }
      
      const data = await response.json();
      setWeather(data);
      setLastUpdated(new Date().toLocaleTimeString());
      
      // Cache the data
      localStorage.setItem(
        \`weather_\${city}\`,
        JSON.stringify({
          data,
          timestamp: Date.now()
        })
      );
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }, [city]);
  
  useEffect(() => {
    if (city.trim()) {
      fetchWeather();
    }
  }, [city, fetchWeather]);
  
  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newCity = formData.get('city');
    if (newCity.trim()) {
      setCity(newCity);
    }
  };
  
  return (
    <div className="weather-dashboard">
      <h1>Weather Dashboard</h1>
      
      <form onSubmit={handleSearch} className="search-form">
        <input
          name="city"
          type="text"
          placeholder="Enter city name..."
          defaultValue={city}
        />
        <button type="submit">Search</button>
      </form>
      
      {loading && <div className="loading">Loading weather data...</div>}
      
      {error && <div className="error">Error: {error}</div>}
      
      {weather && !loading && !error && (
        <div className="weather-card">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <div className="weather-main">
            <img
              src={\`https://openweathermap.org/img/wn/\${weather.weather[0].icon}@2x.png\`}
              alt={weather.weather[0].description}
            />
            <div className="temp">{Math.round(weather.main.temp)}°C</div>
          </div>
          <p className="description">{weather.weather[0].description}</p>
          
          <div className="weather-details">
            <div className="detail">
              <span>Feels like:</span>
              <strong>{Math.round(weather.main.feels_like)}°C</strong>
            </div>
            <div className="detail">
              <span>Humidity:</span>
              <strong>{weather.main.humidity}%</strong>
            </div>
            <div className="detail">
              <span>Wind:</span>
              <strong>{weather.wind.speed} m/s</strong>
            </div>
            <div className="detail">
              <span>Pressure:</span>
              <strong>{weather.main.pressure} hPa</strong>
            </div>
          </div>
          
          {lastUpdated && (
            <p className="updated">Last updated: {lastUpdated}</p>
          )}
        </div>
      )}
    </div>
  );
}`
        }
      ]
    },

    {
      id: "module-7",
      title: "Module 7: Context API & Global State",
      duration: "1.5 hours",
      objectives: [
        "Understand prop drilling problem",
        "Use Context API for global state",
        "Create and consume contexts",
        "Combine context with useState/useReducer"
      ],
      lessons: [
        {
          id: "prop-drilling",
          title: "The Prop Drilling Problem",
          type: "theory",
          content: {
            description: "Prop drilling happens when you pass data through multiple component levels",
            analogy: {
              title: "The Office Memo Analogy",
              description: "Like passing a memo through 5 managers when it only needs to go to 1 person"
            },
            codeExample: `// Prop drilling example - passing theme through multiple levels
function App() {
  const [theme, setTheme] = useState('light');
  
  return <Header theme={theme} setTheme={setTheme} />;
}

function Header({ theme, setTheme }) {
  return <Nav theme={theme} setTheme={setTheme} />;
}

function Nav({ theme, setTheme }) {
  return <ThemeToggle theme={theme} setTheme={setTheme} />;
}

function ThemeToggle({ theme, setTheme }) {
  // Finally uses the theme - passed through 3 components!
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme
    </button>
  );
}`,
            solution: "Use Context API to share data without passing props"
          }
        },
        {
          id: "creating-context",
          title: "Creating a Context",
          type: "example",
          content: {
            description: "Learn how to create and provide context",
            code: `// 1. Create a context
import { createContext, useContext, useState } from 'react';

// Create context with default value
const ThemeContext = createContext();

// 2. Create a provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark'
  };
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom hook for consuming context
function useTheme() {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  
  return context;
}

// 4. Wrap your app with the provider
function App() {
  return (
    <ThemeProvider>
      <Header />
      <MainContent />
      <Footer />
    </ThemeProvider>
  );
}`
          }
        },
        {
          id: "using-context",
          title: "Using Context in Components",
          type: "example",
          content: {
            description: "Consume context in different components",
            code: `// Header.js - Uses theme without prop drilling
function Header() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className={\`header \${theme}\`}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
}

// MainContent.js - Also uses theme
function MainContent() {
  const { theme, isDark } = useTheme();
  
  return (
    <main className={\`main \${theme}\`}>
      <p>Current theme: {theme}</p>
      <p>Is dark mode? {isDark ? 'Yes' : 'No'}</p>
    </main>
  );
}

// Footer.js - Doesn't need theme, so doesn't consume it
function Footer() {
  return <footer>© 2024 My App</footer>;
}`
          }
        },
        {
          id: "auth-context-example",
          title: "Authentication Context Example",
          type: "example",
          content: {
            description: "Create a complete auth context for user management",
            code: `// AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Check for saved user on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);
  
  const login = async (email, password) => {
    // Simulate API call
    const mockUser = {
      id: '1',
      email,
      name: 'John Doe',
      token: 'fake-jwt-token'
    };
    
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    return mockUser;
  };
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
  
  const updateProfile = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };
  
  const value = {
    user,
    loading,
    login,
    logout,
    updateProfile,
    isAuthenticated: !!user
  };
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  
  return context;
}

// ProtectedRoute.js - Route guard component
function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return children;
}

// App.js - Using the auth context
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}`
          }
        },
        {
          id: "multiple-contexts",
          title: "Using Multiple Contexts",
          type: "example",
          content: {
            description: "Combine multiple contexts in an application",
            code: `// App.js - Multiple providers
function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <NotificationProvider>
            <MainApp />
          </NotificationProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

// Component using multiple contexts
function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const { showNotification } = useNotification();
  
  const handleLogout = () => {
    logout();
    showNotification('Logged out successfully', 'success');
  };
  
  return (
    <nav className={\`navbar \${theme}\`}>
      <div className="nav-left">
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
      
      <div className="nav-center">
        <h1>My Store</h1>
        <span className="cart-count">Cart: {cartItems.length}</span>
      </div>
      
      <div className="nav-right">
        {user ? (
          <>
            <span>Welcome, {user.name}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <a href="/login">Login</a>
        )}
      </div>
    </nav>
  );
}`
          }
        }
      ],
      exercises: [
        {
          id: "ex-7-1",
          title: "Shopping Cart Context",
          description: "Create a shopping cart using Context API",
          task: `Build a shopping cart system with:
1. Cart context to manage cart items globally
2. Add/remove items from cart
3. Update item quantities
4. Calculate total price
5. Persist cart to localStorage`,
          solution: `// CartContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  
  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);
  
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // Increase quantity if item already in cart
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      // Add new item with quantity 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };
  
  const removeFromCart = (productId) => {
    setCartItems(prevItems => 
      prevItems.filter(item => item.id !== productId)
    );
  };
  
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };
  
  const clearCart = () => {
    setCartItems([]);
  };
  
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + (item.price * item.quantity),
      0
    ).toFixed(2);
  };
  
  const getItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };
  
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getItemCount
  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  
  return context;
}

// ProductCard.js - Component that adds to cart
function ProductCard({ product }) {
  const { addToCart } = useCart();
  
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}$</p>
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

// CartPage.js - Component that shows cart contents
function CartPage() {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal,
    clearCart 
  } = useCart();
  
  if (cartItems.length === 0) {
    return <div className="empty-cart">Your cart is empty</div>;
  }
  
  return (
    <div className="cart-page">
      <h1>Shopping Cart ({cartItems.length} items)</h1>
      
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>{item.price}$</p>
            </div>
            
            <div className="quantity-controls">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                +
              </button>
            </div>
            
            <div className="item-total">
              {(item.price * item.quantity).toFixed(2)}$
            </div>
            
            <button 
              onClick={() => removeFromCart(item.id)}
              className="remove-btn"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      
      <div className="cart-summary">
        <h2>Order Summary</h2>
        <div className="summary-row">
          <span>Subtotal:</span>
          <span>{getCartTotal()}$</span>
        </div>
        <div className="summary-row">
          <span>Shipping:</span>
          <span>$5.99</span>
        </div>
        <div className="summary-row total">
          <span>Total:</span>
          <span>{(parseFloat(getCartTotal()) + 5.99).toFixed(2)}$</span>
        </div>
        
        <button className="checkout-btn">Proceed to Checkout</button>
        <button onClick={clearCart} className="clear-btn">
          Clear Cart
        </button>
      </div>
    </div>
  );
}`
        }
      ]
    },

    {
      id: "module-8",
      title: "Module 8: React Router & Navigation",
      duration: "1.5 hours",
      objectives: [
        "Set up React Router",
        "Create navigation between pages",
        "Handle route parameters",
        "Implement protected routes",
        "Use nested routes"
      ],
      lessons: [
        {
          id: "router-setup",
          title: "Setting Up React Router",
          type: "practical",
          content: {
            steps: [
              {
                text: "Install React Router:",
                code: "npm install react-router-dom"
              },
              {
                text: "Wrap your app with BrowserRouter:",
                code: `// index.js or App.js
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);`
              }
            ],
            basicSetup: `// App.js - Basic router setup
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}`
          }
        },
        {
          id: "route-parameters",
          title: "Route Parameters & Dynamic Routes",
          type: "example",
          content: {
            description: "Create dynamic routes with parameters",
            code: `// App.js - Routes with parameters
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/users/:userId/posts/:postId" element={<UserPost />} />
    </Routes>
  );
}

// ProductDetail.js - Accessing route parameters
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams(); // Get the id parameter from URL
  
  return (
    <div>
      <h1>Product Details</h1>
      <p>Showing details for product ID: {id}</p>
    </div>
  );
}

// UserPost.js - Multiple parameters
function UserPost() {
  const { userId, postId } = useParams();
  
  return (
    <div>
      <h1>User {userId}'s Post</h1>
      <p>Showing post ID: {postId}</p>
    </div>
  );
}`
          }
        },
        {
          id: "navigation-methods",
          title: "Different Navigation Methods",
          type: "example",
          content: {
            description: "Various ways to navigate in React Router",
            methods: [
              {
                name: "Link Component",
                description: "For clickable links",
                code: `import { Link } from 'react-router-dom';

<Link to="/about">About Us</Link>
<Link to="/products/laptop">Laptop Details</Link>`
              },
              {
                name: "Navigate Component",
                description: "For programmatic navigation",
                code: `import { Navigate } from 'react-router-dom';

function PrivateRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}`
              },
              {
                name: "useNavigate Hook",
                description: "For navigation in event handlers",
                code: `import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  
  const handleSubmit = async () => {
    // Login logic...
    navigate('/dashboard'); // Redirect after login
  };
  
  const goBack = () => {
    navigate(-1); // Go back one page
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit">Login</button>
      <button type="button" onClick={goBack}>Go Back</button>
    </form>
  );
}`
              },
              {
                name: "NavLink Component",
                description: "For navigation with active styling",
                code: `import { NavLink } from 'react-router-dom';

<nav>
  <NavLink 
    to="/"
    className={({ isActive }) => isActive ? 'active' : ''}
  >
    Home
  </NavLink>
  <NavLink 
    to="/about"
    style={({ isActive }) => ({
      fontWeight: isActive ? 'bold' : 'normal'
    })}
  >
    About
  </NavLink>
</nav>`
              }
            ]
          }
        },
        {
          id: "nested-routes",
          title: "Nested Routes & Layouts",
          type: "example",
          content: {
            description: "Create nested routes for complex applications",
            code: `// App.js - Nested routes
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Nested inside Layout */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />}>
          {/* Nested inside Dashboard */}
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<DashboardProfile />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

// Layout.js - Shared layout component
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="layout">
      <header>
        <h1>My App</h1>
        <nav>{/* Navigation links */}</nav>
      </header>
      
      <main>
        {/* Outlet renders the nested routes */}
        <Outlet />
      </main>
      
      <footer>
        <p>© 2024 My App</p>
      </footer>
    </div>
  );
}

// Dashboard.js - Dashboard layout
function Dashboard() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <nav>
          <Link to="/dashboard">Overview</Link>
          <Link to="/dashboard/profile">Profile</Link>
          <Link to="/dashboard/settings">Settings</Link>
        </nav>
      </aside>
      
      <div className="dashboard-content">
        {/* Nested routes render here */}
        <Outlet />
      </div>
    </div>
  );
}`
          }
        },
        {
          id: "query-parameters",
          title: "Query Parameters & Search",
          type: "example",
          content: {
            description: "Handle query parameters in your routes",
            code: `import { useSearchParams } from 'react-router-dom';

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Get query parameters
  const search = searchParams.get('search') || '';
  const category = searchParams.get('category') || 'all';
  const page = parseInt(searchParams.get('page')) || 1;
  
  const updateSearch = (newSearch) => {
    setSearchParams({ search: newSearch, category, page: 1 });
  };
  
  const updateCategory = (newCategory) => {
    setSearchParams({ search, category: newCategory, page: 1 });
  };
  
  const nextPage = () => {
    setSearchParams({ search, category, page: page + 1 });
  };
  
  return (
    <div>
      <h1>Products</h1>
      
      <div className="filters">
        <input
          type="text"
          value={search}
          onChange={(e) => updateSearch(e.target.value)}
          placeholder="Search products..."
        />
        
        <select 
          value={category} 
          onChange={(e) => updateCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
        </select>
      </div>
      
      <p>Showing page {page} of results for "{search}" in {category}</p>
      
      <button onClick={nextPage}>Next Page</button>
    </div>
  );
}`
          }
        }
      ],
      exercises: [
        {
          id: "ex-8-1",
          title: "E-commerce Router",
          description: "Create a complete e-commerce routing system",
          task: `Build an e-commerce app with these routes:
1. Home page (/)
2. Product listing (/products)
3. Product details (/products/:id)
4. Shopping cart (/cart)
5. Checkout (/checkout)
6. User profile (/profile)
7. Admin dashboard (/admin/* nested routes)

Features:
- Navigation menu
- Protected routes for checkout and profile
- Product search with query parameters
- Breadcrumb navigation`,
          solution: `// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="products" element={<ProductList />} />
              <Route path="products/:id" element={<ProductDetail />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="search" element={<SearchResults />} />
              
              {/* Protected routes */}
              <Route path="checkout" element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              } />
              
              <Route path="profile" element={
                <ProtectedRoute>
                  <ProfileLayout />
                </ProtectedRoute>
              }>
                <Route index element={<ProfileOverview />} />
                <Route path="orders" element={<OrderHistory />} />
                <Route path="settings" element={<ProfileSettings />} />
              </Route>
              
              {/* Admin routes */}
              <Route path="admin" element={
                <AdminRoute>
                  <AdminLayout />
                </AdminRoute>
              }>
                <Route index element={<AdminDashboard />} />
                <Route path="products" element={<ManageProducts />} />
                <Route path="orders" element={<ManageOrders />} />
                <Route path="users" element={<ManageUsers />} />
              </Route>
              
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

// Layout.js
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import { useCart } from './contexts/CartContext';

function Layout() {
  const { user, logout } = useAuth();
  const { getItemCount } = useCart();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  return (
    <div className="app-layout">
      <header className="header">
        <div className="logo">
          <Link to="/">E-Shop</Link>
        </div>
        
        <nav className="main-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About</NavLink>
          
          {user?.role === 'admin' && (
            <NavLink to="/admin">Admin</NavLink>
          )}
        </nav>
        
        <div className="header-right">
          <Link to="/cart" className="cart-link">
            🛒 Cart ({getItemCount()})
          </Link>
          
          {user ? (
            <div className="user-menu">
              <span>Welcome, {user.name}</span>
              <Link to="/profile">Profile</Link>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div className="auth-links">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          )}
        </div>
      </header>
      
      <main className="main-content">
        <Outlet />
      </main>
      
      <footer className="footer">
        <p>© 2024 E-Shop. All rights reserved.</p>
        <nav>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </footer>
    </div>
  );
}

// ProtectedRoute.js
import { Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  return children;
}

// AdminRoute.js
function AdminRoute({ children }) {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!user || user.role !== 'admin') {
    return <Navigate to="/" />;
  }
  
  return children;
}

// SearchResults.js - With query parameters
import { useSearchParams } from 'react-router-dom';

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') || 'all';
  
  // Fetch products based on query and category
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchResults = async () => {
      // API call with query parameters
      const response = await fetch(
        \`/api/products?search=\${query}&category=\${category}\`
      );
      const data = await response.json();
      setProducts(data);
    };
    
    fetchResults();
  }, [query, category]);
  
  return (
    <div className="search-results">
      <h1>Search Results for "{query}"</h1>
      {category !== 'all' && <p>Category: {category}</p>}
      
      {products.length === 0 ? (
        <p>No products found. Try a different search.</p>
      ) : (
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}`
        }
      ]
    }
  ]
};

export default reactCourse;