// Import express and body-parser
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of express by calling the function
// gives us back an object
const app = express();
const port = process.env.PORT || 5000; // Used to direct traffic

//configure body-parser for express
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//allow express to access our html (index.html) file
// app.get('/index.html', function(req, res) {
//     res.sendFile(__dirname + "/" + "index.html");
// });

//route the GET request to the specified path, "/user". 
//This sends the user information to the path  
app.post('/new-quote', function(req, res){
    let response = {
        quote : req.body.quote,
        person : req.body.person
    };

    quotes.push(response);
    
    //convert the response in JSON format
    res.end(JSON.stringify(response));
});

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

// var server = app.listen(8888, function(){
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log("Example app listening at http://%s:%s", host, port);
// });