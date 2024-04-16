const express = require('express');
const app = express();
const movieRoutes = require('./routes/movieRoutes');

app.use(express.json());

app.use('/api/movies', movieRoutes);



// Error handling middleware O but R
app.use((err, req, res, next) => {
    // Handle errors here and send appropriate response
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
