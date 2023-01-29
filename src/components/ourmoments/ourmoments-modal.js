import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Clock as ClockIcon } from '../../icons/clock';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography, CardActionArea, CardMedia } from '@mui/material';

export const OurMomentsModal = (props) => {
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (props.open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [props.open]);
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        fullScreen={fullScreen}
        fullWidth={'sm'}
      >
        <DialogTitle id="scroll-dialog-title">{props.product.title} -
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            {props.product.CreatedAt}
          </Typography>
        </DialogTitle>
        <DialogContent dividers={true}>
          <img
            style={{ maxWidth: "100%", height: 'auto' }}
            src={props.product.media}
            alt={props.product.title}
          />
          {props.product.vid != null ?
            <Box>
              <div style={{ width: '100%', height: 0, paddingBottom: '120%', position: 'relative', overflow: 'hidden' }}>
                <iframe src={props.product.vid}
                  style={{ position: 'absolute', width: '100%', height: '100%' }} frameBorder="0" allowFullScreen allow="autoplay"></iframe>
              </div>
            </Box> :
            <></>}
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {props.product.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
};


