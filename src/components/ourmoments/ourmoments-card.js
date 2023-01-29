import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography, CardActionArea, CardMedia } from '@mui/material';
import { Clock as ClockIcon } from '../../icons/clock';
import { Download as DownloadIcon } from '../../icons/download';
import * as React from 'react';
import { OurMomentsModal } from './ourmoments-modal';

export const OurMomentsCard = ({ product, ...rest }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    console.log(open)
  };

  const handleClose = () => {
    setOpen(false);
    console.log(open)
  };


  return (
    <Card sx={{ maxWidth: 345 }} elevation={2}>
      <OurMomentsModal open={open} handleClose={handleClose} product={product}/>
      <CardActionArea onClick={handleClickOpen}>
        <CardMedia
          component="img"
          height="140"
          image={product.media}
          // image={"https://drive.google.com/uc?export=view&id=1vlNczH8hL_M85EKsZBb1DSSrYxFy-J6x"}
         
          alt={product.title}
        />
        <CardContent sx={{ padding: '8px 20px' }}>
          <Typography gutterBottom variant="h6" >
            {product.title}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
          Lizards are a
        </Typography> */}
        </CardContent>
        <Divider />
        <Box sx={{ padding: '8px 15px' }}>
          <Grid
            container
            spacing={2}
            sx={{ justifyContent: 'space-between' }}
          >
            <Grid
              item
              sx={{
                alignItems: 'center',
                display: 'flex'
              }}
            >
              <ClockIcon color="action" fontSize="small" />
              <Typography
                color="textSecondary"
                display="inline"
                sx={{ pl: 1 }}
                variant="body2"
              >
                {product.CreatedAt}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </CardActionArea>
    </Card>
  )
};

OurMomentsCard.propTypes = {
  product: PropTypes.object.isRequired
};
