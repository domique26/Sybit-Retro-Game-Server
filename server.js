require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Player = require('./models/player.model');
const playersRoutes = require('./routes/players.route');
const app = express();

app.use(express.json());
const cors = require('cors');
app.use(cors());
app.use('/players', playersRoutes)

app.get('/', (req, res) => {
  res.send('hello world') 
});

mongoose.connect(`mongodb+srv://domikkozlowski26:${process.env.MONGO_DB_PASSWORD}@highscores.k4e5q.mongodb.net/?retryWrites=true&w=majority&appName=highscores`)
.then(() => {
  console.log("Connected to the database");
  app.listen(8000, () => {
    console.log(`Server is running. http://localhost:8000/`)
  });
})
.catch((err) => {
  console.error(err);
});