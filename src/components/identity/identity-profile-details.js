import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography,
  ButtonGroup
} from '@mui/material';
import Router from 'next/router';

export const IdentityProfileDetails = (props) => {
  const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });

  const handleBack = () => {
    // Redirect to home page
    Router
      .push('/mywishes')
      .catch(console.error);
  };

  const handleNext = () => {
    // Redirect to home page
    Router
      .push('/ourmoments')
      .catch(console.error);
  };

  console.log(props)
  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="Now lets talk a little thing about you, maafkan kalo beberapa ngga sesuai ya hehe"
          title="Dewi's Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={2}
          >
            {props.identitymodel.map((identity, i) => (
              <>
                <Grid
                  item
                  md={4}
                  xs={12}
                >
                  <Box sx={{ display: 'flex' }}>
                    {identity.icon}
                    <Typography variant="h7" color="primary.light">{identity.name}</Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  md={8}
                  xs={12}
                >
                  <Typography variant="body2">{identity.desc}</Typography>
                </Grid>
                <Divider />
              </>
            ))}
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <ButtonGroup color="primary" >
            <Button variant="outlined" onClick={handleBack}>
              Back
            </Button>
            <Button variant="contained" onClick={handleNext}
            >
              Next
            </Button>
          </ButtonGroup>
        </Box>
      </Card>
    </form >
  );
};
