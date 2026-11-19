const express = require('express');
const app = express();
const authorRouter = require('./Routes/authorRouter');

app.use('/authors', authorRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`My first Express app - listening on port ${PORT}`);
});