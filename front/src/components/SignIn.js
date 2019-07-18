import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://media3.giphy.com/media/6UJdwVmBQDAVW/giphy.webp?cid=790b76115d2dc1262f47306e5969a5c3&rid=giphy.webp)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('token', data.token);
        const { setToken } = this.props;
        setToken(data.token);
      });
  }


  render() {
    const { classes } = this.props;
    const { email, password } = this.state;
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar
              style={{ objectFit: 'cover' }}
              className={classes.avatar}
              alt="beerApp logo"
              src="https://assets.materialup.com/uploads/d70e4ded-d428-47c2-8fb0-1f2795cc9f02/preview.png"
            />
            <Typography component="h1" variant="h5">
              Connection
          </Typography>
            <form onSubmit={this.handleSubmit} className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                type="email"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={this.handleChange}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={password}
                onChange={this.handleChange}
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Se souvenir de moi"
              />
              <Button
                type="submit"
                disabled={!this.validateForm()}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Se connecter
            </Button>
              <Grid container>
                <Grid item>
                  <Link
                    component={RouterLink}
                    to="/signup"
                    variant="body2"
                  >
                    {'Nouveau sur BeerApp ? Inscrivez-vous'}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}
const mapStateToProps = state => state.users;

export default connect(mapStateToProps)(withStyles(styles)(SignIn));
