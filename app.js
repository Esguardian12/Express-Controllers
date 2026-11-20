const express = require('express');
const app = express();
const authorRouter = require('./Routes/authorRouter');

app.use('/authors', authorRouter);

// Error-handling middleware (must have all 4 parameters and go last)
app.use((err, req, res, next) => {
    console.error(err);
    // Use the custom statusCode if it exists, otherwise default to 500
    res.status(err.statusCode|| 500).send(err.message);  
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`My first Express app - listening on port ${PORT}`);
});