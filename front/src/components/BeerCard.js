import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import StarRatings from 'react-star-ratings';


const styles = () => ({
  card: {
    minHeight: 300,
    maxWidth: 345,
    margin: 'auto',
  },
  cardMedia: {
    maxWidth: 250,
    maxHeight: 200,
    width: 'auto',
    height: 'auto',
    margin: 'auto',
  }
});

function BeersCards({
  classes, name, image, description, price, rate
}) {
  return (
    <Grid item xs={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          component="img"
          height="auto"
          alt={name || 'http://www.quickmeme.com/img/6c/6c571203ad46ed17d252974e92b271a47634cda72de91d8f9dcbdae23e223960.jpg'}
          src={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <br />
          <Typography variant="h5" color="textSecondary" component="p">
            {price} €
          </Typography>
          <StarRatings
            starRatedColor="orange"
            // changeRating={this.changeRating}
            rating={rate}
            numberOfStars={5}
            starDimension="30px"
            name="rating"
          />
        </CardContent>
      </Card>
    </Grid>
  );
}

BeersCards.propTypes = {
  classes: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
};

export default withStyles(styles)(BeersCards);
