// index.js
const express = require("express");
const dotenv = require("dotenv");
const postRoutes = require("./routes/posts");

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use("/posts", postRoutes);

// Root
app.get("/", (req, res) => {
  res.send({ message: "Hello World" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
