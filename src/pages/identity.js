import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { IdentityProfile } from '../components/identity/identity-profile';
import { IdentityProfileDetails } from '../components/identity/identity-profile-details';
import { DashboardLayout } from '../components/dashboard-layout';
import identitymodel from '../model/identitymodel';

const styles = {
  paperContainer: {
    backgroundImage: `url(${"/static/images/home/bg1.jpg"})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minWidth: '100vw',
    minHeight: '100vh'
  }
};

const Page = () => (
  <>
    <Head>
      <title>
        Page 3
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
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <IdentityProfile />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <IdentityProfileDetails identitymodel={identitymodel} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
