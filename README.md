# QuesAI Podcast Management Platform


A full-stack MERN application for managing podcast projects with secure authentication and CRUD operations.

## 🌟 Features
### Authentication
- JWT-based user registration/login
- Protected routes with HTTP-only cookies
- Session persistence across page refreshes
- Password hashing with bcrypt

### Projects & Episodes
- Create/delete podcast projects
- Add/update text-based episodes
- Track episode counts and timestamps
- Responsive dashboard layout

### UI/UX
- Modern gradient-based design
- Animated success/error modals
- Form validation and error handling
- Interactive card components

## 🛠 Tech Stack
### Frontend
| Component          | Technology          |
|--------------------|---------------------|
| Framework          | React 18            |
| State Management   | Context API         |
| Routing            | React Router 6      |
| Styling            | CSS Modules         |
| HTTP Client        | Axios               |
| Icons              | React Icons         |

### Backend
| Component          | Technology          |
|--------------------|---------------------|
| Runtime            | Node.js 18+        |
| Framework          | Express 4          |
| Database           | MongoDB + Mongoose |
| Authentication     | JWT + bcryptjs     |
| Security           | CORS + Helmet      |
| Environment        | dotenv             |

## 🚀 Installation
### Prerequisites
- Node.js v18+
- MongoDB v6+
- npm v9+

### Backend Setup
```bash
cd server
npm install
echo "MONGODB_URI=mongodb://localhost:27017/quesai
JWT_SECRET=your_secure_secret_here
JWT_EXPIRES_IN=7d
PORT=5000" > .env
npm run dev
```


## 📂 Project Structure

### Frontend

```
client/
├── src/
│   ├── components/      # Reusable UI Components
│   ├── context/         # Auth state management
│   ├── pages/           # Route components
│   ├── routes/          # Navigation logic
│   ├── services/        # API configuration
│   └── styles/          # Component styles
```

### Backend

```
server/
├── config/              # Database connection
├── controllers/         # Business logic
├── models/              # MongoDB schemas
├── routes/              # API endpoints
└── middlewares/         # Authentication validation
```

---

## 🔑 Environment Variables

Create `.env` file in the server root:

```ini
MONGODB_URI=mongodb://localhost:27017/quesai
JWT_SECRET=your_secure_secret_here
JWT_EXPIRES_IN=7d
PORT=5000
```

---

## 🧩 Core Components

### 🔐 Auth Context (Frontend)

Manages global authentication state and JWT handling:

```javascript
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  const login = async (credentials) => {
    // JWT storage and validation
  };
  
  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
```

### 📌 User Model (Backend)

MongoDB schema defining user structure:

```javascript
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: { type: String, required: true },
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }]
});
```

---

## 📡 API Endpoints

| Endpoint                 | Method | Description            |
|--------------------------|--------|------------------------|
| `/api/auth/register`     | POST   | Create new user        |
| `/api/auth/login`        | POST   | Authenticate user      |
| `/api/projects`          | POST   | Create new project     |
| `/api/projects/:id`      | DELETE | Delete project         |
| `/api/projects/:id/episodes` | POST   | Add episode to project |

---

## 🎨 UI Components

- Gradient backgrounds with wave patterns
- Animated form transitions
- Input validation with clear error messages
- Success modals with auto-redirect

**Example Form Input:**

```jsx
<InputField
  label="Email"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Enter your email"
  required
/>
```

---

## 🔒 Security Features

- Password hashing with bcrypt (12 rounds)
- JWT tokens stored in HTTP-only cookies
- CORS origin restrictions
- Protected route middleware
- CSRF protection headers

---

## 🚧 Roadmap

- [ ] File upload functionality (MP3/PDF)
- [ ] Versioned transcript history
- [ ] Collaborative editing
- [ ] Podcast analytics dashboard
- [ ] RSS feed integration

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/awesome-feature`
3. Commit changes: `git commit -m 'Add awesome feature'`
4. Push to branch: `git push origin feature/awesome-feature`
5. Open a Pull Request

---


