# Habit-Tracker
A reactive, state-driven Habit Tracker built with React 18+. Implements global Context APIs, complex state transitions via the useReducer hook, multi-category relational filtering, and custom local storage persistence hooks.

# ⏳ HabitEngine: Reactive Productivity & Progress Tracker

A modular frontend architecture built with React to track atomic habits, manage active task profiles, and maintain dynamic completion logging. The application separates processing boundaries cleanly by implementing centralized state workflows through a Context/Reducer architecture, maximizing performance and state transparency across deeply nested view feeds.

### 🎥 Live Demo / Interface Tour
[Insert Your Live Link or Demo GIF here]

### ⚙️ Core Architecture & Features
*   **Centralized Reducer State Management:** Orchestrates predictable state mutations (Add, Edit, Delete, Toggle Completion) across tracking vectors using a custom `useReducer` action layer.
*   **Global Context Subsystem:** Leverages React Context APIs (`createContext`, `useContext`) to mitigate prop-drilling, delivering direct parameter bindings to multi-tiered nodes (Filters, Forms, Asset Cards).
*   **Persistent Custom Hooks:** Implements a custom synchronization hook (`useLocalStorage`) utilizing functional lazily-evaluated state initializers to guarantee cross-session data integrity safely.
*   **Multi-Select Array Filters:** Dynamic relational tags handling intersection filters, grouping ongoing trackers accurately into custom-created classifications.

### 🛠️ Tech Stack
*   **Framework:** React 18+ (Functional Components, Hooks API)
*   **State Hooks:** `useReducer`, `useState`, `useEffect`, `useContext`, Custom Initializers
*   **Styling & UI:** Tailwind CSS / Custom Modules
