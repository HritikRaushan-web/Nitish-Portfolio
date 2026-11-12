import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { portfolioData } from './data/portfolioData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Helper for data persistence
const getFilePath = (fileName) => path.join(__dirname, 'data', fileName);

const readJsonFile = (fileName, defaultValue) => {
  try {
    const filePath = getFilePath(fileName);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify(defaultValue, null, 2));
      return defaultValue;
    }
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error(`Error reading ${fileName}:`, err);
    return defaultValue;
  }
};

const writeJsonFile = (fileName, data) => {
  try {
    const filePath = getFilePath(fileName);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(`Error writing ${fileName}:`, err);
  }
};

// --- API ROUTES ---

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    platform: 'NITISHFLIX Streaming Portfolio API',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Profile Data
app.get('/api/profile', (req, res) => {
  res.json(portfolioData.profile);
});

// Who's Watching Profiles
app.get('/api/profiles', (req, res) => {
  res.json(portfolioData.profiles);
});

// All Projects with optional search & filter
app.get('/api/projects', (req, res) => {
  const { category, search, tag } = req.query;
  let results = [...portfolioData.projects];

  if (category && category !== 'all') {
    results = results.filter(
      p => p.category === category || p.rowCategory === category
    );
  }

  if (tag) {
    results = results.filter(p =>
      p.tags.some(t => t.toLowerCase() === tag.toLowerCase())
    );
  }

  if (search) {
    const q = search.toLowerCase();
    results = results.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.overview.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    );
  }

  res.json(results);
});

// Single Project Details
app.get('/api/projects/:id', (req, res) => {
  const project = portfolioData.projects.find(p => p.id === req.params.id);
  if (!project) {
    return res.status(404).json({ error: 'Title not found on NITISHFLIX' });
  }
  res.json(project);
});

// Top 10 Skills
app.get('/api/skills', (req, res) => {
  res.json({
    top10: portfolioData.top10Skills,
    certifications: portfolioData.certifications
  });
});

// Career Seasons (Experience)
app.get('/api/experience', (req, res) => {
  res.json(portfolioData.seasons);
});

// Critics Reviews
app.get('/api/reviews', (req, res) => {
  res.json(portfolioData.reviews);
});

// Real-Time Stats
app.get('/api/stats', (req, res) => {
  const stats = readJsonFile('stats.json', { totalViews: 1000, likes: {}, resumeDownloads: 100 });
  // increment view count
  stats.totalViews = (stats.totalViews || 0) + 1;
  writeJsonFile('stats.json', stats);
  res.json(stats);
});

// Like a Project
app.post('/api/like/:id', (req, res) => {
  const { id } = req.params;
  const stats = readJsonFile('stats.json', { totalViews: 1000, likes: {}, resumeDownloads: 100 });
  stats.likes = stats.likes || {};
  stats.likes[id] = (stats.likes[id] || 0) + 1;
  writeJsonFile('stats.json', stats);
  res.json({ success: true, likes: stats.likes[id] });
});

// Watchlist (My List)
app.get('/api/watchlist', (req, res) => {
  const list = readJsonFile('watchlist.json', []);
  const bookmarkedProjects = portfolioData.projects.filter(p => list.includes(p.id));
  res.json({ list, projects: bookmarkedProjects });
});

app.post('/api/watchlist', (req, res) => {
  const { projectId } = req.body;
  if (!projectId) {
    return res.status(400).json({ error: 'Project ID is required' });
  }

  let list = readJsonFile('watchlist.json', []);
  const exists = list.includes(projectId);

  if (exists) {
    list = list.filter(id => id !== projectId);
  } else {
    list.push(projectId);
  }

  writeJsonFile('watchlist.json', list);
  res.json({
    success: true,
    saved: !exists,
    watchlist: list
  });
});

// Submit Contact Form
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and message.' });
  }

  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  const messages = readJsonFile('messages.json', []);
  const newMessage = {
    id: `msg_${Date.now()}`,
    name: name.trim(),
    email: email.trim(),
    subject: (subject || 'Portfolio Inquiry').trim(),
    message: message.trim(),
    timestamp: new Date().toISOString(),
    status: 'unread'
  };

  messages.unshift(newMessage);
  writeJsonFile('messages.json', messages);

  res.status(201).json({
    success: true,
    message: 'Message transmitted successfully! Nitish will respond shortly.',
    id: newMessage.id
  });
});

// Track Resume Download
app.post('/api/stats/download-resume', (req, res) => {
  const stats = readJsonFile('stats.json', { resumeDownloads: 0 });
  stats.resumeDownloads = (stats.resumeDownloads || 0) + 1;
  writeJsonFile('stats.json', stats);
  res.json({ success: true, downloads: stats.resumeDownloads });
});

// Serve static frontend build if present
const rootDist = path.join(__dirname, '../dist');
const clientDist = path.join(__dirname, '../client/dist');
const distDir = fs.existsSync(rootDist) ? rootDist : clientDist;

if (fs.existsSync(distDir)) {
  app.use(express.static(distDir));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distDir, 'index.html'));
  });
}

const startServer = (port) => {
  const server = app.listen(port, () => {
    console.log(`🎬 NITISH KUMAR — THE SERIES Server broadcasting on http://localhost:${port}`);
  });
  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`Port ${port} in use, attempting port ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('Server error:', err);
    }
  });
};

startServer(Number(PORT));

