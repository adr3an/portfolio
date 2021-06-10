// initializing key variables || 
// importing packages and assigning variable names
const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');

//setting app behavior re: views to be rendered

app.engine('ejs', ejsMate);
app.set('view engine', "ejs")
app.set('views', path.join(__dirname, 'views'));

// defining middleware

app.use(express.static(path.join(__dirname, 'public')));

//render pages to url 

app.get('/', (req, res) => {
    res.render('index');
});


app.get('/resume', (req, res) => {
    res.render('next');
});

app.listen(process.env.PORT, () => {
    console.log('live');
})