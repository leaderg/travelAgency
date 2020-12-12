const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const knexConfig  = require("./knexfile")["development"];
const knex        = require("knex")(knexConfig);

app.use(express.static(path.join(__dirname, 'travel-agency/build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//GET All Quotes
app.get('/api/quotes', (req,res) => {
  knex('quotes')
  .asCallback((err,result) => {
    res.json(result);
  });
})

//GET Number of Quotes
app.get('/api/quotes/count', (req,res) => {
  knex('quotes')
  .count()
  .asCallback((err,result) => {
    res.json(result);
  });
})

//GET Five Most Recent Quotes
app.get('/api/quotes/latest', (req,res) => {
  knex('quotes')
  .select('id', 'client_name', 'point_of_departure', 'point_of_destination')
  .orderBy('id', 'desc')
  .limit(5)
  .asCallback((err,result) => {
    res.json(result);
  });
})

//GET Specific Quote Information
app.get('/api/quotes/:id', (req,res) => {
  knex('quotes')
  .where({id: req.params.id})
  .then( quote => {
    res.json(quote)
  })
})

//Post Quick Quote
app.post('/api/quotes/quick', (req,res) => {
  let quote = req.body;
  knex('quotes')
  .insert(quote)
  .then(entry => res.sendStatus(200))
  .catch(err => {res.send(err)})
});

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/travel-agency/build/index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT);

console.log('App is listening on port ' + PORT);