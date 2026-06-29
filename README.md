# Scriptiq ✍️

A modern, full-stack blogging platform built with **React 19** and **Appwrite**, featuring secure authentication, dynamic post management, and file storage. 

**🌐 Live Demo:** [https://scriptiq-nine.vercel.app/](https://scriptiq-nine.vercel.app/)

---

## 🚀 Tech Stack

| Layer          | Technology                                                 |
| -------------- | ---------------------------------------------------------- |
| **Frontend**   | React 19, React Router v7, Tailwind CSS v4                 |
| **State**      | Redux Toolkit, React-Redux                                 |
| **Backend**    | Appwrite (Auth, Database, Storage)                         |
| **Editor**     | TinyMCE (via `@tinymce/tinymce-react`)                     |
| **Forms**      | React Hook Form                                            |
| **Build Tool** | Vite 8                                                     |
| **Linting**    | ESLint 10 with React Hooks & React Refresh plugins         |

---

## 📁 Project Structure

```
Scriptiq/
├── .git/
├── README.md
└── Scriptiq/                  # Main application
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── eslint.config.js
    ├── .env                   # Environment variables (git-ignored)
    ├── .gitignore
    └── src/
        ├── main.jsx           # App entry point (Redux Provider wrapping)
        ├── App.jsx            # Root component with auth state management
        ├── App.css            # App-level styles
        ├── index.css          # Tailwind CSS import
        ├── .env.sample        # Template for environment variables
        ├── Scriptiq_Logo.png  # Brand logo
        │
        ├── appwrite/
        │   ├── auth.js        # AuthService — signup, login, logout, session
        │   └── config.js      # Service — CRUD posts, file upload/delete/preview
        │
        ├── components/
        │   ├── index.js       # Barrel file for component exports
        │   ├── AuthLayout.jsx # Route protection wrapper
        │   ├── Button.jsx     # Reusable button component
        │   ├── input.jsx      # Forwarded-ref input with label support
        │   ├── login.jsx      # Login form component
        │   ├── logo.jsx       # Logo component
        │   ├── PostCard.jsx   # Post preview card with image & title
        │   ├── PostForm.jsx   # Form for creating/editing posts with TinyMCE
        │   ├── RTE.jsx        # Rich Text Editor (TinyMCE) wrapper
        │   ├── Select.jsx     # Forwarded-ref select dropdown
        │   ├── Signup.jsx     # Signup form component
        │   ├── container/
        │   │   └── container.jsx  # Responsive max-width wrapper
        │   ├── Footer/
        │   │   └── Footer.jsx     # Multi-column footer
        │   └── Header/
        │       ├── Header.jsx     # Navigation bar with auth-aware links
        │       └── LogoutBtn.jsx  # Logout button with Appwrite session clear
        │
        ├── conf/
        │   └── conf.js        # Centralized env config reader
        │
        ├── pages/
        │   ├── AddPost.jsx    # Page for creating a post
        │   ├── AllPost.jsx    # Page listing all posts
        │   ├── EditPost.jsx   # Page for editing an existing post
        │   ├── Home.jsx       # Landing page showing latest posts
        │   ├── Login.jsx      # Login page
        │   ├── Post.jsx       # Single post reading page
        │   └── Signup.jsx     # Signup page
        │
        └── store/
            ├── authSlice.js   # Auth slice — login/logout actions & state
            └── store.js       # Redux store configuration
```

---

## ✨ Features

### 🔐 Authentication (Appwrite)
- **Sign Up** — Create a new account with email, password, and name; auto-login on success
- **Login** — Email/password session creation
- **Logout** — Delete all active sessions
- **Session Persistence** — Auto-detect current user on app load via `getCurrentUser()`

### 📝 Post Management (Appwrite Database)
- **Create Post** — Title, slug, content, featured image, status, and user association
- **Update Post** — Edit title, content, image, and status by slug
- **Delete Post** — Remove a post document by slug
- **Get Single Post** — Fetch a post by its slug
- **List Posts** — Query all posts with active status (filterable via Appwrite queries)

### 📂 File Storage (Appwrite Bucket)
- **Upload File** — Upload images/files with unique IDs
- **Delete File** — Remove a file by its ID
- **File Preview** — Generate a preview URL for any stored file

### 🧩 Reusable UI Components
- **Button** — Configurable background color, text color, and additional class names
- **Input** — Forwarded-ref input with auto-generated unique IDs and label support
- **Select** — Forwarded-ref dropdown with dynamic option rendering
- **PostCard** — Linked card component displaying post image preview and title
- **Container** — Responsive max-width content wrapper (`max-w-7xl`)
- **Header** — Auth-aware navigation bar (shows Login/Signup when logged out; All Posts/Add Post when logged in)
- **Footer** — Multi-column layout with Company, Support, and Legals sections
- **LogoutBtn** — Dispatches logout action and clears Appwrite sessions

### 🗄️ State Management (Redux Toolkit)
- Centralized auth state (`status`, `userData`)
- `login` and `logout` reducer actions
- Redux Provider wrapping at the app root

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9
- An **Appwrite** instance (cloud or self-hosted) with:
  - A project created
  - A database with a collection for posts
  - A storage bucket for file uploads

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Scriptiq/Scriptiq
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

## 📜 Changelog

All changes made to the project, listed in chronological order:

### `59134dc` — Initial commit
**Date:** June 22, 2026

- Initialized the Git repository

---

### `7e28310` — Initialize React project with Vite, Appwrite auth service, and core configuration
**Date:** June 23, 2026

- Scaffolded the React + Vite project
- Added Appwrite SDK dependency
- Created initial Appwrite authentication service
- Set up environment configuration (`conf/conf.js`) to read Appwrite credentials from `VITE_*` env vars

---

### `fcfb18b` — Remove unused file from codebase
**Date:** June 23, 2026

- Cleaned up unused boilerplate file(s) from the initial Vite scaffold

---

### `9207af5` — Implement Appwrite authentication service and add initial App.css
**Date:** June 23, 2026

- Built the `AuthService` class with `createAccount()`, `login()`, `getCurrentUser()`, and `logout()` methods
- Added `App.css` stylesheet

---

### `41d0b5d` — Implement AuthService class for Appwrite authentication handling
**Date:** June 23, 2026

- Refined the `AuthService` class
- Added error handling with try/catch blocks
- Implemented auto-login after successful account creation
- Exported singleton `authService` instance

---

### `a7b0aee` — Implement Appwrite authentication and database services
**Date:** June 23, 2026

- Created the `Service` class (`appwrite/config.js`) for database and storage operations
- Implemented full CRUD for posts: `createPost`, `updatePost`, `deletePost`, `getPost`, `getPosts`
- Added file storage methods: `uploadFile`, `deleteFile`, `getFilePreview`
- Integrated Appwrite `Databases`, `Storage`, `ID`, and `Query` modules

---

### `4c0b6b0` — Initialize project structure with basic components and Redux auth slice
**Date:** June 24, 2026

- Created the `compoenents/` directory with initial component files
- Built the Redux auth slice (`authSlice.js`) with `login` and `logout` reducers
- Created the Redux store (`store.js`) with the auth reducer
- Added form components: `Input`, `Select`, `Button`
- Added `PostCard` component for post previews
- Added `Logo` placeholder component
- Created barrel export file (`compoenents/index.js`)

---

### `a1a9907` — Add Tailwind CSS, Redux store setup, and App layout with auth
**Date:** June 24, 2026

- Integrated Tailwind CSS v4 (`@tailwindcss/vite` plugin)
- Wrapped the app with Redux `Provider` in `main.jsx`
- Implemented auth state check on app load in `App.jsx` using `useEffect`
- Added `Header` and `Footer` to the main layout
- Set up conditional rendering based on loading state

---

### `25cb589` — Replace default CSS with Tailwind import in index.css
**Date:** June 24, 2026

- Replaced Vite's default CSS with `@import "tailwindcss"` in `index.css`

---

### `57d194d` — Add bg-gray-500 to body in index.html
**Date:** June 24, 2026

- Applied `bg-gray-400` background class to the `<body>` element in `index.html`

---

### `e4babc4` — Initialize core UI components: Header, Footer, Button, Container, and Logo
**Date:** June 24, 2026

- Built the `Header` component with auth-aware navigation items (Home, Login, Signup, All Posts, Add Post)
- Created `LogoutBtn` component that dispatches logout and clears Appwrite sessions
- Built a full multi-column `Footer` with Company, Support, and Legals sections
- Created the `Container` layout wrapper component (`max-w-7xl`, centered)
- Connected navigation to `react-router-dom` with `useNavigate` and `Link`

---

## 📄 Available Scripts

| Script          | Command             | Description                          |
| --------------- | ------------------- | ------------------------------------ |
| **Dev server**  | `npm run dev`       | Start Vite dev server with HMR       |
| **Build**       | `npm run build`     | Create production build              |
| **Preview**     | `npm run preview`   | Preview the production build locally |
| **Lint**        | `npm run lint`      | Run ESLint across the project        |

---

## 🛠️ Dependencies

### Production
| Package                  | Version  | Purpose                                  |
| ------------------------ | -------- | ---------------------------------------- |
| `react`                  | ^19.2.6  | UI library                               |
| `react-dom`              | ^19.2.6  | DOM rendering                            |
| `react-router-dom`       | ^7.7.2   | Client-side routing                      |
| `@reduxjs/toolkit`       | ^2.2.9   | State management                         |
| `react-redux`            | ^9.3.0   | React bindings for Redux                 |
| `react-hook-form`        | ^7.80.0  | Performant form handling                 |
| `appwrite`               | ^26.0.0  | Appwrite SDK (auth, database, storage)   |
| `@tinymce/tinymce-react` | ^6.3.0   | Rich text editor component               |
| `html-react-parser`      | ^6.1.3   | Parse HTML strings to React elements     |
| `tailwindcss`            | ^4.3.1   | Utility-first CSS framework              |
| `@tailwindcss/vite`      | ^4.3.1   | Tailwind CSS Vite plugin                 |

### Development
| Package                          | Version  | Purpose                          |
| -------------------------------- | -------- | -------------------------------- |
| `vite`                           | ^8.0.12  | Build tool and dev server        |
| `@vitejs/plugin-react`           | ^6.0.1   | React Fast Refresh for Vite      |
| `eslint`                         | ^10.3.0  | Code linting                     |
| `eslint-plugin-react-hooks`      | ^7.1.1   | Lint rules for React Hooks       |
| `eslint-plugin-react-refresh`    | ^0.5.2   | Lint rules for React Refresh     |

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Shreshtha Agarwal**

* **GitHub:** [@Shreshtha-ai](https://github.com/Shreshtha-ai)
* **LinkedIn:** [Your LinkedIn Profile](https://www.linkedin.com/in/shreshtha-agarwal-04129a368/)

---

> **Built with ❤️ while learning React**


