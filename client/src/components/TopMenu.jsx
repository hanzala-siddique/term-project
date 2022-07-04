import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import userService from "../services/UserService";

const useStyles = makeStyles({
  link: {
    color: "white",
    padding: "10px",
    textDecoration: "none",
  },
});

function TopMenu(props) {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Todos Management App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/todos/1">Todos</Nav.Link>
            <Nav.Link href="/todos/add">Add a New Todo</Nav.Link>
          </Nav>
          <Nav>
            {!userService.isLoggedIn() ? (
              <>
                <Nav.Link href="/register">
                  <Button variant="contained" color="primary">
                    Sign Up
                  </Button>
                </Nav.Link>
                <Nav.Link href="/login">
                  <Button variant="contained" color="primary">
                    Log In
                  </Button>
                </Nav.Link>
              </>
            ) : (
              <Button
                variant="outlined"
                color="secondary"
                onClick={(e) => {
                  userService.logout();
                  window.location.href = "/";
                }}
              >
                LogOut {userService.getLoggedInUser().name}
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <AppBar position="static">
    //   <Toolbar>
    //     <Typography>
    //       <Link to="/" className={classes.link}>
    //         Home
    //       </Link>
    //       <Link to="/todos" className={classes.link}>
    //         Todos
    //       </Link>
    //       <Link to="/todos/add" className={classes.link}>
    //         Add a Todo
    //       </Link>
    //       {!userService.isLoggedIn() ? (
    //         <>
    //           <Link to="/login" className={classes.link}>
    //             Login
    //           </Link>

    //           <Link to="/register" className={classes.link}>
    //             Register
    //           </Link>
    //         </>
    //       ) : (
    //         <Button
    //           variant="contained"
    //           color="primary"
    //           onClick={(e) => {
    //             userService.logout();
    //             window.location.reload();
    //           }}
    //         >
    //           LogOut {userService.getLoggedInUser().name}
    //         </Button>
    //       )}
    //     </Typography>
    //   </Toolbar>
    // </AppBar>
  );
}

export default TopMenu;
