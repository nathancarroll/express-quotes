// Require express - gives us back a function
const express = require('express');

// Create an instance of express by calling the function
// gives us back an object
const app = express();
const port = process.env.PORT || 5000; // Used to direct traffic

// Quotes object
const quotes = [
    {
        quote: 'Outside of a dog, a book is a man\'s best friend. Inside of a dog, it\'s too dark to read.',
        person: 'Groucho Marx'
    },
    {
        quote: 'That I may reduce the monster to / Myself, and then may be myself / In face of the monster.',
        person: 'Wallace Stevens'
    },
    {
        quote: 'The mind is its own place, and in itself can make a heaven of hell, a hell of heaven.',
        person: 'John Milton'
    }
];

// Serve up static files
app.use(express.static('server/public'));

app.get('/quotes', function(req, res){
    res.send(quotes);
});

// Start up the server
app.listen(port, function() {
    console.log('listening on port', port);
});