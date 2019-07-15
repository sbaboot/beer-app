const Chance = require('chance');
const beers = require('./beers-1-80');

const chance = new Chance();

const beerObj = beers.map((beer) => {
  return [
    beer.name,
    beer.description,
    beer.image_url,
    chance.floating({ fixed: 2 }),
  ];
});

// db.query('INSERT INTO beer (name, description, image, price) VALUES ?', [beerObj]);
