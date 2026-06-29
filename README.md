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




