import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { getAllBeers } from '../functions/apiCalls';
import BeerCard from './BeerCard';

class BeersCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBeers: [],
    };
    this.getAllBeers = this.getAllBeers.bind(this);
  }

  componentDidMount() {
    this.getAllBeers();
  }

  getAllBeers() {
    getAllBeers()
      .then(data => {
        this.setState({
          allBeers: data
        });
      });
  }

  render() {
    const { allBeers } = this.state;
    return (
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        alignContent="center"
      >
        {allBeers.map((item) => (
          <BeerCard
            allbeers={allBeers}
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price}
            rate={item.rate}
          />
        ))}
      </Grid>
    );
  }
}

export default BeersCards;
