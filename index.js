const express = require('express');
const cors = require('cors');
const app = express();

const movieRoutes = require('./routes/movieRoutes');

// Allow requests from specific origins
const allowedOrigins = ['https://192.168.43.250:5173', 'https://movieshub08.netlify.app'];
const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};

// Use CORS middleware with custom options
app.use(cors(corsOptions));


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
