import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import useStyles from './styles';



export default function AppNavigator() {

  const classes = useStyles();


  return (
    <div className={classes.AppBar}>
      <div className={classes.left}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Eswar Bharadwaj GVS
        </Typography>
      </div>
      <div className={classes.center}>
        <Avatar
          alt="Eswar Bharadwaj"
          src="/profile.jpg"

          sx={{ width: 100, height: 100 }}
        />
      </div>
      <div className={classes.right}>
        <nav>
          <Link to="/home" className={classes.NavLinks}>
            <Button color="inherit" >Home</Button>
          </Link>
          <Link to="/aboutMe" className={classes.NavLinks}>
            <Button color="inherit" >About Me</Button>
          </Link>
          <Link to="/resume" className={classes.NavLinks}>
            <Button color="inherit" >Resume</Button>
          </Link>
          <Link to="/works" className={classes.NavLinks}>
            <Button color="inherit" >Works</Button>
          </Link>
        </nav>
      </div>

    </div>
  );
}
