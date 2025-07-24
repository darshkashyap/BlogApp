// INITIALIZING LIBRARIES
const express = require('express');
const { z } = require('zod');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const { User, Blog } = require('./model');
require('dotenv').config();

const app = express();

// MIDDLEWARES
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

// CONNECT TO MONGODB
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ Error connecting to MongoDB:', err));

const SECRET_KEY = process.env.SECRET_KEY;

// JWT AUTH MIDDLEWARE
const checkuserlogin = function (req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).send("Token required");

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch {
    res.status(403).send("Invalid or expired token");
  }
};

// ZOD VALIDATION
const userSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(6)
});

// ROUTES
app.get('/', (req, res) => {
  res.send("Hello world");
});

// AUTH ROUTES
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).send("Username already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();
  res.json({ msg: "User created successfully" });
});

app.post('/signin', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(401).send("Invalid credentials");

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(401).send("Invalid credentials");

  const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ message: "Login successful", token });
});

// BLOG ROUTES
app.post('/create', async (req, res) => {
  try {
    const blog = new Blog({
      title: req.body.title,
      content: req.body.content,
      // author: req.user?.username // add this if using auth
    });

    await blog.save();
    res.status(201).send("Blog created");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving blog");
  }
});

app.get('/blogs', async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

app.get('/blogs/:id', async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.json(blog);
});

app.put('/blogs/:id', async (req, res) => {
  await Blog.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    content: req.body.content
  });
  res.send("Blog updated");
});

app.delete('/blogs/:id', async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.send("Blog deleted");
});

// START SERVER
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
