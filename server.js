import express from 'express';
import config from './config';

const app = express();

// Root dir is probably not the best for static assets but that's what we're going with for now
app.use(express.static('.'));
app.set('view engine', 'ejs');

app.get('/api/recipes', (req, res) => {
    res.json({
        recipes: [
            {title: 'Indian'},
            {title: 'Pizza'},
            {title: 'Steak'},
        ],
    });
});

app.get('*', (req, res) => {
    console.log('in *');
    res.render('index');
});

app.listen(config.port, function () {
    console.log(`Listening on port ${config.port}`);
});
