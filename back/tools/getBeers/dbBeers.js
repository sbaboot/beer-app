const Chance = require('chance');
const beers = require('./beers5');

const chance = new Chance();
const db = require('../../connection');

const beerObj = beers.map((beer) => {
  return [
    beer.name,
    beer.description,
    beer.image_url,
    chance.floating({ min: 0, max: 15, fixed: 2 }),
  ];
});

db.query('INSERT INTO beer (name, description, image, price) VALUES ?', [beerObj]);
