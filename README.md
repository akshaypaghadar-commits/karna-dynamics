# Karna Dynamics Private Limited — Website

**Agriculture | Industry | Robotics**

An interactive company website built with a **React frontend** and a **Node/Express + MongoDB backend**.

Products covered: Virtual & Augmented Reality, Robotics (Intelligent Ground Vehicle, Swarm
Robotics, Smart Three-Phase Energy Meter, VR-Controlled Robots, NDT Robots, Underwater ROV),
Special Purpose Machinery, Industrial Automation, and AI & Machine Learning.

---

## Folder structure

```
karna-dynamics/
├── frontend/
│   ├── public/             → static files (index.html, logos, favicon)
│   ├── src/
│   │   ├── components/      → reusable UI (Navbar, Footer, Button, Card, Hero...)
│   │   ├── pages/           → full pages (Home, About, Products, Events, Contact)
│   │   ├── data.js          → all site + product content
│   │   ├── App.js           → routes
│   │   └── index.js         → app entry
│   └── package.json
├── backend/
│   ├── routes/              → API endpoints (/auth, /contact, /events, /products)
│   ├── models/              → database schemas (User, Contact, Event, Product)
│   ├── controllers/         → logic for each route
│   ├── config/db.js         → MongoDB connection
│   ├── middleware/auth.js   → JWT auth
│   ├── server.js            → Express server
│   ├── seed.js              → creates admin + sample events
│   └── package.json
└── README.md
```

---

## Learning roadmap (how a site like this is built, step by step)

**Phase 1 — Foundations**
1. HTML — structure a page
2. CSS — style it; learn Flexbox/Grid (this project uses Tailwind CSS)
3. JavaScript basics — variables, functions, DOM, events

**Phase 2 — Make it interactive**
4. Small JS projects (to-do, calculator, quiz)
5. React — components, props, state, hooks (used throughout `src/`)

**Phase 3 — Backend**
6. Node.js + Express — API routes (see `backend/routes`)
7. Connect a database — MongoDB via Mongoose (see `backend/models`)
8. Frontend calls backend with `fetch()` (see `Events.js` and `Contact.js`)

**Phase 4 — Put it together**
9. Full project: React + Express + MongoDB (this repo)
10. Authentication — JWT (see `backend/middleware/auth.js`, `routes/auth.js`)

**Phase 5 — Ship it**
11. Push to GitHub
12. Deploy frontend (Vercel/Netlify) + backend (Render/Railway)
13. Connect a domain (optional)

**Phase 6 — Polish**
14. Responsive design (done — works on mobile)
15. Performance, SEO basics, accessibility (meta tags, semantic HTML, reduced-motion)

---

## Prerequisites

- **Node.js 18+** — https://nodejs.org
- **MongoDB** — local (https://www.mongodb.com/try/download/community) or a free **MongoDB Atlas** cloud cluster
- **VS Code** — https://code.visualstudio.com

Check Node: `node -v` and `npm -v`.

---

## Run it in VS Code (step by step)

1. Unzip the folder and open it in VS Code: **File → Open Folder → karna-dynamics**.
2. Open a terminal: **Terminal → New Terminal**. You will use **two** terminals (the `+` icon opens a second).

### Terminal 1 — Backend

```bash
cd backend
npm install
cp .env.example .env          # Windows PowerShell: copy .env.example .env
```

Edit `.env`:
- set `MONGO_URI` (local default is fine if MongoDB is installed, or paste your Atlas URI)
- set `JWT_SECRET` to any long random string

Seed the admin user + sample events, then start the API:

```bash
npm run seed
npm run dev
```

API runs at **http://localhost:5000/api** — check http://localhost:5000/api/health.

### Terminal 2 — Frontend

```bash
cd frontend
npm install
cp .env.example .env          # Windows: copy .env.example .env
npm start
```

The site opens at **http://localhost:3000**.

> The website works on its own — all product content is built in. The backend powers the
> contact form, the live events list and admin authentication.

---

## Pages

Home · About Us · Products · Events · Contact Us

**Products** → Virtual & Augmented Reality · Robotics · Special Purpose Machinery ·
Industrial Automation · Artificial Intelligence & Machine Learning.
Each product opens a detailed page (overview, features, how it works, applications, specs).
**Robotics** contains six platforms: Intelligent Ground Vehicle, Swarm Robotics, Smart
Three-Phase Energy Meter, VR-Controlled Robots, NDT Robots, and Underwater ROV.

---

## API endpoints

| Method | Endpoint | Auth | Purpose |
|--------|----------|------|---------|
| GET  | `/api/health` | — | health check |
| POST | `/api/auth/login` | — | admin login → JWT |
| GET  | `/api/auth/me` | JWT | current admin |
| POST | `/api/contact` | — | submit contact form |
| GET / DELETE | `/api/contact` | JWT | read / delete messages |
| GET  | `/api/events` | — | list events |
| POST / PUT / DELETE | `/api/events` | JWT | manage events |
| GET  | `/api/products` · `/api/products/:slug` | — | list / read products |
| POST / PUT / DELETE | `/api/products` | JWT | manage products |

Default admin (after `npm run seed`): **admin@karnadynamics.com / admin123**
Send the token as `Authorization: Bearer <token>`.

---

## Deploy (Phase 5)

- **Frontend** → Vercel or Netlify. Build command `npm run build`, output `build/`.
  Set `REACT_APP_API_URL` to your deployed backend URL.
- **Backend** → Render or Railway. Start command `npm start`. Add env vars
  `MONGO_URI`, `JWT_SECRET`, `CLIENT_URL` (your deployed frontend URL).
- **Database** → MongoDB Atlas free tier.

---

## Theme

Black `#0B0B0B` · Silver `#C0C0C0` · Green `#6DBE45` — dark mode, glassmorphism,
metallic display type (Orbitron) with Rajdhani body. Logo: KD monogram + KARNA DYNAMICS
wordmark (in `frontend/public`).
