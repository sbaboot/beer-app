import axios from 'axios';

export const getBeersById = (id) => axios
  .get(`/api/beers/${id}`)
  .then(response => response.data);

export const getAllBeers = () => axios
  .get('/api/beers')
  .then(response => response.data);
