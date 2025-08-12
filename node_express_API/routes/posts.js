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
router.get("/:id", async (req, res) =>{
    const id = req.params.id;
    try {
        const result = await pool.query("SELECT * FROM posts WHERE id=$1", [id]);
        if(result.rows.length===0) {
            return res.status(404).json({error: "Post not found"});
        }
        res.json({post_detail: result.rows[0]});
    }catch (err) {
        return res.status(500).json({error:err.message});
    }
});

//create a post
router.post("/", async (req, res) => {
    const {title,content,published = true}=req.body;
    try {
        const result = await  pool.query("INSERT INTO posts (title,content,published) VALUES ($1,$2,$3) RETURNING *", [title, content, published]);
        res.status(201).json({post:result.rows[0]});
    }catch (err) {
        return res.status(500).json({error:err.message});
    }
});
