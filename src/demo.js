import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import green from "@material-ui/core/colors/green";
import TextField from "@material-ui/core/TextField";
//import yellow from '@material-ui/core/colors/yellow';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  Toolbar: {
    backgroundColor: green[200]
  },
  menuButton: {
    marginRight: theme.spacing(2)
    //color: yellow[500],
  },
  title: {
    flexGrow: 1
    //color: yellow[500],
  },
  userInput: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center"
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);

  const handleChange = (event) => {
    console.log(`checked state: ${event.target.checked}`);
    setAuth(event.target.checked);
  };

  return (
    <div className={classes.root}>
      {/* <FormGroup >
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      <AppBar position="static">
        <Toolbar className={classes.Toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Todos
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                //onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <form className={classes.userInput} noValidate autoComplete="off">
        <div>
          <TextField
            id="standard-search"
            label="add something todo"
            type="search"
          />
        </div>
      </form>
    </div>
  );
}
