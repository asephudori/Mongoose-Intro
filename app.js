require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

const userRoutes = require('./routes/user.routes');

app.use('/api', userRoutes);

app.use('/', (req, res) => {
    try {
      let welcomeMessage = {
        message: 'Welcome to Mongoose Intro',
      };
      res.json(welcomeMessage);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });