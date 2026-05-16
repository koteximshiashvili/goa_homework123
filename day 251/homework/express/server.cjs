const express = require('express');
const authorRoutes = require('./routes/author.routes');
const categoryRoutes = require('./routes/category.routes');
const errorMiddleware = require('./middlewares/logger.middleware');
PORT = 3003
const app = express();

app.use(express.json());

app.use('/authors', authorRoutes);
app.use('/categories', categoryRoutes);

app.use(errorMiddleware);

module.exports = app;

app.listen(PORT, () => console.log(`server listening at http://localhost:${PORT}`))