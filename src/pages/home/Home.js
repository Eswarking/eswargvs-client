import { Typography } from '@material-ui/core';
import useStyles  from './styles';


export default function Home() {

  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3" component="h1" className={classes.homeTitleText} > Eswar Bharadwaj Gvs </Typography>
      <Typography variant="body" component="h2" className={classes.homeTitleText} > I am a dedicated Web-Developer intereseted in developing interactive Web Applications </Typography>

    </div>

  );
};