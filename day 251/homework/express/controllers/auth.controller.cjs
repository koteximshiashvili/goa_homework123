const authors = require('../data/authors.cjs');

exports.getAuthors = (req, res) => {
  res.json(authors);
};

exports.createAuthor = (req, res) => {
  const { name, channel } = req.body;

  const newAuthor = {
    id: authors.length + 1,
    name,
    channel,
    videos: []
  };

  authors.push(newAuthor);
  res.status(201).json(newAuthor);
};

exports.addVideoToAuthor = (req, res) => {
  const authorId = Number(req.params.id);
  const { title, duration, views } = req.body;

  const author = authors.find(a => a.id === authorId);

  if (!author) {
    return res.status(404).json({ message: "Author not found" });
  }

  const newVideo = {
    id: Date.now(),
    title,
    duration,
    views
  };

  author.videos.push(newVideo);
  res.status(201).json(newVideo);
};
