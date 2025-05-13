export const DATA = [
    {
        id: 1,
        name: "Alice Johnson",
        email: "alice@example.com",
        role: "Admin",
        chat: [
            {
                prompt: "What is the difference between == and === in JavaScript?",
                response: "`==` checks for equality after type coercion, while `===` checks for both **value and type** equality.",
                timestamp: "2025-05-13T10:01:00"
            },
            {
                prompt: "What is a closure in JavaScript?",
                response: "A closure is a function that remembers its lexical scope even when the function is executed outside that scope.",
                timestamp: "2025-05-13T10:03:15"
            },
            {
                prompt: "Explain event delegation.",
                response: "Event delegation allows you to attach a single event listener to a parent element that will fire for all descendants.",
                timestamp: "2025-05-13T10:05:30"
            },
            {
                prompt: "What is the purpose of `bind`, `call`, and `apply`?",
                response: "They let you set the `this` context explicitly in functions.",
                timestamp: "2025-05-13T10:07:00"
            },
            {
                prompt: "What is hoisting?",
                response: "Hoisting is JavaScript's behavior of moving declarations to the top of a scope before code execution.",
                timestamp: "2025-05-13T10:08:40"
            },
            {
                prompt: "What are template literals?",
                response: "Template literals allow embedded expressions and multi-line strings using backticks (`` ` ``).",
                timestamp: "2025-05-13T10:10:20"
            },
            {
                prompt: "What are arrow functions?",
                response: "Arrow functions provide a shorter syntax for writing functions and do not bind their own `this`.",
                timestamp: "2025-05-13T10:12:05"
            }
        ]
    },
    {
        id: 2,
        name: "Bob Smith",
        email: "bob@example.com",
        role: "Editor",
        chat: [
            {
                prompt: "What is the DOM?",
                response: "The DOM is a programming interface for HTML and XML documents, representing the page structure as a tree.",
                timestamp: "2025-05-13T09:15:00"
            },
            {
                prompt: "What is the difference between null and undefined?",
                response: "`undefined` means a variable has been declared but not assigned a value; `null` is an assignment value that represents no value.",
                timestamp: "2025-05-13T09:17:20"
            },
            {
                prompt: "What is the event loop?",
                response: "The event loop handles asynchronous callbacks in JavaScript by pushing them to the call stack when the stack is empty.",
                timestamp: "2025-05-13T09:19:40"
            },
            {
                prompt: "What are Promises?",
                response: "Promises represent the eventual result of an asynchronous operation.",
                timestamp: "2025-05-13T09:22:05"
            },
            {
                prompt: "How is `this` determined in JavaScript?",
                response: "`this` refers to the object from which a function was called, but varies based on how the function is invoked.",
                timestamp: "2025-05-13T09:24:00"
            }
        ]
    },
    {
        id: 3,
        name: "Charlie Brown",
        email: "charlie@example.com",
        role: "Viewer",
        chat: [
            {
                prompt: "What is the difference between var, let, and const?",
                response: "`var` is function-scoped, `let` and `const` are block-scoped. `const` cannot be reassigned.",
                timestamp: "2025-05-13T08:30:00"
            },
            {
                prompt: "Explain scope in JavaScript.",
                response: "Scope defines the accessibility of variables. JavaScript has function scope and block scope.",
                timestamp: "2025-05-13T08:32:10"
            },
            {
                prompt: "What is a callback function?",
                response: "A callback is a function passed into another function as an argument and executed later.",
                timestamp: "2025-05-13T08:34:20"
            },
            {
                prompt: "What is a higher-order function?",
                response: "A higher-order function is a function that takes other functions as arguments or returns a function.",
                timestamp: "2025-05-13T08:36:40"
            },
            {
                prompt: "What are the different types of errors in JavaScript?",
                response: "Syntax errors, runtime errors, and logical errors.",
                timestamp: "2025-05-13T08:39:00"
            },
            {
                prompt: "What is the use of `setTimeout` and `setInterval`?",
                response: "`setTimeout` delays execution once; `setInterval` repeats execution at intervals.",
                timestamp: "2025-05-13T08:41:15"
            },
            {
                prompt: "What is JSON?",
                response: "JSON (JavaScript Object Notation) is a format for storing and transporting data, often used in APIs.",
                timestamp: "2025-05-13T08:43:30"
            }
        ]
    },
    {
        id: 4,
        name: "Diana Prince",
        email: "diana@example.com",
        role: "Editor",
        chat: [
            {
                prompt: "What are modules in JavaScript?",
                response: "Modules allow you to break up code into separate files and import/export functions or variables.",
                timestamp: "2025-05-13T07:45:00"
            },
            {
                prompt: "What is destructuring?",
                response: "Destructuring allows unpacking values from arrays or properties from objects into distinct variables.",
                timestamp: "2025-05-13T07:47:10"
            },
            {
                prompt: "What are default parameters?",
                response: "Default parameters allow named parameters to be initialized with default values if no value is passed.",
                timestamp: "2025-05-13T07:49:25"
            },
            {
                prompt: "What is spread syntax?",
                response: "Spread syntax `...` allows an iterable to expand in places where multiple arguments or elements are expected.",
                timestamp: "2025-05-13T07:51:40"
            },
            {
                prompt: "What are JavaScript data types?",
                response: "Primitive: String, Number, Boolean, Undefined, Null, Symbol, BigInt. Non-primitive: Objects.",
                timestamp: "2025-05-13T07:54:05"
            },
            {
                prompt: "What is type coercion?",
                response: "Type coercion is the automatic or implicit conversion of values from one type to another.",
                timestamp: "2025-05-13T07:56:30"
            }
        ]
    },
    {
        id: 5,
        name: "Ethan Hunt",
        email: "ethan@example.com",
        role: "Admin",
        chat: [
            {
                prompt: "What is the purpose of async/await?",
                response: "`async` functions return promises. `await` makes asynchronous code look synchronous, improving readability.",
                timestamp: "2025-05-13T06:40:00"
            },
            {
                prompt: "What is an IIFE?",
                response: "An IIFE (Immediately Invoked Function Expression) runs immediately after it's defined.",
                timestamp: "2025-05-13T06:42:20"
            },
            {
                prompt: "What is a promise chain?",
                response: "Promise chaining means calling `.then()` on a promise and returning another promise from it.",
                timestamp: "2025-05-13T06:44:30"
            },
            {
                prompt: "What are generators in JavaScript?",
                response: "Generators are functions that can be exited and later re-entered, maintaining their context.",
                timestamp: "2025-05-13T06:46:45"
            }
        ]
    }
];
