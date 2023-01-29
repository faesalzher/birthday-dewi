import * as React from 'react';
import Head from 'next/head';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  ButtonGroup
} from '@mui/material';
import Router from 'next/router';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'

function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ m: 1 }} >
      <Button variant="contained" color="secondary" onClick={handleClickOpen} endIcon={<TextSnippetIcon />}>
        Notes
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Some notes from me"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography variant="body1" color="text.secondary">
              Hi Dewi, anyway thanks from the gift you gave me earlier on my birthday, i really like it especially the book, i was so surpsised and fascinated by it. Damn you! really? how can i top this.....
              Seems like, thanks doesn't enough. Well ok thanks hahaha. Your gift was too cute, i can't help it. That was the first time a girl gave a present to me, so it was special, and especially from you.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              I felt loved. I said i dont know how to react to a gift before.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Now i know. Im Happy!!!.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              And because i really happy for your gift, i wanna do the same for you. I tried to continue writing on the book you gave me. but maybe after like two some notes, my hand felt sore hahahaha..

            </Typography>
            <Typography variant="body1" color="text.secondary">
              Don't laugh ok!!!.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              So i planned to make this whole website dedicated about you and about us! and this page contains a few moments about us since we've met. Hope you still remember some of it.
              If you dont, then ill make you remember hehe...
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export const OurMomentsToolbar = (props) => {
  const handleBack = () => {
    // Redirect to home page
    Router
      .push('/identity')
      .catch(console.error);
  };

  const handleNext = () => {
    // Redirect to home page
    Router
      .push('/littlegift')
      .catch(console.error);
  };
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        m: -1
      }}
    >
      <Typography
        variant="h4"
      >
        Our Moments
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <AlertDialog />
        <ButtonGroup color="primary" sx={{ m: 1 }}>
          <Button variant="contained" onClick={handleBack}>
            Back
          </Button>
          {/* <Button variant="contained" onClick={handleNext}
          >
            Next
          </Button> */}
        </ButtonGroup>
      </Box>
    </Box>
  )
}
  ;
