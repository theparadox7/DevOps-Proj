const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route
app.get('/',(req,res) =>{
    res.send('Hello World from Express!!!!');
}).listen(port,() =>{
    console.log(`Server started in port ${port}`);
});
