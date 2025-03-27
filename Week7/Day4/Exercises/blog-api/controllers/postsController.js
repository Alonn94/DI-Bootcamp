const db = require('../configuration/db.js');

exports.getAllPosts = async (req, res) => {
  try {
    const result = await db.select('*').from('posts');
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPostById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const result = await db.select('*').from('posts').where({ id });
    if (result.length > 0) {
      res.json(result[0]);
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const result = await db('posts').insert({ title, content }).returning('*');
    res.status(201).json(result[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updatePost = async (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  try {
    const result = await db('posts').where({ id }).update({ title, content }).returning('*');
    if (result.length > 0) {
      res.json(result[0]);
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deletePost = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const result = await db('posts').where({ id }).del().returning('*');
    if (result.length > 0) {
      res.json({ message: 'Post deleted successfully' });
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};