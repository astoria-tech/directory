import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
      zIndex: 100,
  },

  appBar: { position: 'relative' },
  appBarTitle: {
    borderRight: '1px',
    marginRight: theme.spacing(1),
  },

  main: {
    padding: theme.spacing(4),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),

    maxWidth: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  divider: { margin: theme.spacing(2) },
  shortDivider: {
    margin: 'auto',
    width: '40px',
  },

  linkContainer: {
    padding: theme.spacing(2),
    paddingTop: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    zIndex: 1000
  },

  link: { margin: theme.spacing(2.5) },
  bottomLink: {
    marginTop: theme.spacing(2.5),
    marginBottom: theme.spacing(1.5),
  },

  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: 'auto',
    padding: theme.spacing(6),
  },
})

class DirectoryIndex extends Component {

  componentDidMount() {
    console.log(this)
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />

        <div className={classes.root}>

          <main className={classes.main}>
            <Grid container justify="center" spacing={2}>

              <Grid item xs={12} md={10}>
                <Paper className={classes.linkContainer}>
                  <Typography variant="h4" color="textPrimary">
                    Useful apps
                  </Typography>
                  <Typography color="textSecondary">
                    (made by locals)
                  </Typography>

                  <hr className={classes.divider} />

                  <Typography variant="h5" color="textPrimary">
                  </Typography>

                  <Typography className={classes.link} variant="h5" color="textPrimary">
                    <Link className={classes.link} href="https://trains.astoria.app">
                      N/W Train Times
                    </Link>
                  </Typography>

                  <hr className={classes.shortDivider} />

                  <Typography className={classes.link} variant="h5" color="textPrimary">
                    <Link className={classes.link} href="https://vacant.astoria.app">
                      Vacant Location Wishlists
                    </Link>
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} md={10}>
                <Paper className={classes.linkContainer}>
                  <Typography variant="h4" color="textPrimary">
                    Astoria Tech Group
                  </Typography>

                  <hr className={classes.divider} />

                  <Typography className={classes.link} variant="h5" color="textPrimary">
                    <Link href="https://www.meetup.com/Astoria-Tech-Meetup/events/267419326/">
                      Monthly Meetup #16:<br/>
                      Weds, Jan 29th<br/>
                      @ The Strand Smokehouse
                    </Link>
                  </Typography>

                  <hr className={classes.shortDivider} />

                  <Typography className={classes.link} variant="h5" color="textPrimary">
                    <Link href="https://mesh.astoria.app">
                      Astoria Mesh Map
                    </Link>
                  </Typography>

                  <hr className={classes.shortDivider} />

                  <Typography className={classes.link} variant="h5" color="textPrimary">
                    <Link href="https://discuss.astoria.app">
                      Discussion Topics
                    </Link>
                  </Typography>


                  <hr className={classes.shortDivider} />

                  <Typography className={classes.bottomLink} variant="h5" color="textPrimary">
                    <Link href="https://slack.astoria.app">
                      Community chat on Slack
                    </Link>
                  </Typography>
                </Paper>
              </Grid>

            </Grid>
          </main>

        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps, _ => {})(withStyles(styles)(DirectoryIndex));
