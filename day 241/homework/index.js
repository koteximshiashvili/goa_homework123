const express = require('express');
const app = express();

app.use(express.json());

let movies = [];
let idCounter = 1;
'/'
app.get('/movies', (req, res) => {
  let result = movies;
  const { genre, year, minRating, maxRating } = req.query;

  if (genre) result = result.filter(m => m.genre === genre);
  if (year) result = result.filter(m => m.year == year);
  if (minRating) result = result.filter(m => m.rating >= minRating);
  if (maxRating) result = result.filter(m => m.rating <= maxRating);

  res.json(result);
});

app.get('/movies/:id', (req, res) => {
  const movie = movies.find(m => m.id == req.params.id);
  if (!movie) return res.status(404).json({ message: 'Movie not found' });
  res.json(movie);
});

app.get('/movies/search', (req, res) => {
  const { title } = req.query;
  const result = movies.filter(m =>
    m.title.toLowerCase().includes(title.toLowerCase())
  );
  res.json(result);
});

app.post('/movies', (req, res) => {
  const movie = { id: idCounter++, ...req.body };
  movies.push(movie);
  res.status(201).json(movie);
});

app.delete('/movies/:id', (req, res) => {
  movies = movies.filter(m => m.id != req.params.id);
  res.json({ message: 'Movie deleted' });
});

app.get('/movies/rating', (req, res) => {
  const min = Number(req.query.min) || 0;
  const max = Number(req.query.max) || 10;

  const result = movies.filter(
    m => m.rating >= min && m.rating <= max
  );
  res.json(result);
});

app.listen(3002, () => console.log('Server running on port 3002'));
