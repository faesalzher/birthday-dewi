import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';

const user = {
  avatar: '/static/images/home/ident.jpg',
  city: 'Malang',
  country: 'Indonesia',
  jobTitle: 'Cutest Girl',
  name: 'Dewi Ayu Fitriani',
  timezone: 'GMT+7'
};

export const IdentityProfile = (props) => (
  <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 100,
            mb: 2,
            width: 100
          }}
        />
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h7"
        >
          {user.jobTitle}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {`${user.city}, ${user.country}`}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.timezone}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    {/* <CardActions>
      <Button
        color="primary"
        fullWidth
        variant="text"
      >
        Upload picture
      </Button>
    </CardActions> */}
  </Card>
);
