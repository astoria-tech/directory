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
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
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

    [theme.breakpoints.up(1100 + theme.spacing(3) * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
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
          <AppBar position="static" className={classes.appBar}>
            <Toolbar justify="center" alignItems="center">
              <Link variant="h5" color="inherit" href="/">
                astoria.app
              </Link>
            </Toolbar>
          </AppBar>

          <main className={classes.main}>
            <Grid container justify="center" spacing={2}>

              <Grid item xs={12} md={10}>
                <Paper className={classes.linkContainer}>
                  <Typography variant="h4" color="textPrimary">
                    Services
                  </Typography>

                  <hr className={classes.divider} />

                  <Typography variant="h5" color="textPrimary">
                    <Link className={classes.link} href="https://trains.astoria.app">
                      N/W Train Times
                    </Link>
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} md={10}>
                <Paper className={classes.linkContainer}>
                  <Typography variant="h4" color="textPrimary">
                    Astoria Tech Meetup
                  </Typography>

                  <hr className={classes.divider} />

                  <Typography className={classes.link} variant="h5" color="textPrimary">
                      Next Meetup:<br/>
                      Sept 25th @ The Strand
                  </Typography>

                  <hr className={classes.shortDivider} />

                  <Typography className={classes.link} variant="h5" color="textPrimary">
                    <Link href="https://discuss.astoria.app">
                      Discussion Topics
                    </Link>
                  </Typography>


                  <hr className={classes.shortDivider} />

                  <Typography className={classes.bottomLink} variant="h5" color="textPrimary">
                    <Link href="https://astoriaarc.slack.com/join/shared_invite/enQtNTc3MDQ2MjU5NDYwLWRmNmZlZTc3Yzg3MTI0NGI0MzFhZmM2NjM1ZmRiY2Q2Y2M4MDM2ODgyMDdlNjY1NzM3MTM1OTdiMjI0YTY4NGY">
                      Community chat on Slack
                    </Link>
                  </Typography>
                </Paper>
              </Grid>

            </Grid>
          </main>

          <footer className={classes.footer}>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
              An Archipelago group.
            </Typography>
          </footer>
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
