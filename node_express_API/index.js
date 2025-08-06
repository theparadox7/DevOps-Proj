const express = require('express');
const dotenv = require('dotenv');
const port = 3000;
const postroutes = require('./routes/posts');  
dotenv.config();


// Middleware to parse JSON bodies
const app = express();
app.use(express.json());

// Sample route
app.get('/',(req,res) =>{
    res.send('Hello World from Express!!!!');
}).listen(port,() =>{
    console.log(`Server started in port ${port}`);
});

app.use('/posts',postroutes);
    
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
