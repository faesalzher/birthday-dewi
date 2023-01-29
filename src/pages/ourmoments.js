import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { products } from '../__mocks__/products';

import { OurMomentsCard } from '../components/ourmoments/ourmoments-card';
import { DashboardLayout } from '../components/dashboard-layout';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  ButtonGroup
} from '@mui/material';

import { OurMomentsToolbar } from '../components/ourmoments/ourmoments-toolbar';

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

  return (
    <>
      <Head>
        <title>
          Page 4
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
        style={styles.paperContainer}
      >
        <Container maxWidth={"lg"}>    
          <OurMomentsToolbar/>
          <Divider
            sx={{
              borderColor: '#2D3748',
              my: 3
            }}
          />
          <Box sx={{ pt: 3 }}>
            <Grid
              container
              spacing={3}
            >
              {products.map((product) => (
                <Grid
                  item
                  key={product.id}
                  lg={3}
                  md={6}
                  xs={6}
                >
                  <OurMomentsCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Box>
          {/* <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box> */}
        </Container>
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
