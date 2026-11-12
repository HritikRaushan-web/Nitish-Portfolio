# 🎬 HRITIK RAUSHAN — THE SERIES (Full-Stack Streaming Experience)

The exact cinematic, streaming-inspired portfolio experience from the viral video ([Sushmita Dasari's Series Portfolio](https://github.com/Sushmitadasari/Portfolio_series)), adapted with a **Full-Stack Express.js backend** and customized for **Hritik Raushan**.

Every section is an episode, every project is an Original, and the whole site plays like a series.

---

## 🌟 The Exact Video Experience

1. **Cinematic Opening Sequence (`OpeningSequence.tsx`):**
   * Black screen with letterbox bars (`7vh` cinematic bars top and bottom)
   * Studio Card: `"A HRITIK ORIGINAL"` with letter-spacing animation
   * Projector flicker light effect
   * Main Title: `"HRITIK"` in bold glowing typography
   * Tag: `"THE SERIES"`
   * Cinematic portrait reveal with blur-to-sharp transition
   * Role: `"FULL-STACK DEVELOPER & AI SYSTEMS ENGINEER"`
   * Magnetic `"▶ PLAY"` button + "Skip Intro" option

2. **"Who's Watching?" Profile Selector (`ProfileSelector.tsx`):**
   * Personalize the journey based on viewer intent:
     * 👤 **Hritik (MAIN):** The complete series in chronological order.
     * 💼 **Recruiter:** Story, achievements, and skills prioritized.
     * 💻 **Developer:** Originals, architecture, tech stack & GitHub first.
     * 🎨 **Creative:** Highlights, story arc, and visual milestones first.

3. **Cinematic Billboard Hero (`Hero.tsx`):**
   * High-impact billboard banner with match percentage (`99% Match`), series tag, and tags.
   * **▶ Play Intro:** Triggers the auto-advancing highlight reel modal (`PlayIntro.tsx`) with progress timers and audio atmosphere.
   * **Resume:** Instant modal view with download button.

4. **Interactive Horizontal Rails & Episodes:**
   * **Continue Watching:** Resume where you left off with animated progress bars.
   * **My Projects (Originals):** High-impact interactive cards with match ratings, tech badges, and modal dialogs with problem, solution, metrics, and architecture.
   * **Top Picks:** Top 10 milestones from the career journey.
   * **Skills:** Categorized competencies (Languages, Frontend, Backend, Infra, Databases, CS Fundamentals).
   * **My Journey (Seasons & Episodes):** Education, hackathons, and experience presented as television series seasons.
   * **Moments (Achievements):** Laurels, competitions (e.g. Flipkart GRiD, AlgoUniversity), LeetCode counts, and certifications.
   * **Resume Viewer:** Built-in PDF resume viewer.
   * **Final CTA ("To Be Continued..."):** Contact channels and direct transmission to the backend API.

5. **Motion, Smooth Scrolling & Film Grain:**
   * **Lenis smooth scrolling** for silky fluid physics.
   * **Framer Motion** for spring physics, letter-spacing transforms, and modal transitions.
   * **35mm Film Grain effect** (`.grain`) creating an authentic movie theater atmosphere.
   * **Custom Red Dot Cursor** with magnetic hover snapping (`CustomCursor.tsx`).

6. **Full-Stack Express.js Backend:**
   * REST API at `/api/*` for health checks, contact messages, project data, likes, and resume download tracking.
   * Production static file serving with automatic fallback to port 5001 if 5000 is occupied.

---

## 🚀 How to Run

### 1. Install Dependencies
```bash
npm install
```

### 2. Development Mode
Runs both the **Express backend server** (`http://localhost:5001`) and the **Vite React dev server** (`http://localhost:5173`):
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser!

### 3. Production Build & Run
```bash
npm run build
npm start
```
Open **[http://localhost:5001](http://localhost:5001)** in your browser!

---

## ✏️ How to Customize Your Details

**All portfolio content lives in one central file: [`src/data/portfolio.ts`](file:///c:/Users/HRITIK/OneDrive/Desktop/Nitish%20Portfolio/src/data/portfolio.ts).**

| To change… | Edit in `src/data/portfolio.ts` |
| --- | --- |
| Name, title, intro, email, GitHub | `profile` |
| Projects & metrics | `projects` |
| Career timeline / seasons | `seasons` |
| Top 10 milestones | `topPicks` |
| Technical skills | `skillCategories` |
| Achievements & certifications | `achievements` and `certifications` |
