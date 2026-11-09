# JS-University-Course-Management  # Web Technologies Laboratory - Assignment 3

**Student Name:** Tunahan Mutlu  
**Student ID:** 230408002  

## 1. File Organization
The project implements a modular JavaScript application structure separated into clean concerns:

- `models.js`: Contains the `Student` ES6 Class definition and utilizes `Object.defineProperty` for immutable object identifiers.
- `database.js`: Simulates a slow network/database query returning JSON data asynchronously via a 2-second callback strategy (`setTimeout`).
- `analytics.js`: Houses high-level calculations, higher-order functions (`filterStudents`), and dataset reductions (`findTopStudent`).
- `main.js`: Acts as the application entry point orchestrating asynchronous data retrieval, mapping raw data to instance objects, and printing reports.
- `README.md`: Explains architecture and implementation challenges.

## 2. Challenges Faced & Solutions
- **Object Property Immutability:** Ensuring student `id` properties were protected from modification required configuring `Object.defineProperty()` explicitly with `writable: false` and `configurable: false`.
- **Asynchronous Data Mapping:** Mapping raw JSON objects returned inside the asynchronous callback into functional class instances (`Student`) was required before calling instance methods like `.getAverage()`.
- **Es6 Module Execution:** Node.js requires `"type": "module"` in `package.json` or running standard module imports in supporting modern browser environments to parse `import/export` statements seamlessly.
