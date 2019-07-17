import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import { getAllBeers } from '../functions/apiCalls';
import StarRatings from 'react-star-ratings';

const styles = () => ({
  card: {
    maxWidth: 345,
  },
});


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
          allBeers: data[0]
        });
      });
  }

  render() {
    const { classes } = this.props;
    const { allBeers } = this.state;
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        alignContent="flex-start"
      >
        <Grid item xs={6} sm={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="auto"
                alt={allBeers.name}
                src={allBeers.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {allBeers.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {allBeers.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {allBeers.price}€
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <StarRatings
                starRatedColor="orange"
                // changeRating={this.changeRating}
                rating={3}
                numberOfStars={5}
                name="rating"
              />
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(BeersCards);
