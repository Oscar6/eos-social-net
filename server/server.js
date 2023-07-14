const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());

// Db connection and user model setup
const db = require('./db/index');
const User = require('./db/models/User');

// Register user
app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    console.log('** User registered successfully:', user.dataValues);
    res.status(201).json({ success: true, message: 'User registered successfully', user });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Login user
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    console.log('** Login successful:', user.email + ' **');
    res.status(200).json({ success: true, message: 'Login successful'});

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Creating a Post
app.post('/posts', async (req, res) => {
  try {
    const { title, description, user_id } = req.body;
    const post = await Post.create({ title, description, user_id });

    console.log('** Post created successfully:', post.dataValues);
    res.status(201).json({ success: true, message: 'Post created successfully', post });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
