import Head from 'next/head';
import { Box, Card, CardContent, Container, Grid, Divider, ButtonGroup, Typography, Avatar } from '@mui/material';
import { Budget } from '../components/dashboard/budget';
import { LatestOrders } from '../components/dashboard/latest-orders';
import { LatestProducts } from '../components/dashboard/latest-products';
import { Sales } from '../components/dashboard/sales';
import { TasksProgress } from '../components/dashboard/tasks-progress';
import { TotalCustomers } from '../components/dashboard/total-customers';
import { TotalProfit } from '../components/dashboard/total-profit';
import { TrafficByDevice } from '../components/dashboard/traffic-by-device';
import { CandleWish } from '../components/dashboard/candle-wish';
import { DashboardLayout } from '../components/dashboard-layout';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import Button from '@mui/material/Button';
import CelebrationIcon from '@mui/icons-material/Celebration';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Router from 'next/router';

const Root = styled(Box)(({ theme }) => ({
  display: 'flex',
  // flex: '1 1 auto',
  maxWidth: '100%',
  // paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingRight: 100,
    paddingLeft: 100,
  }
}));

const styles = {
  paperContainer: {
    backgroundImage: "url(https://drive.google.com/uc?export=view&id=11fqtU4yj5nIxMsuLi7WUuvIrHkoySgXu)",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minWidth: '100vw',
    minHeight: '100vh'
  },
  bg1: {
    backgroundImage: `url("https://drive.google.com/uc?export=view&id=1iTnlYBhvc4AvIDB7FIRPwfNjPDCetwTl")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minWidth: '10vw',
    minHeight: '10vh',
    marginLeft: 10,
    borderRadius: 10
  }
};


const Page = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSkip = () => {
    // Redirect to home page
    Router
      .push('/mywishes')
      .catch(console.error);
  };

  return (
    <>
      <Head>
        <title>
          Page One
        </title>
      </Head>
      <Box style={styles.paperContainer}>
        <Root
          component="main"
          sx={{
            flexGrow: 1,
            py: 8
          }}
        >
          <Container maxWidth={false}>
            <Card sx={{}}>
              <CardContent sx={{ flex: '1 0 auto', textAlign: 'center', display: 'flex', flexDirection: 'row' }}>
                <Grid
                  container
                  spacing={3}
                >
                  <Grid
                    item
                    lg={6}
                    sm={6}
                    xl={6}
                    xs={12}
                    sx={{ textAlign: 'center' }}
                    elevation={1}
                  >
                    <Box sx={{ textAlign: 'center', height: '100%', maxWidth: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'Column' }}>
                      <Box sx={{ textAlign: 'center', height: '100%', maxWidth: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                        <Box><CelebrationIcon color="secondary" /></Box>
                        <Box>
                          <Typography variant="h1" color="primary.light">Happy Birthday!</Typography>
                          <Typography variant="h4" color="secondary.light">Dewi Ayu Fitriani</Typography>
                        </Box>
                        <Box><CelebrationIcon color="secondary" /></Box>
                      </Box>
                      <Divider
                        sx={{
                          borderColor: '#2D3748',
                          my: 3
                        }}
                      />
                      <Box sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                        <Avatar
                          sx={{
                            height: 80,
                            width: 80,
                            ml: 1
                          }}
                          src="https://drive.google.com/uc?export=view&id=1tzBTgnFix71hqdk_Qsg_3SLhlklS9GSR"
                        >
                        </Avatar>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography variant="h7" color="text.primary">on becoming </Typography>
                        <img
                          alt=""
                          src="/static/images/home/25yearsold.png"
                          style={{
                            display: 'inline-block',
                            maxWidth: 25,
                            padding: 2
                          }}
                        />
                        <Typography variant="h7" color="text.primary"> years old</Typography>
                      </Box>
                      <Typography variant="h7" color="text.primary"> and being beautiful everyday</Typography>
                      <Divider
                        sx={{
                          borderColor: '#2D3748',
                          my: 3
                        }}
                      />
                      <Typography variant="h6" color="text.secondary">May this day brings a lot of smile to your face, </Typography>
                      <Typography variant="h6" color="text.secondary">happiness to your heart,</Typography>
                      <Typography variant="h6" color="text.secondary">and many blessings to your life... </Typography>
                      <Box> <FavoriteIcon color="error" /> </Box>
                      <Box sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'Column', padding: 2 }}>
                        <div>
                          <CandleWish open={open} handleClose={handleClose} />
                          <ButtonGroup color="primary" >
                            <Button variant="contained" onClick={handleClickOpen}>
                              Open This
                            </Button>
                            <Button variant="outlined" onClick={handleSkip}
>
                              Next
                            </Button>
                          </ButtonGroup>
                        </div>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    sm={6}
                    xl={6}
                    xs={12}
                    sx={{ textAlign: 'center' }}
                    elevation={1}
                  >
                    <Box style={styles.bg1}>
                      <Box sx={{ textAlign: 'center' }}>
                        <img
                          alt=""
                          src="/static/images/home/28jan.png"
                          style={{
                            display: 'inline-block',
                            maxWidth: '100%',
                            // height: 400
                          }}
                        />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Container>
        </Root>
      </Box>
    </>
  )
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
