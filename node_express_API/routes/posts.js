const express = require("express");
const router = express.Router();
const pool = require("../db");

//get all posts
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM posts");
    res.json({data: result.rows});
  }catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//get post by id