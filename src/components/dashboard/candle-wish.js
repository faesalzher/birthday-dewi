import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Card, CardContent, Container, Grid, Divider, CardMedia, Typography } from '@mui/material';

export const CandleWish = (props) => {
    const [blow, setOpenBlow] = React.useState(false);
    const handleClickBlow = () => {
        setOpenBlow(true);
    };

    const handleCloseBlow = () => {
        setOpenBlow(false);
        props.handleClose();
    };

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" >
                    Make a Wish!
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" sx={blow ? { display: 'none' } : {}}>
                        Lets make a wish before you blowing this candle
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description" sx={blow ? {} : { display: 'none' }}>
                        Hope your wishes come true
                    </DialogContentText>
                    <Box>
                        <div style={{ width: '100%', height: 0, paddingBottom: '120%', position: 'relative', overflow: 'hidden' }}>
                            <iframe src={blow ? "https://giphy.com/embed/C5HdlUByZFTj2" : "https://giphy.com/embed/11S1Zy5SPIqv84"} style={{ position: 'absolute', width: '100%', height: '100%' }} frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </Box>
                </DialogContent>
                <Box sx={{ textAlign: 'center' }}>
                    <Button variant="contained" onClick={handleClickBlow}>
                        Blow this candle
                    </Button>
                </Box>
                <DialogActions>
                    <Button onClick={handleCloseBlow}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}