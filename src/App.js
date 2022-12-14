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
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9,0];
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
          <Container
            className={classes.cardGrid}
            maxWidth='md'
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              minWidth: 300,
            }}
          >
            <Grid container spacing={4}>
              {cards.map((index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.CardMedia}
                      image='https://source.unsplash.com/random'
                      title='Image Title'
                    />
                    <CardContent className={classes.CardContent}>
                      <Typography variant='h5' gutterBottom>
                        Heading
                      </Typography>
                      <Typography variant='h5' gutterBottom>
                        This is media card. You can use this section to describe
                        this content
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='small' color='primary'>
                        View
                      </Button>
                      <Button size='small' color='secondary'>
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </CssBaseline>
    </>
  );
}

export default App;
