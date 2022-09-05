import { FC, ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Box, Button, Link, Toolbar, Typography } from "@mui/material";

import { routes } from "../navigation/routes";
import { RootStore } from "../redux";
import { AppDispatch } from "../redux";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../redux/actions/authActions";

export const Navbar: FC = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const userName: string = useSelector(
    (state: RootStore) => state.authReducer.userName,
  );
  return (
    <AppBar position="sticky">
      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "secondary.main",
          px: "10rem",
        }}
      >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            color="primary.text"
            sx={{
              mr: 2,
            }}
          >
            Pika App
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Box>
              {routes
                .filter((route) => route.title !== "Login")
                .map((page) => (
                  <Link
                    key={page.key}
                    component={NavLink}
                    to={page.path}
                    color="primary.text"
                    underline="none"
                    variant="button"
                    sx={{ fontSize: "large", marginLeft: "2rem" }}
                  >
                    {page.title}
                  </Link>
                ))}
            </Box>
          </Box>
          {userName ? (
            <>
              <Box
                sx={{
                  pr: "1rem",
                }}
              >{`Logged in as: ${userName}`}</Box>
              <Button
                onClick={() => dispatch(logOutUser())}
                variant="contained"
                color="primary"
              >
                Logout
              </Button>
            </>
          ) : (
            <Link
              component={NavLink}
              to="/login"
              color="primary.text"
              underline="none"
              variant="button"
              sx={{ fontSize: "large", marginLeft: "2rem" }}
            >
              Login
            </Link>
          )}
        </Toolbar>
      </Box>
    </AppBar>
  );
};
