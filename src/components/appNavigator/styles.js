import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  AppBar: {
    backgroundColor: 'beige',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    columnGap: '50px',
    alignItems: 'center'
  },
  center: {
    marginRight: '10px',
    display: 'flex',
    justifyContent: 'center'
  },
  left: {
    display: 'flex',
    justifyContent: 'left',
    paddingLeft: '10px'
  },
  right: {
    display: 'flex',
    justifyContent: 'right',
    paddingRight: '10px'
  },
  NavLinks: {
    textDecoration: 'none',
    color: 'black',
  },
  download:{
    textDecoration: 'none',
    color: 'black',
  }
}));