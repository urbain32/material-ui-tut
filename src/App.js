import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  CssBaseline,
  Toolbar,
  Container,
  Button,
} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './sytles';
function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline>
        <AppBar position='relative'>
          <Toolbar>
            <PhotoCamera className={classes.icon} />
            <Typography variant='h6'>Photo Album</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.container}>
            <Container maxWidth='sm'>
              <Typography
                variant='h2'
                align='center'
                color='textPrimary'
                gutterBottom
              >
                Photo Album
              </Typography>
              <Typography
                variant='h5'
                align='center'
                color='textSecondary'
                paragraph
              >
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don&apos;t simply skip over it entirely.
              </Typography>
              <div className={classes.button}>
                <Grid container spacing={2} justifyContent='center'>
                  <Grid item>
                    <Button variant='contained' color='primary'>
                      See my photos
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant='outlined' color='primary'>
                      Secondary Action
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
        </main>
      </CssBaseline>
    </>
  );
}

export default App;
