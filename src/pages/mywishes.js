import Head from 'next/head';
import { Box, Card, CardContent, Container, CardActions, Divider, ButtonGroup, Typography, CardHeader } from '@mui/material';
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

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import mywishesmodel from '../model/mywishesmodel';

const Accordion = styled((props) => (
  <MuiAccordion elevation={1} {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 4,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(255, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {mywishesmodel.map((mywishes, i) => (
        <Accordion key={i}>
          <AccordionSummary aria-controls={mywishes.name} id={mywishes.name}>
            <Typography variant="h7" color='primary.light'>{mywishes.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" color='text.secondary'>
              {mywishes.desc}
            </Typography>
          </AccordionDetails>
        </Accordion>
        // <Accordion >
      ))}
    </div>

  );
}

const Root = styled(Box)(({ theme }) => ({
  display: 'flex',
  // flex: '1 1 auto',
  maxWidth: '100%',
  // paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingRight: 500,
    paddingLeft: 500,
  }
}));

const styles = {
  paperContainer: {
    backgroundImage: `url(${"/static/images/home/bg1.jpg"})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    // minWidth: '100vw',
    // minHeight: '100vh'
  }
};


const Page = () => {
  const handleBack = () => {
    // Redirect to home page
    Router
      .push('/')
      .catch(console.error);
  };

  const handleNext = () => {
    // Redirect to home page
    Router
      .push('/identity')
      .catch(console.error);
  };

  return (
    <>
      <Head>
        <title>
          Page Two
        </title>
      </Head>
      <Box style={styles.paperContainer}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8
          }}
        >
          <Container maxWidth="sm">
            <Card sx={{}}>
              {/* <Box sx={{ textAlign: 'center', padding: 1, marginTop: 4 }}>
                <Typography variant="h4" color="primary">List of my wishes</Typography>
              </Box> */}
              <CardHeader
                subheader="Below are the list of my wishes to you"
                title="My wishes to you"
                color="primary"
                sx={{ textAlign: 'center'}}
              />
              <Divider
                sx={{
                  borderColor: 'primary',
                  my: 1
                }}
              />
              <CardContent >
                <Box >
                  <CustomizedAccordions />
                </Box>
              </CardContent>
              <Divider
                sx={{
                  borderColor: 'primary',
                  my: 1
                }}
              />
              <CardActions sx={{ padding: 2, justifyContent: 'flex-end' }}>
                <ButtonGroup color="primary" >
                  <Button variant="outlined" onClick={handleBack}>
                    Back
                  </Button>
                  <Button variant="contained" onClick={handleNext}
                  >
                    Next
                  </Button>
                </ButtonGroup>
              </CardActions>
            </Card>
          </Container>
        </Box>
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
