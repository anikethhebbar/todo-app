# React Todo App

A task management application built with React and styled using Bootstrap. It allows users to create, edit, delete, and manage tasks with priority levels and completion status, featuring a dark mode theme via custom CSS.

---

## Features

*   **Task Operations:** Create, read, update, and delete tasks.
*   **Priority Levels:** Assign High, Medium, or Low priority to tasks, visualized with Bootstrap badges.
*   **Completion Status:** Toggle tasks between complete (visually indicated with strikethrough) and incomplete.
*   **Form Handling:** Dedicated form for adding new tasks or editing existing ones.
*   **User Interface:** Clean two-column layout using Bootstrap (Task List / Add-Edit Form).
*   **Styling:**
    *   Utilizes Bootstrap components (Table, Buttons, Forms, Badges).
    *   Includes custom dark mode styling provided in `App.css`.
*   **Responsive Design:** Adapts to different screen sizes.

---

## Tech Stack

*   **Frontend:** React (using Hooks: `useState`)
*   **Styling:**
    *   Bootstrap 5 (for component styling and layout)
    *   Custom CSS (`App.css` for dark mode overrides and adjustments)
*   **Environment:** Node.js (v14+), npm / yarn

---

## Getting Started

### Prerequisites

*   Node.js (v14 or higher recommended)
*   npm (comes with Node.js) or yarn
*   Git

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/anikethhebbar/todo-app.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd todo-app
    ```

3.  **Install dependencies:**
    This will install React, Bootstrap (if listed in `package.json`), and other necessary packages.
    Using npm:
    ```bash
    npm install
    ```
    Or using yarn:
    ```bash
    yarn install
    ```
    *(Note: Ensure Bootstrap is included as a project dependency or imported globally, e.g., in `src/index.js`)*

4.  **Run the development server:**
    Using npm:
    ```bash
    npm start
    ```
    Or using yarn:
    ```bash
    yarn start
    ```

5.  Open `http://localhost:3000` in your browser to view the app. The custom dark mode styling from `App.css` should be applied.

---

## Available Scripts

In the project directory, you can run standard Create React App scripts:

*   `npm start` / `yarn start`: Runs the app in development mode.
*   `npm run build` / `yarn build`: Builds the app for production.
*   `npm test` / `yarn test`: Runs the test runner (if tests are configured).

---
