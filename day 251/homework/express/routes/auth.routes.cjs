const express = require('express');
const {
  getAuthors,
  createAuthor,
  addVideoToAuthor
} = require('../controllers/author.controller');

const router = express.Router();

router.get('/', getAuthors);
router.post('/', createAuthor);
router.post('/:id/videos', addVideoToAuthor);

module.exports = router;
