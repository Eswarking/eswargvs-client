import { Typography } from '@material-ui/core';
import useStyles from './styles';


export default function Home() {

  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3" component="h1" className={classes.homeTitleText} > Eswar Bharadwaj GVS </Typography>
      <Typography variant="body" component="h2" className={classes.homeTitleText} > Hello Web </Typography>

    </div>

  );
};