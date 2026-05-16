const categories = require('../data/categories');

exports.getCategories = (req, res) => {
  res.json(categories);
};

exports.createCategory = (req, res) => {
  const { name, description } = req.body;

  const newCategory = {
    id: categories.length + 1,
    name,
    description
  };

  categories.push(newCategory);
  res.status(201).json(newCategory);
};
