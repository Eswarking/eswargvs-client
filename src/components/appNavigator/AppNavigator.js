import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import useStyles from './styles';



export default function AppNavigator() {

  const classes = useStyles();


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Avatar
            alt="Eswar Bharadwaj"
            src="/profile.jpg"
            className = {classes.Avatar}
            // sx={{ width: 56, height: 56 }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Eswar Bharadwaj
          </Typography>
          <Link to="/home" className={classes.NavLinks}>
            <Button color="inherit" >Home</Button>
          </Link>
          <Link to="/aboutMe" className={classes.NavLinks}>
            <Button color="inherit" >About Me</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
