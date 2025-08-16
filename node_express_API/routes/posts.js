// routes/posts.js
const express = require("express");
const router = express.Router();
const pool = require("../db");

// GET all posts
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM posts");
    res.json({ data: result.rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET post by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM posts WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: `Post with id ${id} not found` });
    }
    res.json({ post_detail: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new post
router.post("/", async (req, res) => {
  const { title, content, published = true } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO posts (title, content, published) VALUES ($1, $2, $3) RETURNING *",
      [title, content, published]
    );
    res.status(201).json({ data: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE post
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM posts WHERE id = $1 RETURNING *", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: `Post with id ${id} does not exist` });
    }
    res.status(204).send(); // No content
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT update post
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content, published } = req.body;
  try {
    const result = await pool.query(
      "UPDATE posts SET title = $1, content = $2, published = $3 WHERE id = $4 RETURNING *",
      [title, content, published, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: `Post with id ${id} does not exist` });
    }
    res.json({ data: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
